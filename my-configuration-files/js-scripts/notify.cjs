
const { exec } = require("child_process");

const cmmNotify = "bash /home/robotuser/Computer-Vault/my-configuration-files/system-scripts/numlock-status.sh";


    exec(cmmNotify,(err,stdout)=>{
        if(err){
            console.log(err)
        } else {
            console.log(stdout)
        }
    })

