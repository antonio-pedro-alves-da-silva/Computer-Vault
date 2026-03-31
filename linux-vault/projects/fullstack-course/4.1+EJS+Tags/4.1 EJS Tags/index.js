import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) => {
  const data = {
    title:"EJS Tag",
    seconds:new Date().getSeconds(),
    items:["apple","banana","cheery"],
    htmlContent:"<em>this is some em text</em>"
  };
  res.render("solution.ejs",data);
})

app.listen(port,() => {
  console.log(`server started on port ${port}`)
})