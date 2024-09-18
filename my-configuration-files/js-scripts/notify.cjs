const { exec } = require("child_process");


const cmmNotify = `zenity --notification --text="$(xset q | grep -o 'Num Lock:[ ]*\\(off\\|on\\)')"`;
exec(cmmNotify,(error)=>{
    if(error){
        console.log(error)

    }
})