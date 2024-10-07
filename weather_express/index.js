const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const key = '6e366b3ae34dc6bdd56794422668a907';


app.get('/', function (req, res) {
    let city = 'Tartu';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let description = data.weather[0].description;
            let temp = Math.round(parseFloat(data.main.temp) - 273.15);
            let city = data.name;

            console.log(description);
            console.log(city);
            console.log(temp);

            res.render('index', {
                description: description,
                city: city,
                temp: temp
        })
  })
});

app.post('/', function(req, res) {
    let city = req.body.cityname;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        let description = data.weather[0].description;
        let temp = Math.round(parseFloat(data.main.temp) - 273.15);

        res.render('index', {
            description: description,
            city: city,
            temp: temp
        });
    });
});


app.listen(3000);