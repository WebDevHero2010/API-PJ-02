const baseURL = `https://api.airvisual.com/v2/nearest_city`;
const baseURL2 = `https://api.airvisual.com/v2/city?`;
const apiKey = `c6bada67-6583-4220-84aa-701342c2bcc2`;

let fetchBtn = document.getElementById("fetch-btn");
fetchBtn.addEventListener("click", getApiData2)

let cardGroup = document.getElementById("card-group");
let cardGroup2 = document.getElementById("card-group2");

function getApiData() {
  fetch(`${baseURL}?key=${apiKey}`)
    .then((response) => response.json())
    .then((result) => displayLocal(result))
    .catch((error) => console.log(error));
}

function getApiData2() {
  let cityField = document.getElementById("cityField").value;
  let stateField = document.getElementById("stateField").value;

  fetch(`${baseURL2}city=${cityField}&state=${stateField}&country=USA&key=${apiKey}`)
  .then((response) => response.json())
  .then((result) => displayLookup(result))
  .catch((error) => console.log(error));
}

// automatically fetch user's weather and air data on page load or refresh
getApiData();

function displayLocal(localApiData) {
    console.log(localApiData);

    //convert celsius data to fahrenheit
    let fahrenheit = ((localApiData.data.current.weather.tp * 9/5) + 32);

    let cardOne = document.createElement("div");
    cardOne.setAttribute("class","card");
    cardOne.setAttribute("style","width: 470.5px;")
    let cardOnePNG = document.createElement("img");
    cardOnePNG.setAttribute("class","card-img-top");
    cardOnePNG.setAttribute("src","");
    cardOnePNG.setAttribute("class","img-fluid");
    cardOnePNG.setAttribute("id","card1-img");
    cardOnePNG.src = (`https://airvisual.com/images/${localApiData.data.current.weather.ic}.png`);
    let cardOneBod = document.createElement("div");
    cardOneBod.setAttribute("class","card-body")
    let cardOneH5 = document.createElement("h5");
    cardOneH5.setAttribute("class","card-title");
    cardOneH5.innerText = ("Your Current Local Weather statistics");
    let cardOneP1 = document.createElement("p");
    cardOneP1.setAttribute("class","card-text");
    cardOneP1.innerText = (`City: ${localApiData.data.city}`);
    let cardOneP2 = document.createElement("p");
    cardOneP2.setAttribute("class","card-text");
    cardOneP2.innerText = (`State: ${localApiData.data.state}`);
    let cardOneP3 = document.createElement("p");
    cardOneP3.setAttribute("class","card-text");
    cardOneP3.innerText = (`Country: ${localApiData.data.country}`);
    let cardOneP4 = document.createElement("p");
    cardOneP4.setAttribute("class","card-text");
    cardOneP4.innerText = (`timestamp: ${localApiData.data.current.weather.ts}`);
    let humidity = document.getElementById("hu");
    humidity.innerText = (`${localApiData.data.current.weather.hu}%`);
    let temp = document.getElementById("temp");
    temp.innerText = (`${fahrenheit}°`);
    let windSpeed = document.getElementById("wind-speed");
    windSpeed.innerText = (`${localApiData.data.current.weather.ws}(m/s)`);
    let atomicPress = document.getElementById("ap");
    atomicPress.innerText = (`${localApiData.data.current.weather.pr}(hPa)`);

    cardGroup.appendChild(cardOne);
    cardOne.appendChild(cardOnePNG);
    cardOne.appendChild(cardOneBod);
    cardOneBod.appendChild(cardOneH5);
    cardOneBod.appendChild(cardOneP1);
    cardOneBod.appendChild(cardOneP2);
    cardOneBod.appendChild(cardOneP3);
    cardOneBod.appendChild(cardOneP4);

}

function displayLookup(lookUpData) {
  //console.log(lookUpData.status);

  if(lookUpData.status == "fail"){
    alert(lookUpData.data.message);
  }else if(lookUpData.status == "success") {
    console.log(lookUpData);
  };

  //conversion for lookup
  let fahrenheitLookup = ((lookUpData.data.current.weather.tp * 9/5) + 32);

    let cardTwo = document.createElement("div");
    cardTwo.setAttribute("class","card");
    cardTwo.setAttribute("style","width: 470.5px;")
    let cardTwoPNG = document.createElement("img");
    cardTwoPNG.setAttribute("class","card-img-top");
    cardTwoPNG.setAttribute("src","");
    cardTwoPNG.setAttribute("class","img-fluid");
    cardTwoPNG.setAttribute("id","card2-img");
    cardTwoPNG.src = (`https://airvisual.com/images/${lookUpData.data.current.weather.ic}.png`);
    let cardTwoBod = document.createElement("div");
    cardTwoBod.setAttribute("class","card-body")
    let cardTwoH5 = document.createElement("h5");
    cardTwoH5.setAttribute("class","card-title");
    cardTwoH5.innerText = ("Search Location Weather statistics");
    let cardTwoP1 = document.createElement("p");
    cardTwoP1.setAttribute("class","card-text");
    cardTwoP1.innerText = (`City: ${lookUpData.data.city}`);
    let cardTwoP2 = document.createElement("p");
    cardTwoP2.setAttribute("class","card-text");
    cardTwoP2.innerText = (`State: ${lookUpData.data.state}`);
    let cardTwoP3 = document.createElement("p");
    cardTwoP3.setAttribute("class","card-text");
    cardTwoP3.innerText = (`Country: ${lookUpData.data.country}`);
    let cardTwoP5 = document.createElement("p");
    cardTwoP5.innerText = (`Temp: ${fahrenheitLookup}°`);
    let cardTwoP6 = document.createElement("p");
    cardTwoP6.innerText = (`Humidity: ${lookUpData.data.current.weather.hu}%`);
    let cardTwoP7 = document.createElement("p");
    cardTwoP7.innerText = (`AP: ${lookUpData.data.current.weather.pr}(hPa)`);
    let cardTwoP8 = document.createElement("p");
    cardTwoP8.innerText = (`WindSpeed: ${lookUpData.data.current.weather.ws}(m/s)`);

    cardGroup2.appendChild(cardTwo);
    cardTwo.appendChild(cardTwoPNG);
    cardTwo.appendChild(cardTwoBod);
    cardTwoBod.appendChild(cardTwoH5);
    cardTwoBod.appendChild(cardTwoP1);
    cardTwoBod.appendChild(cardTwoP2);
    cardTwoBod.appendChild(cardTwoP3);
    cardTwoBod.appendChild(cardTwoP5);
    cardTwoBod.appendChild(cardTwoP6);
    cardTwoBod.appendChild(cardTwoP7);
    cardTwoBod.appendChild(cardTwoP8)

}