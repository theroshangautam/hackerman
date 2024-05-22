function applyStyles() {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#00FF00';
    document.body.style.fontFamily = "'Courier New', Courier, monospace";
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';

    const message = document.querySelector('p');

        message.style.fontSize = '1.5em';
        message.style.textAlign = 'center';
        message.style.animation = 'flicker 1.5s infinite';
    

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                opacity: 1;
            }
            20%, 24%, 55% {
                opacity: 0.5;
            }
        }
    `, styleSheet.cssRules.length);

    const terminal = document.querySelector('#terminal');

        terminal.style.backgroundColor = 'black';
        terminal.style.padding = '20px';
        terminal.style.borderRadius = '10px';
        terminal.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.5)';
        terminal.style.width = '80%';
        terminal.style.maxWidth = '800px';
        terminal.style.textAlign = 'left';
        terminal.style.lineHeight = '1.4';
    
}



let magicButton = document.querySelector("#magic");

const hackfunction = () => {
    let messagesParagraph = document.querySelector("p");
    let namePrompt = document.querySelector("#nameprompt").value;
    document.querySelector("label").hidden = true;
    document.querySelector("#nameprompt").hidden = true;
    magicButton.hidden = true;
    applyStyles();
let hackerMessages = [
        `initializing hack...`, 
        `attempting to unsecure connections...`, 
        `connecting to ${namePrompt}'s network...`,
        `extracting ${namePrompt}'s data`, 
        `disconnecting from ${namePrompt}'s network`, 
        `hack complete! Data injected to the server.`, 
        `initializing step 2...`, 
        `performing brute force attack...`, 
        `fetching ${namePrompt}'s password...`, 
        `testing ${namePrompt}'s account's password...`, 
        `trying 50000000 combinations...`, 
        `password matched!`, 
        `logging in...`, 
        `accessing confidential data...`, 
        `copying data to the server...`, 
        `clearing log files...`, 
        `operation successful!`
    ];

    const displayMessages = async () => {
        for (let message of hackerMessages) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    messagesParagraph.innerText = message;
                    messagesParagraph.setAttribute("aria-live", "assertive")
                    resolve();
                }, 4000); // Adjust the timeout as needed
            });
        }
    };

    displayMessages();
};

magicButton.addEventListener("click", hackfunction);
