var m_names = ["January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"]

var dt = new Date();
var dayofweek = dt.getDate();
var day = dt.getDay();
var currentmonth = dt.getMonth();
var year = dt.getFullYear();
var newDate = (d_names[day] +", "+ dayofweek + " " + m_names[currentmonth] + " "  + year)
document.getElementById('Date').innerHTML=newDate;


