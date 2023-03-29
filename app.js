'use strict';
console.log('js file connected.');

// let clickableH1 = document.getElementById('click-h1');
// console.log('🚀 ~ file: app.js:42 ~ clickableH1:', clickableH1);

// clickableH1.addEventListener('click', function() {
//   console.log('H1 was clicked1');
// });

let clickableH2 = document.getElementById('click-h2');
clickableH2.addEventListener('click', function() {
  //console.log('H1 was clicked1');
  alert('Welcome to the site!');
});

let clickableH3 = document.getElementById('click-h3');
clickableH3.addEventListener('click', function() {
  document.getElementsByTagName('html')[0].style.backgroundColor = '#23F';
});

let clickableH4 = document.getElementById('click-h4');
// 'mouseover' https://developer.mozilla.org/en-US/docs/Web/Events
clickableH4.addEventListener('click', function() {
  let randomNumber = Math.floor(Math.random() * 256 * 256 * 256);
  console.log('🚀 ~ file: app.js:26 ~ clickableH4.addEventListener ~ randomNumber:', randomNumber);

  document.getElementsByTagName('html')[0].style.backgroundColor =
    '#' + randomNumber.toString(16);
});

// if (window.location.pathname.endsWith('sales.html')) {
//   buildTable();
//   buildTotal();
//   buildEmployeeTable();
// }

// if (window.location.pathname.endsWith('index.html')) {
//   for (let i = 0; i < cookieStand.length; i++) {
//     let newLine = document.createElement('li');
//     newLine.textContent = `${cookieStand[i].location}: ${hoursOfDay[0]}- ${hoursOfDay[12]}`;
//     mainLocationsHolder.appendChild(newLine);
//   }
// }

// This is calling the fieldset.

let changeText = document.getElementById('change-text-input');
changeText.addEventListener('input', function(event) {
  document.getElementsByClassName('change-text')[0].textContent = event.target.value;
});

// - create an input <input id='showPassword' type="password" />


// document.getElementById('showPassword').type = 'text';
