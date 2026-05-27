#!/bin/bash
clear

GREEN='\033[1;32m'
CYAN='\033[1;36m'
YELLOW='\033[1;33m'
RED='\033[1;31m'
PURPLE='\033[1;35m'
NC='\033[0m'

echo -e "${PURPLE}=======================================================${NC}"
echo -e "${CYAN}   ⚡ RUENYAI HUB ULTRA INSTALLER AUTOMATION MATRIX ⚡  ${NC}"
echo -e "${PURPLE}=======================================================${NC}"
sleep 0.5
echo -e "${YELLOW}[*] Initializing repository configuration setup...${NC}"
sleep 0.5

if [ -f /data/data/com.termux/files/usr/bin/pkg ]; then
    echo -e "${CYAN}[+] Platform Node Detected: Termux Environment${NC}"
    echo -e "${YELLOW}[*] Synching database and pulling Node.js dependencies...${NC}"
    pkg update -y && pkg install nodejs -y
    BIN_DIR="/data/data/com.termux/files/usr/bin"
else
    echo -e "${CYAN}[+] Platform Node Detected: Unix/Linux Subsystem${NC}"
    echo -e "${YELLOW}[*] Fetching system upgrade and package bindings...${NC}"
    sudo apt update && sudo apt install -y nodejs npm
    BIN_DIR="/usr/local/bin"
fi

echo -e "\n${YELLOW}[*] Deploying advanced node modules from package configuration...${NC}"
npm install

echo -e "\n${YELLOW}[*] Binding binary shortcuts inside core kernel directory [${BIN_DIR}]...${NC}"

echo -e "#!/bin/sh\nnode $(pwd)/exe.js \"\$@\"" > "$BIN_DIR/exe.js"
chmod +x "$BIN_DIR/exe.js"

echo -e "#!/bin/sh\nnode $(pwd)/exe.js \"\$@\"" > "$BIN_DIR/OOPP"
chmod +x "$BIN_DIR/OOPP"

echo -e "\n${GREEN}[✓] SUCCESS: Ruenyai Ultra Fetcher fully synchronized & unlocked!${NC}"
echo -e "${PURPLE}═════════════════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN} 👉 EXECUTION KEY 1 : Type ${GREEN}exe.js${CYAN} anywhere to boot up system dashboard!${NC}"
echo -e "${CYAN} 👉 EXECUTION KEY 2 : Type ${GREEN}OOPP${CYAN} anywhere to launch terminal bypass loop!${NC}"
echo -e "${PURPLE}═════════════════════════════════════════════════════════════════════${NC}"
