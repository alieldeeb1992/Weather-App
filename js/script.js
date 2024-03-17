//Catch my Elements
const myInput = document.querySelector(".input");
console.log(myInput.innerHTML);
const myImg = document.images[0];
const myDegree = document.querySelector(".temp");
const myDescription = document.querySelector(".des");
const myHumidPercentage = document.querySelector(".humid .percentage");
const myWindSpeed = document.querySelector(".wind-speed");
const myDatails = document.querySelector(".details");
console.log(myDatails);
const myApiKey = `9226143331cb89b596395d7b25ba56d8`;
const searchBtn = document.getElementById("btn");
const errorSec = document.querySelector(".error-img");
searchBtn.addEventListener("click", function search() {
  let myApiData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${myInput.value}&units=metric&appid=${myApiKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod == `404`) {
        myImg.style.display = "none";
        myDatails.style.display = "none";
        myDegree.style.display = "none";
        myDescription.style.display = "none";
        errorSec.style.display = "block";
      }
      let tempratureData = json.weather[0].main;
      if (tempratureData === "Clear") {
        myImg.src = `images/clear.png`;
      } else if (tempratureData === "Rain") {
        myImg.src = `images/rain.png`;
      } else if (tempratureData === "Snow") {
        myImg.src = `images/snow.png`;
      } else if (tempratureData === "Clouds") {
        myImg.src = `images/cloud.png`;
      } else if (tempratureData === "Mist") {
        myImg.src = `images/mist.png`;
      } else if (tempratureData === "Haze") {
        myImg.src = `images/mist.png`;
      }
      myDegree.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      myDescription.innerHTML = tempratureData;
      myHumidPercentage.innerHTML = `${json.main.humidity}%`;
      myWindSpeed.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      myImg.style.display = "block";
      myDatails.style.display = "flex";
      myDegree.style.display = "flex";
      myDescription.style.display = "flex";
      errorSec.style.display = "none";
    });
});
//Enter to search function
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
