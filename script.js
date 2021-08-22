function date(){


let days= ["Monday", "Teusday", "Wednesday", "Thursday","Friday","Saturday","Sunday"];
let now= new Date();
let day= days[now.getDay()];
let houre= now.getHours();
let minute= now.getMinutes();
let daytime= document.querySelector("#date");
  daytime.innerHTML= day+" "+ houre + ":"+minute}

date();
function showTempCel(event){
  
 let liveTemp= Math.round(event.data.main.temp);
 figure.innerHTML=liveTemp;
}


function showCity(event) {
event.preventDefault();
let newCity = document.querySelector("#heading");
let city = document.querySelector("#query");

newCity.innerHTML = `${city.value}`;
let apiKey="d4fa1f6739fe89bacf064c12bc53c17d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTempCel);
}

let form = document.querySelector("#formInput");
form.addEventListener("submit",showCity);


function myLocation(position){
  let lat =position.coords.latitude;
  let lon=position.coords.longitude;
let apiKey="d4fa1f6739fe89bacf064c12bc53c17d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(tempdata)
}
function tempdata(event){
  let temp = Math.round(event.data.main.temp);
  figure.innerHTML=temp;
  let myCity = document.querySelector("#heading");
  myCity.innerHTML = event.data.name;
}
function sayTemp(eve){
eve.preventDefault();
navigator.geolocation.getCurrentPosition(myLocation);

 
}




let myCity =document.querySelector("#current");
myCity.addEventListener("click",sayTemp);



