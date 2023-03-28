'use strict';
console.log('js file connected.');





if(window.location.pathname.endsWith('sales.html')){
    buildTable();
    buildTotal();
    buildEmployeeTable();

} 

if(window.location.pathname.endsWith('index.html')){
    for(let i = 0; i < cookieStand.length; i++) {
        let newLine = document.createElement('li');
    newLine.textContent = `${cookieStand[i].location}: ${hoursOfDay[0]}- ${hoursOfDay[12]}`;
    mainLocationsHolder.appendChild(newLine);
    }
}
    



document.getElementById('resetbutton').addEventLister('clickReset', function(event) {
    event.preventDefault; 
    //otherwise it will do it on its own, and I want to prompt the user.
    //debugger;
    if(confirm('Are you sure you want to reset the form?')){
        event.srcElement.parentNode.reset();
    } else {
        //do nothing
    }
});
// This is calling the fieldset. 




 let clickableH1 = document.getElementById('click-h1');
 console.log("🚀 ~ file: app.js:42 ~ clickableH1:", clickableH1);

clickableH1.addEventListener('click', function(event){

    console.log('H1 was clicked1');
    
});




let clickableH1 = document.getElementById('click-h1');
clickableH1.addEventListener('click', function(event){
    //console.log('H1 was clicked1');
    alert('Welcome to the site!');
});



let clickableH1 = document.getElementById('click-h1');
 clickableH1.addEventListener('click', function(event){
    document.getElementByTagName('html')[0].style.backgroundColor = '#23F';
});




let clickableH1 = document.getElementById('click-h1');
 // we can also do things like 'mouseover' https://developer.mozilla.org/en-US/docs/Web/Events
 clickableH1.addEventListener('click', function(event)){
     let randomNumber = Math.floor(Math.random() * 256 * 256 * 256);

    document.getElementsByTagName('html')[0].style.backgroundColor = '#' + randomNumber.toString(16);
});


let changeText = document.getElementById('change-text');
              //forms have 'change'
changeText.addEventListener('input', function(event){
                      //  Tag
    document.getElementsByClassName('h1')[0].textContent = event.srcElement.value
});




- create an input <input id='showPassword' type="password" />
- in the console

```js
    document.getElementById('showPassword').type = "text";
```