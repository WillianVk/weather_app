
const apiKey = "0c1451ee217318179b0c07179cda6eb0";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=piracicaba";

async function checkWeathe(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}


checkWeathe();