// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header (){
//define elements 
const container = document.createElement("div"),
    date = document.createElement("span"),
    title = document.createElement("h1"),
    weather = document.createElement("span");
//append elements
container.appendChild(date);
container.appendChild(title);
container.appendChild(weather);
//set up those classes 
container.classList.add("header");
date.classList.add("date");
weather.classList.add("temp");
//add that sweet sweet text content
date.textContent = "March 28, 2019";
title.textContent = "Lambda Times";
weather.textContent = "98";

return container;



}





const entry = 
document.querySelector('.header-container');

entry.appendChild(Header());

