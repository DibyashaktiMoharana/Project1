const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const index = __dirname+ "/index.html"

app.set("view engine","ejs")

app.use(express.static("public"))
app.get("/", function(req,res){
    // res.sendFile(index);
    res.render("index");
});


app.listen(3000,function(){
    console.log("Server started at port 3000");
});