
const pancakeDeal = document.querySelector('.FridayDeal');

var dt = new Date();
var day = dt.getDay();


console.log(day);

if(day != 5){

  pancakeDeal.textContent = "";
}


