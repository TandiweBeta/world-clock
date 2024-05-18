function updateTime() {
  let capetownElement = document.querySelector("#capetown");
  if (capetownElement) {
    let capetownDateElement = capetownElement.querySelector("#date");
    let capetownTimeElement = capetownElement.querySelector("#time");
    let capetownTime = moment().tz("Africa/Capetown");
    

    capetownDateElement.innerHTML = capetownTime.format("MMMM Do YYYY");
    capetownTimeElement.innerHTML = capetownTime.format(
      "H:mm:ss [<small>] A [</small>]"
    );
  }
  
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector("#date");
    let tokyoTimeElement = tokyoElement.querySelector("#time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "H:mm:ss [<small>] A [</small>]"
    );
  }
   let parisElement = document.querySelector("#paris");
   if (parisElement) {
     let parisDateElement = parisElement.querySelector("#date");
     let parisTimeElement = parisElement.querySelector("#time");
     let parisTime = moment().tz("Europe/Paris");

     parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
     parisTimeElement.innerHTML = parisTime.format(
       "H:mm:ss [<small>] A [</small>]"
     );
   }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html"style="color:#B63A95"> All cities</a> 
  `;
}



    updateTime();
    setInterval(updateTime, 1000);
  


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
