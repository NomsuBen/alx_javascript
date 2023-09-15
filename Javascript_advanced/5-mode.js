#!/usr/bin/node
/**
    Create a function named changeMode:

It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
Write a function named main:

Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
Add a paragraph to the body of the page with the text Welcome Holberton!
Add a button to the body with the text Spooky
Add a button to the body with the text Dark mode
Add a button to the body with the text Scream mode
When clicking on each button, the page CSS should change to the different themes you created previously
Call the main function
 */

function changeMode (size, weight, transform, background, color) {
    const myStyles = `
      font-size: ` + size + ';' +
          'font-weight: ' + weight + ';' +
          'text-transform: ' + transform + ';' +
          'background-color: ' + background + ';' +
          'color: ' + color + ';';
  
    const element = document.querySelector('body');
  
    element.style.cssText = myStyles;
  }
  
  function main () {
    const spooky = () => changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = () => changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = () => changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    const par = document.createElement('p');
    par.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(par);
    const btnsp = document.createElement('button');
    btnsp.addEventListener('click', spooky);
    btnsp.innerText = 'Spooky';
    const btnda = document.createElement('button');
    btnda.addEventListener('click', darkMode);
    btnda.innerText = 'Dark Mode';
    const btnsc = document.createElement('button');
    btnsc.addEventListener('click', screamMode);
    btnsc.innerText = 'Scream Mode';
    document.body.appendChild(btnsp);
    document.body.appendChild(btnda);
    document.body.appendChild(btnsc);
  }