// Array from 
// Without Array From, we can't use things like filter, map, etc...
// const elements = Array.from( document.getElementsByClassName('navlink') );
// const filteredElements = elements.filter(e => e.id === 'linkHome')
// console.log(filteredElements)

// // avoid query the document every time
// const nav = document.querySelector('nav')
// // Them a can select thing inside the nav, this way the query is more performant  
// console.log(nav.querySelector('span'))

// // pass options to addEventListener
// const options = {
//   once: true,
//   passive: true 
// }

// document.addEventListener('click', ()=> {
//   console.log('Click on body')
// }, options)


// const $ = function(args){ return document.querySelector(args);}
// const $$ = function(args){ return document.querySelectorAll(args);}

// HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
// HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
// HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
// HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }

// wait to the DOM as fully loaded
// its usually happens before render the page 
// window.addEventListener('DOMContentLoaded', () => {
// })