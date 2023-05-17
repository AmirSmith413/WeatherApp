let forecast = 'https://api.openweathermap.org/data/2.5/forecast?q='
let apikey = "&appid=8dabd529605b4545977c162075b81c29";
let city = "Stockton";
let units = "&units=imperial";
let degSymbol = "&deg;F";


let day = document.getElementById('days')
let icon = document.getElementById("icon");
let place = document.getElementById("place");
let temp = document.getElementById("temp");
let temp2 = document.getElementById("temp2");
let temp3 = document.getElementById("temp3");
let temp4 = document.getElementById("temp4");
let temp5 = document.getElementById("temp5");
let temp6 = document.getElementById("temp6");
let temp_min = document.getElementById("temp_min");
let temp_max = document.getElementById("temp_max");
let temp_min2 = document.getElementById("temp_min2");
let temp_max2 = document.getElementById("temp_max2");
let temp_min3 = document.getElementById("temp_min3");
let temp_max3 = document.getElementById("temp_max3");
let temp_min4 = document.getElementById("temp_min4");
let temp_max4 = document.getElementById("temp_max4");
let temp_min5 = document.getElementById("temp_min5");
let temp_max5 = document.getElementById("temp_max5");
let temp_min6 = document.getElementById("temp_min6");
let temp_max6 = document.getElementById("temp_max6");
let feels_like = document.getElementById("feels_like");
let speed = document.getElementById("speed");
let deg = document.getElementById("deg");
let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let favBtn = document.getElementById("favBtn");
let delBtn = document.getElementById("delBtn");
let injectFav = document.getElementById("inject");
let favArr = [];
let weatherArr = [];
let searchedCity = "";

// function getWeek(){
//    let currentDay = new Date()
//    let nextDays = []
//    for(let i = 0;i < 4;i++)
//    {
//     currentDay.setDate(currentDay.getDate() + 1)
//     let day = currentDay.getDate()
//     nextDays.push(day)
//    } 
//    days.innerText = day
// }

function fetchWeather(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      getWeather(data);
    });
    
}
searchBtn.addEventListener('click',function(e){
  fetchWeather(`${forecast}${search.value}${apikey}${units}`);
})

function getWeather(weatherData) {
  console.log(weatherData)
  weatherArr = [];
  weatherArr.push(weatherData);
  // let main = weatherData.main;
  place.innerText = weatherData.city.name;
  temp.innerHTML = `${parseInt(weatherData.list[0].main.temp)}${degSymbol}`;
  temp2.innerHTML = `${parseInt(weatherData.list[1].main.temp)}${degSymbol}`;
  temp3.innerHTML = `${parseInt(weatherData.list[2].main.temp)}${degSymbol}`;
  temp4.innerHTML = `${parseInt(weatherData.list[3].main.temp)}${degSymbol}`;
  temp5.innerHTML = `${parseInt(weatherData.list[4].main.temp)}${degSymbol}`;
  temp6.innerHTML = `${parseInt(weatherData.list[5].main.temp)}${degSymbol}`;
  feels_like.innerText = parseInt(weatherData.list[0].main.feels_like)
  temp_min.innerText = parseInt(weatherData.list[0].main.temp_min);
  temp_max.innerText = parseInt(weatherData.list[0].main.temp_max);
  speed.innerText = parseInt(weatherData.list[0].wind.speed);
  deg.innerText = parseInt(weatherData.list[0].wind.deg);
  search.value;
}


