
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
    var fillet = 60 * 5,
        display = document.querySelector("#current1");
        startTimer(fillet, display);
});

// Connects time to html on frier 2 fillet
document.getElementById("fillet2").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current2");
        startTimer(fillet, display);
});

// Connects time to html on frier 3 fillet
document.getElementById("fillet3").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current3");
        startTimer(fillet, display);
});

// Connects time to html on frier 4 fillet
document.getElementById("fillet4").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current4");
        startTimer(fillet, display);
});


// Nuggets


document.getElementById("nug1").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current1");
        startTimer(fillet, display);
});

document.getElementById("nug2").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current2");
        startTimer(fillet, display);
});

document.getElementById("nug3").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current3");
        startTimer(fillet, display);
});

document.getElementById("nug4").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current4");
        startTimer(fillet, display);
});


// Strips


document.getElementById("strip1").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current1");
        startTimer(fillet, display);
});

document.getElementById("strip2").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current2");
        startTimer(fillet, display);
});

document.getElementById("strip3").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current3");
        startTimer(fillet, display);
});

document.getElementById("strip4").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current4");
        startTimer(fillet, display);
});


// Breakfast Fillets


document.getElementById("brkfillet1").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current1");
        startTimer(fillet, display);
});

document.getElementById("brkfillet2").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current2");
        startTimer(fillet, display);
});

document.getElementById("brkfillet3").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current3");
        startTimer(fillet, display);
});

document.getElementById("brkfillet4").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current4");
        startTimer(fillet, display);
});


// :45 Seconds


document.getElementById("45s1").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current1");
        startTimer(fillet, display);
});

document.getElementById("45s2").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current2");
        startTimer(fillet, display);
});

document.getElementById("45s3").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current3");
        startTimer(fillet, display);
});

document.getElementById("45s4").addEventListener("click", function() {
    var fillet = 60 * 5,
        display = document.querySelector("#current4");
        startTimer(fillet, display);
});