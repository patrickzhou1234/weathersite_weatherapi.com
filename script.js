body = document.body;
weatherimg = document.getElementById("weatherimg");
temperature = document.getElementById("temp");
shortcast = document.getElementById("shortcast");
favicon = document.getElementById("favicon");
windspeed = document.getElementById("windspeed");
loc = document.getElementById("location");
timest = document.getElementById("time");
uvind = document.getElementById("uvind");
feels_like = document.getElementById("feels_like");
precip = document.getElementById("precipitation");
pressure = document.getElementById("pressure");
humidity = document.getElementById("humidity");

window.onload = function() {
    $("#weatherimg").animate({
        left: window.innerWidth/2-weatherimg.offsetWidth/2+'px'
    }, 2000);
    $("#temp").animate({
        opacity: 1
    }, 3000);
    $("#shortcast").animate({
        opacity: 1
    }, 3000);
    $("#credits").animate({
        right: 0+"vw", opacity: 1
    }, 4000);
}

$.getJSON('http://api.weatherapi.com/v1/current.json?key=7594468ff47c4645a6c234601220310&q=94539&aqi=no', function(data) {
    shortcast.innerHTML = data["current"]["condition"]["text"];
    loc.innerHTML = data["location"]["name"]+", "+data["location"]["region"];
    if (data["current"]["condition"]["text"] == "Sunny" || data["current"]["condition"]["text"] == "Mostly Sunny" || data["current"]["condition"]["text"] == "Partly Sunny") {
        body.style.backgroundColor = "#508CC2";
        weatherimg.src = "sunny.png";
        favicon.href = "sunny.png";
    } else if (data["current"]["condition"]["text"]=="Cloudy" || data["current"]["condition"]["text"]=="Partly Cloudy") {
        body.style.backgroundColor = "gray";
        weatherimg.src = "cloudy.png";
        favicon.href = "cloudy.png";
    } else if (data["current"]["condition"]["text"]=="Mostly Clear" || data["current"]["condition"]["text"]=="Clear") {
        body.style.backgroundColor = "#1e2c4b";
        weatherimg.src = "moon.png";
        favicon.href = "moon.png";
    }
    temperature.innerHTML = data["current"]["temp_f"]+"° F";
    windspeed.innerHTML = data["current"]["wind_mph"]+" mph "+data["current"]["wind_dir"];
    uvind.innerHTML = data["current"]["uv"];
    humidity.innerHTML = data["current"]["humidity"];
    feels_like.innerHTML = data["current"]["feelslike_f"]+"° F";
    precip.innerHTML = data["current"]["precip_in"]+" in.";
    pressure.innerHTML = data["current"]["pressure_in"]+" in.";
});

setInterval(() => {
    d = new Date();
    timest.innerHTML = d.toLocaleTimeString();
}, 1000);
