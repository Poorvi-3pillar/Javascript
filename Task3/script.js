// let info = document.querySelector(".card-body");
// let weatherInfo = [];
// let urlCity =
//   "http://api.openweathermap.org/geo/1.0/direct?q=jhansi&appid=6025a845412af7e1bbdc140449943184";
// let urlWeather =
//   "https://api.openweathermap.org/data/2.5/weather?lat=25.4502464&lon=78.5800085&appid=6025a845412af7e1bbdc140449943184";

// window.onload = async function cityDetails() {
//   try {
//     const res = await fetch(urlWeather);
//     console.log(res);
//     const weatherData = await res.json();


//     const {
//       name,
//       main: { temp, temp_max, temp_min, feels_like },
//     } = weatherData;

//     //storing the details we needed using destructuring
//     weatherInfo.push({ 
//         name, 
//         temp,
//         temp_max,
//         temp_min,
//         feels_like
//     });

//     console.log(weatherInfo);

//     const card = document.createElement("div");
//     weatherInfo.map((ele) => {
//       card.innerHTML = `<h5>City Name:${ele.name}</h5>
//                             <h5>Temperatur:${ele.temp} K</h5>
//                             <h5>Min Temperature:${ele.temp_min} K</h5>
//                             <h5>Max Temperatur:${ele.temp_min} K</h5>
//                             <h5>Feels Like:${ele.feels_like}</h5>`;
//       info.appendChild(card);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
