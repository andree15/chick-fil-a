const fillet = 60 * 5
const nugget = 60 * 3
const strip = 60 * 3.34
const brkfillet = 60 * 3.5
const s = 60 * .75

// Timer code
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
// Connects time to html on frier 1 fillet
document.getElementById("fillet1").addEventListener("click", function() {
        display = document.querySelector("#current1");
        startTimer(fillet, display);
});

// Connects time to html on frier 2 fillet
document.getElementById("fillet2").addEventListener("click", function() {
        display = document.querySelector("#current2");
        startTimer(fillet, display);
});

// Connects time to html on frier 3 fillet
document.getElementById("fillet3").addEventListener("click", function() {
        display = document.querySelector("#current3");
        startTimer(fillet, display);
});

// Connects time to html on frier 4 fillet
document.getElementById("fillet4").addEventListener("click", function() {
        display = document.querySelector("#current4");
        startTimer(fillet, display);
});


// Nuggets


document.getElementById("nug1").addEventListener("click", function() {
        display = document.querySelector("#current1");
        startTimer(nugget, display);
});

document.getElementById("nug2").addEventListener("click", function() {
    
        display = document.querySelector("#current2");
        startTimer(nugget, display);
});

document.getElementById("nug3").addEventListener("click", function() {
    
        display = document.querySelector("#current3");
        startTimer(nugget, display);
});

document.getElementById("nug4").addEventListener("click", function() {
    
        display = document.querySelector("#current4");
        startTimer(nugget, display);
});


// Strips


document.getElementById("strip1").addEventListener("click", function() {
    
        display = document.querySelector("#current1");
        startTimer(strip, display);
});

document.getElementById("strip2").addEventListener("click", function() {
    
        display = document.querySelector("#current2");
        startTimer(strip, display);
});

document.getElementById("strip3").addEventListener("click", function() {
    
        display = document.querySelector("#current3");
        startTimer(strip, display);
});

document.getElementById("strip4").addEventListener("click", function() {
    
        display = document.querySelector("#current4");
        startTimer(strip, display);
});


// Breakfast Fillets


document.getElementById("brkfillet1").addEventListener("click", function() {
    
        display = document.querySelector("#current1");
        startTimer(brkfillet, display);
});

document.getElementById("brkfillet2").addEventListener("click", function() {
    
        display = document.querySelector("#current2");
        startTimer(brkfillet, display);
});

document.getElementById("brkfillet3").addEventListener("click", function() {
    
        display = document.querySelector("#current3");
        startTimer(brkfillet, display);
});

document.getElementById("brkfillet4").addEventListener("click", function() {
    
        display = document.querySelector("#current4");
        startTimer(brkfillet, display);
});


// :45 Seconds


document.getElementById("45s1").addEventListener("click", function() {
    
        display = document.querySelector("#current1");
        startTimer(s, display);
});

document.getElementById("45s2").addEventListener("click", function() {
    
        display = document.querySelector("#current2");
        startTimer(s, display);
});

document.getElementById("45s3").addEventListener("click", function() {
    
        display = document.querySelector("#current3");
        startTimer(s, display);
});

document.getElementById("45s4").addEventListener("click", function() {
    
        display = document.querySelector("#current4");
        startTimer(s, display);
});