const BOT_NAME = "ShowBot";

const knowledgeBase = [
    {
        
        keywords: ["hi", "hello", "hey", "namaste"],
        answer: `
        👋 Hello! I’m <strong>${BOT_NAME}</strong>, your PC troubleshooting assistant.<br><br>
        You can ask me things like:
        `
    },
    {
        keywords: ["Give me a problem list to solve", "problem list", "problems to solve"],
        answer: `
        🧠 Here are some common PC problems you can ask me about:
        <br>• Computer is slow
        <br>• No internet connection
        <br>• PC not turning on
        <br>• Overheating problem
        <br>• No sound from speakers
        <br>• USB device not recognized
        <br>• Blue screen error
        <br>• Keyboard or mouse not working
        <br>• Display problem
        <br>• Printer not working
        <br>• Virus detected
        <br>• Storage full
        `
    },
    {
    keywords: ["my name is", "i am", "call me"],
    answer: function(message) {
        const words = message.split(" ");
        const name = words[words.length - 1];
        saveUserName(name);
        return `Nice to meet you, <strong>${name}</strong>! 😊`;
    }
},
    {
        keywords: ["what is my name", "who am i"],
        answer: function() {
            const name = getUserName();
            if (name) {
                return `Your name is <strong>${name}</strong>.`;
            } else {
                return "I don't know your name yet. You can tell me by saying 'My name is [Your Name]'.";
            }
        }
    },
    {
        keywords: ["help", "problem", "issue", "troubleshoot"],
        answer: `
        🤔 I’m here to help! Please describe your PC problem in detail, and I’ll do my best to provide a solution.
        `
    },
    {
        keywords: ["bye", "goodbye", "see you"],
        answer: `
        👋 Goodbye! If you have any more PC issues, just come back and ask <strong>${BOT_NAME}</strong>.
        `
    },
    {
        keywords :["what" ,"Name", "who are you"],
        answer: `
        🤖 I’m <strong>${BOT_NAME}</strong>, your friendly PC troubleshooting assistant. I can help you fix common computer problems and provide tips to keep your PC running smoothly.
        `
    },
    {
        keywords: ["thanks", "thank you"],
        answer: `
        😊 You're welcome!<br>
        If you have any other PC problems, just ask <strong>${BOT_NAME}</strong>.
        `
    },

    // Slow PC
    {
        keywords: ["slow", "lag", "slow computer", "slow pc"],
        answer: `
        <strong>🐌 Slow Computer Fix:</strong><br>
        1. Close unnecessary programs<br>
        2. Run Disk Cleanup<br>
        3. Disable startup apps<br>
        4. Scan for viruses<br>
        5. Upgrade RAM if needed
        `
    },

    // No Internet
    {
        keywords: ["no internet", "wifi not working", "network problem"],
        answer: `
        <strong>📡 Internet Fix:</strong><br>
        1. Restart router<br>
        2. Check cables<br>
        3. Run network troubleshooter<br>
        4. Update network drivers
        `
    },

    // Overheating
    {
        keywords: ["overheating", "hot", "temperature"],
        answer: `
        <strong>🔥 Overheating Fix:</strong><br>
        1. Clean dust from fans<br>
        2. Check ventilation<br>
        3. Replace thermal paste<br>
        4. Use cooling pad
        `
    },

    // No Sound
    {
        keywords: ["no sound", "audio problem", "sound not working"],
        answer: `
        <strong>🔇 Audio Fix:</strong><br>
        1. Check volume settings<br>
        2. Select correct output device<br>
        3. Update audio drivers<br>
        4. Restart audio service
        `
    },

    // USB
    {
        keywords: ["usb not working", "usb problem"],
        answer: `
        <strong>🔌 USB Fix:</strong><br>
        1. Try another USB port<br>
        2. Restart computer<br>
        3. Update USB drivers<br>
        4. Reinstall USB controllers
        `
    },

    // PC not starting
    {
        keywords: ["pc not starting", "computer not turning on", "no power"],
        answer: `
        <strong>⚡ PC Not Turning On:</strong><br>
        1. Check power cable<br>
        2. Test power outlet<br>
        3. Remove battery (laptop) and hold power button 30 sec<br>
        4. Check RAM and power supply
        `
    },

    // Blue screen
    {
        keywords: ["blue screen", "bsod", "blue error"],
        answer: `
        <strong>💀 Blue Screen Fix:</strong><br>
        1. Note the error code<br>
        2. Boot in Safe Mode<br>
        3. Update or rollback drivers<br>
        4. Run memory diagnostic
        `
    },

    // Keyboard not working
    {
        keywords: ["keyboard not working", "keys not working"],
        answer: `
        <strong>⌨️ Keyboard Fix:</strong><br>
        1. Reconnect keyboard<br>
        2. Try another USB port<br>
        3. Restart PC<br>
        4. Update keyboard drivers
        `
    },

    // Mouse not working
    {
        keywords: ["mouse not working", "cursor not moving"],
        answer: `
        <strong>🖱️ Mouse Fix:</strong><br>
        1. Reconnect mouse<br>
        2. Change USB port<br>
        3. Replace batteries (wireless mouse)<br>
        4. Update mouse drivers
        `
    },

    // Display issue
    {
        keywords: ["no display", "screen black", "monitor not working"],
        answer: `
        <strong>🖥️ No Display Fix:</strong><br>
        1. Check monitor power<br>
        2. Check display cable<br>
        3. Try another port (HDMI/VGA)<br>
        4. Reseat RAM and GPU
        `
    },

    // Printer problem
    {
        keywords: ["printer not working", "printer offline"],
        answer: `
        <strong>🖨️ Printer Fix:</strong><br>
        1. Check printer power<br>
        2. Restart printer and PC<br>
        3. Check USB/WiFi connection<br>
        4. Reinstall printer drivers
        `
    },

    // Virus
    {
        keywords: ["virus", "malware", "infected"],
        answer: `
        <strong>🛡️ Virus Removal:</strong><br>
        1. Run Windows Defender full scan<br>
        2. Remove suspicious programs<br>
        3. Update antivirus<br>
        4. Reset browser settings
        `
    },

    // Storage full
    {
        keywords: ["storage full", "disk full", "no space"],
        answer: `
        <strong>💾 Storage Full Fix:</strong><br>
        1. Delete unnecessary files<br>
        2. Empty recycle bin<br>
        3. Run Disk Cleanup<br>
        4. Uninstall unused programs
        `
    }
];

function saveUserName(name) {
    localStorage.setItem("userName", name);
}

function getUserName() {
    return localStorage.getItem("userName");
}

function getAnswer(userMessage) {
    userMessage = userMessage.toLowerCase();

    for (let item of knowledgeBase) {
        for (let keyword of item.keywords) {
            if (userMessage.includes(keyword)) {
                
                // If answer is a function (like name memory)
                if (typeof item.answer === "function") {
                    return item.answer(userMessage);
                }

                return item.answer;
            }
        }
    }

    const name = getUserName();
    if (name) {
        return `Hi <strong>${name}</strong>, I couldn’t find a solution for that. Try asking about a PC problem.`;
    }

    return `
    🤖 I’m <strong>${BOT_NAME}</strong>.<br>
    I couldn’t find a solution for that.<br><br>
    Try asking:
    <br>• Computer is slow
    <br>• No internet
    <br>• PC not starting
    `;
}

