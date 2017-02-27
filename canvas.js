function main() {
    var canv = document.getElementById("canvas");
    var ctx = canv.getContext("2d");
    ctx.fillStyle = "#345b29";

    var rid = 0;
    var radius = 1;
    var grow = 1;

    var x = 100;
    var y = 210;

    var xdir = 0;
    var ydir = 0;

    var circle = document.getElementById("circle");
    var dvd = document.getElementById("dvd");
    var clear = document.getElementById("clear");
    var stop = document.getElementById("stop");

    function animateCircle(e) {
        console.log("circle");

        window.cancelAnimationFrame(rid);
        function circleMaker() {
            ctx.clearRect(0,0,500,500);
            ctx.beginPath();
            ctx.arc(250, 250, radius, 0, 2 * Math.PI);
            
            radius+=grow;
            ctx.stroke();
            ctx.fill();
            if(radius>250 || radius < 1){
                grow *= -1;
            }
            rid = window.requestAnimationFrame(circleMaker);
        };

        rid = window.requestAnimationFrame(circleMaker);

    }

    function animateDVD(e) {
        console.log("dvd");

        var len = 100;
        var hei= 100;
        
        window.cancelAnimationFrame(rid);
        
        function dvdRect(){
            ctx.clearRect(0,0,500,500);
            ctx.beginPath();
            ctx.fillRect(x,y,len,hei);
            ctx.stroke();
            ctx.fill();

            if(xdir == 0 && ydir == 0){
                x++;
                y++;
            }
            if(xdir == 0 && ydir == 1){
                x++;
                y--;
            }
            if(xdir == 1 && ydir == 1){
                x--;
                y--;
            }
            if(xdir == 1 && ydir == 0){
                x--;
                y++;
            }
            
            if(x > (500-len) || x < 0){
                xdir +=1;
                xdir %= 2;
            }
            if(y > (500-hei) || y < 0){
                ydir += 1;
                ydir %= 2;
            }
            
            rid = window.requestAnimationFrame(dvdRect);
            };

        rid = window.requestAnimationFrame(dvdRect);
    

    }

    function clearCanv(e) {
        console.log("clear");
        window.cancelAnimationFrame(rid);
        rid = 0;
        radius = 1
        grow = 1;
    
        x = 250;
        y = 250;
    
        ctx.clearRect(0,0,500,500);
    }

    function stopIt(e) {
        console.log("stop");

        window.cancelAnimationFrame(rid);
    }

    circle.addEventListener("click", animateCircle);
    dvd.addEventListener("click", animateDVD);
    clear.addEventListener("click", clearCanv);
    stop.addEventListener("click", stopIt);
}

window.onload = main;
