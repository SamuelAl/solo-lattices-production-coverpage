//Activate modal subscribe form (uses jQuery);
$(document).ready(function(){
    $('.modal').modal();
  });

 //Set Clock countdown
var deadline = new Date("Nov 21, 2019 12:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
document.getElementById("day").innerHTML = "<h5>" + days + " DAYS </h5>";
document.getElementById("hour").innerHTML = "<h5>" + hours + " HOURS </h5>";
document.getElementById("minutes").innerHTML = "<h5>" + minutes + " MINS</h5>";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
