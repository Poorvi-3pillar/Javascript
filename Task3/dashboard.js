let info = document.querySelector(".card-body");
let cityName;
let weatherInfo = [];
// let urlCity='http://api.openweathermap.org/geo/1.0/direct?q=jhansi&appid=6025a845412af7e1bbdc140449943184';
// let urlWeather='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=6025a845412af7e1bbdc140449943184';

async function currentWeatherApi() {
  try {
    cityName = document.querySelector(".input_text").value;
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}'&appid=6025a845412af7e1bbdc140449943184`
    );
    // console.log(res);
    const cityData = await res.json();
    //destructured
    //storing latitude and longitude from citydata
    const { lat, lon } = cityData[0];
    //storing lat and lon to this api
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6025a845412af7e1bbdc140449943184`;
    //fetching the api
    const response = await fetch(urlWeather);
    const weatherData = await response.json();

    //destructuring the info needed
    const {
      name,
      sys: { country },
      main: { temp, temp_min, temp_max, feels_like },
      weather: [{ description }],
    } = weatherData;


    weatherInfo = [];
    weatherInfo.push({
      name,
      country,
      temp,
      temp_min,
      temp_max,
      feels_like,
      description,
    });
    // other than push
    // weatherInfo[weatherInfo.length]=weatherData;

    //displaying info in card
    weatherInfo.map((ele) => {
      card.innerHTML = `<h4>City Name:${ele.name}</h>
                            <h5>Description:${ele.description}</h5>
                            <h5>Temperatur:${ele.temp} K</h5>
                            <h5>Min Temperature:${ele.temp_min} K</h5>
                            <h5>Max Temperatur:${ele.temp_min} K</h5>
                            <h5>Feels Like:${ele.feels_like}</h5>
                            <h5>Country:${ele.country}</h5>`;
      info.replaceChild(card, card);
    });
  } catch (err) {
    console.log(err);
  }
}
// let name=localStorage.getItem('name')?localStorage.getItem('name'):''
// console.log(name);
// if(name=='')
// {
//   alert('U need to login first');
//   window.location.href="index.html";
// }