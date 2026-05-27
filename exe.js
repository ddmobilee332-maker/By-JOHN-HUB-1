import readline from 'readline';
import si from 'systeminformation';
import chalk from 'chalk';
import gradient from 'gradient-string';
import Table from 'cli-table3';
import { analyzeLink } from './utils.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function showDashboard() {
    console.clear();
    
    const logo = `
    ██████╗ ██╗   ██╗███████╗███╗   ██╗██╗   ██╗ █████╗ ██╗     ██╗  ██╗██╗   ██╗██████╗ 
    ██╔══██╗██║   ██║██╔════╝████╗  ██║╚██╗ ██╔╝██╔══██╗██║     ██║  ██║██║   ██║██╔══██╗
    ██████╔╝██║   ██║█████╗  ██╔██╗ ██║ ╚████╔╝ ███████║██║     ███████║██║   ██║██████╔╝
    ██╔══██╗██║   ██║██╔══╝  ██║╚██╗██║  ╚██╔╝  ██╔══██║██║     ██╔══██║██║   ██║██╔══██╗
    ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║  ██║███████╗██║  ██║╚██████╔╝██████╔╝
    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ 
    `;
    
    const neonMatrix = gradient(['#00ffcc', '#0099ff', '#7928ca', '#ff007f']);
    const cyberGlow = gradient(['#ff007f', '#7928ca', '#00ffcc']);
    
    console.log(neonMatrix(logo));
    console.log(cyberGlow(`             >> RUENYAI ULTRA OVERRIDE TERMINAL V1.0.0 << `));
    console.log(chalk.gray(` ═════════════════════════════════════════════════════════════════════════════════`));
    console.log(chalk.bold.red(` [!] WARNING: SECURE SHELL PENETRATION ACTIVE. EXTRACTING HARDWARE PROFILE...`));
    console.log(chalk.gray(` ═════════════════════════════════════════════════════════════════════════════════\n`));

    const osInfo = await si.osInfo();
    const cpu = await si.cpu();
    const mem = await si.mem();
    const time = si.time();
    const graphics = await si.graphics();
    const disk = await si.fsSize();

    const table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
               , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
               , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
               , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
        head: [chalk.bold.cyan('🔮 CORE NODE PATH'), chalk.bold.cyan('🛰️ DECRYPTED SPEC DATA METRICS')],
        colWidths: [26, 56]
    });

    const gpuName = graphics.controllers.length > 0 ? `${graphics.controllers[0].model}` : 'Virtual Graphics Engine';
    const mainDisk = disk.length > 0 ? `${(disk[0].size / 1024 / 1024 / 1024).toFixed(1)} GB (${disk[0].use}% Used)` : 'Unknown';

    table.push(
        [chalk.bold.green(' 🖥️  OS Core Profile'), chalk.white(`${osInfo.distro} (${osInfo.arch})`)],
        [chalk.bold.green(' 🔑 Kernel Signature'), chalk.hex('#00ffcc')(osInfo.release)],
        [chalk.bold.green(' ⚡ Central CPU Unit'), chalk.white(`${cpu.manufacturer} ${cpu.brand} @ ${cpu.speed}GHz`)],
        [chalk.bold.green(' 📊 Core Matrix Grid'), chalk.white(`${cpu.cores} Physical / ${cpu.threads || cpu.cores * 2} Logicals`)],
        [chalk.bold.green(' 🎮 Graphics Matrix'), chalk.hex('#ff007f')(gpuName)],
        [chalk.bold.green(' 🧠 Total RAM Pool'), chalk.white(`${(mem.total / 1024 / 1024 / 1024).toFixed(2)} GB`)],
        [chalk.bold.green(' 🔋 Free Memory Space'), chalk.hex('#00ffcc')(`${(mem.available / 1024 / 1024 / 1024).toFixed(2)} GB`)],
        [chalk.bold.green(' 💾 Main Drive Node'), chalk.white(mainDisk)],
        [chalk.bold.green(' ⏱️  System Uptime'), chalk.hex('#ffff00')(`${(time.uptime / 3600).toFixed(2)} Cyber Hours`)]
    );

    console.log(table.toString());
    console.log(chalk.gray(` ═════════════════════════════════════════════════════════════════════════════════`));
    console.log(chalk.bold.yellow(`  ⚡ COMMAND ACTIVE >> Type '${chalk.cyan('OOPP')}' to scan world-wide links or '${chalk.red('exit')}'`));
    console.log(chalk.gray(` ═════════════════════════════════════════════════════════════════════════════════\n`));
    
    startCommandPrompt();
}

function startCommandPrompt() {
    rl.question(gradient(['#ff007f', '#00ffcc'])('⚡ Ruenyai@Terminal> '), async (input) => {
        const command = input.trim();

        if (command === 'OOPP' || command === 'oopp') {
            triggerLinkScanner();
        } else if (command === 'exit') {
            console.log(chalk.bold.red('\n🔌 [!] DISCONNECTING SESSIONS... EXITED.'));
            process.exit(0);
        } else {
            console.log(chalk.bold.red(`❌ [ERROR] UNRECOGNIZED COMMAND: '${command}'. Input 'OOPP' for scanner execution.`));
            startCommandPrompt();
        }
    });
}

function triggerLinkScanner() {
    console.log(gradient(['#ff0055', '#ff9900'])('\n 📡 [ GLOBAL OVERRIDE LINK SCANNER ACTIVE: INPUT WEB ADDRESS ]'));
    rl.question(chalk.bold.cyan(' 🔗 TARGET URL -> '), async (url) => {
        if (!url) {
            console.log(chalk.bold.red(' ⚠️  CRITICAL: Target parameter missing! Redirecting to shell...'));
            return startCommandPrompt();
        }

        console.log(chalk.bold.blue('\n ⚡ INJECTING PACKETS... PENETRATING HOST INFO ACROSS METROPOLIS DNC...'));
        
        const result = await analyzeLink(url);

        const borderGradient = gradient(['#00ffcc', '#7928ca']);
        console.log(borderGradient('\n ╔════════════════════════ [ DECRYPTED RAW DATA REPORT ] ════════════════════════╗'));
        if (result.status === 'Success') {
            console.log(` ║  ${chalk.bold.green('🟢 RESPONSE STATUS  :')} ` + chalk.white(result.statusCode));
            console.log(` ║  ${chalk.bold.green('🌐 INTERNET HOST     :')} ` + chalk.hex('#00ffcc')(result.host));
            console.log(` ║  ${chalk.bold.green('📍 DETECTED SERVER IP:')} ` + chalk.hex('#ffff00')(result.ip));
            console.log(` ║  ${chalk.bold.green('⚡ NET RESPONSE PING :')} ` + chalk.hex('#ff007f')(result.ping));
            console.log(` ║  ${chalk.bold.green('🖥️  BACKEND ENGINE    :')} ` + chalk.white(result.server));
            console.log(` ║  ${chalk.bold.green('📝 WEB PAGE TITLE    :')} ` + chalk.cyan(result.title));
            console.log(` ║  ${chalk.bold.green('📄 INDEX META DESC   :')} ` + chalk.gray(result.description));
        } else {
            console.log(` ║  ${chalk.bold.red('🔴 EXTRACTION FAIL   :')} ` + chalk.red(result.reason));
        }
        console.log(borderGradient(' ╚════════════════════════════════════════════════════════════════════════════════╝\n'));

        startCommandPrompt();
    });
}

showDashboard();
