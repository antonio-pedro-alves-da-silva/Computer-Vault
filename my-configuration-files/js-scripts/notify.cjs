const { exec } = require("child_process");


const cmmNotify = `dunst close && notify-send "$(xset q | grep -o "Num Lock:\s*\(off\|on\)")"`;
exec(cmmNotify,(error)=>{
    if(error){
        console.log(error)

    }
})