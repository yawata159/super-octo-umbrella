function main() {
    var canv = document.getElementById("canvas");
    var ctx = canv.getContext("2d");

    var circle = document.getElementById("circle");
    var dvd = document.getElementById("dvd");
    var stop = document.getElementById("stop");

    function animateCircle(e) {
        console.log("circle");
    }

    function animateDVD(e) {
        console.log("dvd");
    }

    function stopIt(e) {
        console.log("stop");
    }

    circle.addEventListener("click", animateCircle);
    dvd.addEventListener("click", animateDVD);
    stop.addEventListener("click", stopIt);
}

window.onload = main;
