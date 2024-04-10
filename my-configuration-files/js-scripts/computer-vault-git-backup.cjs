
const { exec } = require('child_process');

// Function to send notification
function gitPush() {
    // Execute the notify-send command
    let command = 'cd ~/Computer-Vault && git add -A && git commit -m "new update $(git rev-list --count HEAD)" && git push -u ssh-origin main';
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

// 

setInterval(gitPush, 60*60*1000);





