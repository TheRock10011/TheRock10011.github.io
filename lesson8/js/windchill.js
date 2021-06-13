var s = 1;
var t = 2;

console.log(t);
console.log("hi");
s = Math.pow(s, 0.16);
var i = 35.74 + 0.6215 * t -35.75 * s  + 0.4275 * t * s;
document.getElementById("chill").value = i;
function doThing(){
  document.getElementById("chill").innerText = "122";
}