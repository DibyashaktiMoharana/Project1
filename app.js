const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const index = __dirname+ "/index.html"
const https = require("https");


const apikey = "1b7cb4fba9b39deb7908d573ba32d920";
const units = "units=metric"
const url = "https://api.openweathermap.org/data/2.5/weather?q="+ "Vellore" +"&"+units+"&appid="+apikey;

let city = "Vellore";
let temp;
let imageURL;

app.set("view engine","ejs")

app.use(express.static("public"))


https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
        const weatherData = JSON.parse(data);
        temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon;
        imageURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
    })
});

app.get("/", function(req,res){



    // res.sendFile(index);
    res.render("index",{
        City:city,
        Weather:temp,
        icon: imageURL
    });
});


app.listen(3000,function(){
    console.log("Server started at port 3000");
});