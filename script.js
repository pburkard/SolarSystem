var asteroid = document.getElementById("asteroid");
var btn_shoot = document.getElementById("btn_shoot");
var output = document.getElementById("output");

var earth = document.getElementById("earth");
var mars = document.getElementById("mars");

function shootAsteroid(){
    if(asteroid.classList != "animate-asteroid"){
        asteroid.classList.add("animate-asteroid")
        setTimeout(function(){
            asteroid.classList.remove("animate-asteroid")
        }, 3000)
    }
}

var asteroidCollision = setInterval(function(){
    asteroidCenter = parseInt(window.getComputedStyle(asteroid).getPropertyValue("left"));
    earthCenter = parseInt(window.getComputedStyle(earth).getPropertyValue("left"));
    marsLeft = parseInt(window.getComputedStyle(mars).getPropertyValue("left"));

    output.innerText = "asteroid: " + asteroidCenter + " earth: " + earthCenter + " mars: " + marsLeft;
    // if(asteroidCenter == earthCenter){
    //     asteroid.classList.remove("animate-asteroid");
    //     earth.style.animation = "none";
    //     output.innerText = "hit!";
    // } else {
    //     output.innerText = "asteroid: " + asteroidCenter + " earth: " + earthCenter;
    // }
}, 100);