const { exec } = require("child_process");


const cmmNotify = "xset q | grep -o " + "'" + "Num Lock:[ ]*" + `\` + "(off\|on\)" + "'"


    exec(cmmNotify,(error,stdout)=>{
        if(error){
            console.log(error)
    
        }

        console.log(stdout)
    })
