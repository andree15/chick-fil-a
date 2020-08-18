
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
