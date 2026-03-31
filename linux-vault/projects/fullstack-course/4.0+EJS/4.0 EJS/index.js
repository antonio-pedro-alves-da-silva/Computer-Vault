import express from "express";

const app = express();
const port = 3000;


app.get("/",(req,res) => {

    const date = new Date();
    const day = date.getDay();
    
    let type;
    let adv;

    if(day == 0 || day == 6){
        type = "the weekend";
        adv = "it's time to have some fun"
    } else { 
        type = "a weekday";
        adv = "it's time to work hard"
    }

    res.render("solution.ejs",{
        dayType:type,
        advice:adv
    })
})

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})