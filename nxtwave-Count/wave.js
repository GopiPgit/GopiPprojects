// let countgopi  = document.getElementById("count");
// console.log(countgopi),"g";
function increment() {
    let previouscount = document.getElementById("count").textContent;
   let updatecount = parseInt((previouscount))+1;
   document.getElementById("count").textContent =updatecount;
   
}
function decrement() {
    let previouscount = document.getElementById("count").textContent;
   let updatecount = parseInt((previouscount))-1;
   document.getElementById("count").textContent =updatecount;
   
}
function reset() {
   // let previouscount = document.getElementById("count").textContent;
 let updatecount = 0;
   document.getElementById("count").textContent =updatecount;
   
}
