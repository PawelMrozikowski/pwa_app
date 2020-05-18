"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

const time = document.querySelector('.date--js');

const counter = document.querySelector('.glass__counter--js');

const buttonAdd = document.querySelector('.glass__button-add--js');

const buttonRemove = document.querySelector('.glass__button-remove--js');

const date = new Date() .toISOString() .slice (0, 10);
console.log(date);

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('czas');
  time.innerHTML = `date: ${date}`;
})

  
if(!localStorage.getItem(date)){
  localStorage.setItem(date, 0);
  counter.innerHTML = '0';  
} else {
  counter.innerHTML = localStorage.getItem(date);
}

buttonAdd.addEventListener('click', (e) => {
  console.log('dziala');
  counter.innerHTML = parseInt(counter.innerHTML)+1;
  localStorage.setItem(date, parseInt(counter.innerHTML));
  
  
})

buttonRemove.addEventListener('click', (e) => {
  if(counter.innerHTML>0){
  localStorage.setItem(date, parseInt(localStorage.getItem(date))-1);
  counter.innerHTML = localStorage.getItem(date);
}});






















/*if (!localStorage.getItem(date)){
  //localStorage.setItem(date, 0);
  counter.innerHTML = '0';
} else {
  counter.innerHTML = localStorage.getItem(date);
}
buttonAdd.addEventListener('click', (e)=> {
  console.log(`dziala`);
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
  
  
});

buttonRemove.addEventListener('click', (e)=> {
  if(counter.innerHTML>0){
  counter.innerHTML = parseInt(counter.innerHTML) -1;
}}); */