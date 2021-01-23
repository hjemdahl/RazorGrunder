"use strict";

var endOfCourseDate = new Date("Mars 20, 2021 23:59:59").getTime();

// Nedräkning
var x = setInterval(function () {

    var now = new Date().getTime();

    // Tidsskillnaden mellan slut- och nutid
    var difference = endOfCourseDate - now;

    // Kalkylering av tid
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Skriv ut resultat resultat
    document.getElementById("timer").innerHTML = days + " dagar, " + hours + " timmar, "
        + minutes + " minuter och " + seconds + " sekunder ";
}, 1000);