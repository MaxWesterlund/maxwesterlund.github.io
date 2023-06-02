var canvas = document.getElementById("start_background_canvas");

canvas.width = window.innerWidth;
canvas.height = document.body.scrollHeight;

var minSpeed = .1;
var maxSpeed = .3;

var circleAmount = 7;

const circles = [];

initCircles();
loop();

function initCircles() {
    var minRadius = 50 * (window.innerWidth / 1920);
    var maxRadius = 300 * (window.innerWidth / 1920);
    for (let i = 0; i < circleAmount; i++) {
        var f = window.innerWidth / 1920;
        circles[i] = {
            "xPos": getRandomInt(maxRadius * f, canvas.width - maxRadius),
            "yPos": getRandomInt(maxRadius, canvas.height - maxRadius),
            "radius": getRandomInt(minRadius, maxRadius),
            "xDir": Math.random() * (Math.random() > .5 ? 1 : -1),
            "yDir": Math.random() * (Math.random() > .5 ? 1 : -1),
            "speed": Math.random() * maxSpeed + minSpeed
        };
    }
}

function loop() {
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < circleAmount; i++) {
        var c = circles[i];
        draw(c);
        move(c);
    }
    window.requestAnimationFrame(loop);
}

function draw(circle) {
    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(circle.xPos, circle.yPos, circle.radius, 0, 2 * Math.PI, false);
    
    var root = document.querySelector(":root");
    ctx.fillStyle = root.style.getPropertyValue("--accent-color-1-transparent");
    ctx.fill();
}

function move(c) {
    var mag = Math.sqrt(c.xDir * c.xDir + c.yDir * c.yDir);

    c.xPos += (c.xDir / mag) * c.speed;
    c.yPos += (c.yDir / mag) * c.speed;

    if (c.xPos >= canvas.width - c.radius || c.xPos <= c.radius) {
        c.xDir *= -1;
    }
    if (c.yPos >= canvas.height - c.radius || c.yPos <= c.radius) {
        c.yDir *= -1;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getPageHeight() {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.height, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

window.addEventListener("resize", resize);

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    initCircles();
}