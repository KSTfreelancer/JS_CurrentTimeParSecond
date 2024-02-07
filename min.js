// var input = document.querySelector("input");
// input.addEventListener('change', changhendelar);

//   function changhendelar(e){
//       console.log(e.target)
//       console.log(e.target.value)
//       console.log(e.target)
//       console.log(e.target)

//   };

// ==========================================
// var from = document.querySelector("form");
// var nam = document.querySelector('#name');
// var email = document.querySelector('#email');
// var password = document.querySelector('#password');
// // console.log(password)
// from.addEventListener('submit',fromHandler);

// function fromHandler(e){
//   e.preventDefault();

//   var object = {
//     nam : nam.value,
//     email : email.value,
//     password : password.value,
//   }
//   console.log(object)
// }


// window.addEventListener('load',function(){
//   console.log("load data")
// });
// window.addEventListener('unload',function(){
//   console.log("unload webpag")
// });
// window.addEventListener('scroll',function(){
//   console.log("scroll")
// });
// window.addEventListener('resize',function(){
//   var width = this.window.outerWidth;

//   console.log(width)
// });

// var box = document.querySelector(".box");
// console.log(box)

// box.addEventListener('click',function(){
//   console.log("clicked")
// })
// box.addEventListener('dblclick',function(){
//   console.log("DBL clicked")
// })
// box.addEventListener('mouseover',function(){
//   console.log("mouseover")
// })
// window.addEventListener('mousemove',function(e){
//   console.log(e.clientY)
// })
// box.addEventListener('mouseup',function(e){
//   console.log("mous is UP")
// })



// var pera = document.querySelector(".box p");
// addEventListener('keypress',function(e){
// pera.innerText += e.key;
// })



// const log = document.getElementById('log');

// document.addEventListener('keypress', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.key}`;
// }


var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener('click',tim);

var count = 1;
function tim(){
  var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var second = date.getSeconds();
var clock = hours +" : "+ minutes +" : "+ second;
p.innerHTML = clock;

setInterval(tim,1000);

};