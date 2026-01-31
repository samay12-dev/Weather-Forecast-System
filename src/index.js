//Loading table data(7 days forecast) is taking a slight time

const api= "2f8a883ba0cb844b9bf7e7ee3674a08a";
 const api_url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const api3="https://api.open-meteo.com/v1/forecast?"
var lat;
var lon;
const btn=document.querySelector("button")
//When the search button is clicked  all the changes happened
//Note whe you log in you will see a normal predefined interface the magic happens
//  when you enter the city Major fields Changes

btn.addEventListener("click",()=>{
let input=document.querySelector("#text_1").value
console.log(input);
document.querySelector("#city").innerHTML=input
Call(input)
})
//This functions call the all necessary api's take necessary input from them
//and dynamically changes the data on the webpage.
async function Call(input) {
    
    const response= await fetch(api_url+input+`&appid=${api}`)
    const response1= await response.json();
    console.log(response1)
    let humidity=document.querySelector("#humidity")
    let temperature=document.querySelector("#temp")

    console.log(temperature)
if (humidity) {
  humidity.innerHTML = response1.main.humidity + "%";
} else {
  console.warn("Element with id 'humidity' not found.");
}

temperature.innerHTML=response1.main.temp
lat=response1.coord.lat;
lon=response1.coord.lon;
const response2= await fetch(api3+`latitude=${lat}`+`&longitude=${lon}`+"&hourly=temperature_2m&"+"past_days=5");
 const response3 =await response2.json();
 console.log(response3)
 console.log(response3 +"This is response3")
//To get  the date of the week dynamically
const today=new Date();
 const endDate = today.toISOString().split("T")[0];
      const startDate = new Date(today.setDate(today.getDate() - 6)).toISOString().split("T")[0];

      const weather_Update= await fetch(        `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
)
const response4 =  await weather_Update.json();
console.log(response4);
//Doing the changes in the weather forecast table dynamically.
document.querySelector("#d1").innerHTML=response4.daily.time[0];
document.querySelector("#d2").innerHTML=response4.daily.time[1];
document.querySelector("#d3").innerHTML=response4.daily.time[2];
document.querySelector("#d4").innerHTML=response4.daily.time[3];
document.querySelector("#d5").innerHTML=response4.daily.time[4];
 document.querySelector("#d6").innerHTML=response4.daily.time[5];
document.querySelector("#d7").innerHTML=response4.daily.time[6];

document.querySelector("#te1").innerHTML=response4.daily.temperature_2m_max[0];
document.querySelector("#te2").innerHTML=response4.daily.temperature_2m_max[1];
document.querySelector("#te3").innerHTML=response4.daily.temperature_2m_max[2];
document.querySelector("#te4").innerHTML=response4.daily.temperature_2m_max[3];
document.querySelector("#te5").innerHTML=response4.daily.temperature_2m_max[4];
 document.querySelector("#te6").innerHTML=response4.daily.temperature_2m_max[5];
document.querySelector("#te7").innerHTML=response4.daily.temperature_2m_max[6];




document.querySelector(".text21").innerHTML=response3.hourly.temperature_2m[12]
document.querySelector(".text17").innerHTML=response3.hourly.temperature_2m[15]
document.querySelector(".text16").innerHTML=response3.hourly.temperature_2m[18]
document.querySelector(".text18").innerHTML=response3.hourly.temperature_2m[21]



console.log(a);


}
