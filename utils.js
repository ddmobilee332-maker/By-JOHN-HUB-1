import axios from 'axios';
import * as cheerio from 'cheerio';
import dns from 'dns';
import { URL } from 'url';

export async function analyzeLink(targetUrl) {
    try {
        if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
            targetUrl = 'https://' + targetUrl;
        }

        const parsedUrl = new URL(targetUrl);
        const startTime = Date.now();
        
        const response = await axios.get(targetUrl, { 
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
            timeout: 5000 
        });
        
        const duration = Date.now() - startTime;
        const $ = cheerio.load(response.data);

        const ip = await new Promise((resolve) => {
            dns.lookup(parsedUrl.hostname, (err, address) => resolve(err ? 'Unknown' : address));
        });

        return {
            status: 'Success',
            statusCode: response.status,
            host: parsedUrl.hostname,
            ip: ip,
            ping: `${duration}ms`,
            title: $('title').text().trim() || 'No Title',
            description: $('meta[name="description"]').attr('content') || 'No Description',
            server: response.headers['server'] || 'Hidden',
            contentLength: response.headers['content-length'] || 'Unknown'
        };
    } catch (error) {
        return { status: 'Failed', reason: error.message };
    }
}
