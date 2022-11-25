const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html");


});

app.post("/", function(req, res){
  // const nameOfCity = req.body.cityName;

  const query = req.body.cityName;
  const apiKey = "3712c40bd43b9b9c388818e83126cc94";
  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units="+unit+"&appid="+apiKey;
  https.get(url, function(response){
  // console.log("status code: ", response.statusCode);
  response.on("data", function(data){
    var weatherData = JSON.parse(data);
    // console.log(weatherData);

    const icon = weatherData.weather[0].icon;
    const imageUrl = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    res.write("<p> the weather in "+ query+" is currently: "+ description + "</p>")
    res.write("<h1>The temprature in "+ query +" is: " + temp + " degree</h1>");
    res.write("<img src = " + imageUrl + ">");
    res.send();



  });
  });

});



app.listen(port, function(){
  console.log("you are on port 300");
});
