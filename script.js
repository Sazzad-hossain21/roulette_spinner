// Calling other Elements
var startbtn = document.getElementById('startbtn');
var resultdiv = document.getElementById('result');
var musicstart = document.getElementById('start');
var musicend = document.getElementById('end');

// Canvas Calling and Setting
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

// Values According to the screen
if (innerWidth < 400) {
    WoodenRail_x_position = canvas.width / 2 - 212;
    WoodenRail_y_position = canvas.height / 2 - 200;
    WoodenRail_width = 423;
    WoodenRail_height = 423;
    RotateSpinner_x_position = canvas.width / 2 - 90;
    RotateSpinner_y_position = canvas.height / 2 - 90;
    RotateSpinner_width = 180;
    RotateSpinner_height = 180;
    ballRadius = 6;
    ballradiustocenter_default = 100;
    ballradiustocenter_spin = 56;
} else {
    WoodenRail_x_position = canvas.width / 2 - 302;
    WoodenRail_y_position = canvas.height / 2 - 286;
    WoodenRail_width = 605;
    WoodenRail_height = 605;
    RotateSpinner_x_position = canvas.width / 2 - 133;
    RotateSpinner_y_position = canvas.height / 2 - 133;
    RotateSpinner_width = 266;
    RotateSpinner_height = 266;
    ballRadius = 10;
    ballradiustocenter_default = 145;
    ballradiustocenter_spin = 82;
}

// Function for Creating Html Image using Javascript
function createImage(image) {
    var img = document.getElementById(image);
    return img;
}

// Ball Rotation
var ballrotation = 0;
var ballmotion = true;
var destination_Postion = 0;

// Ball Creation
class Ball {
    constructor() {
        this.radius = ballRadius;
        this.startingAngle = 0;
        this.endingAngle = 2 * Math.PI;
        this.color = '#ffffff';
        this.radiustoball = {
            x: ballradiustocenter_default,
            y: ballradiustocenter_default
        }
        this.rotationStartingAngle = {
            x: 0,
            y: 0
        }
        this.position = {
            x: canvas.width / 2 + Math.cos(this.rotationStartingAngle.x * Math.PI / 180) * this.radiustoball.x,
            y: canvas.height / 2 + Math.sin(this.rotationStartingAngle.y * Math.PI / 180) * this.radiustoball.y
        }
    }

    // Player Class Method for placing the player on screen
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, this.startingAngle, this.endingAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    //Update the ball position
    update() {
        if (ballmotion) {
            ballrotation -= 1;
            if (ballrotation > -random_number) {
                if (!musicstart.play()) {
                    musicstart.play();
                }
                this.rotationStartingAngle.x = ballrotation;
                this.rotationStartingAngle.y = ballrotation;
                this.position.x = canvas.width / 2 + Math.cos(this.rotationStartingAngle.x * Math.PI / 180) * this.radiustoball.x;
                this.position.y = canvas.height / 2 + Math.sin(this.rotationStartingAngle.y * Math.PI / 180) * this.radiustoball.y;
            } else if ((ballrotation % 30) != 0) {
                this.rotationStartingAngle.x = ballrotation;
                this.rotationStartingAngle.y = ballrotation;
                this.position.x = canvas.width / 2 + Math.cos(this.rotationStartingAngle.x * Math.PI / 180) * this.radiustoball.x;
                this.position.y = canvas.height / 2 + Math.sin(this.rotationStartingAngle.y * Math.PI / 180) * this.radiustoball.y;
            } else {
                musicstart.pause();
                musicstart.currentTime = 0;
                musicend.play();
                this.position.x = canvas.width / 2 + Math.cos(this.rotationStartingAngle.x * Math.PI / 180) * ballradiustocenter_spin;
                this.position.y = canvas.height / 2 + Math.sin(this.rotationStartingAngle.y * Math.PI / 180) * ballradiustocenter_spin;
                ballmotion = false;
                destination_Postion = this.rotationStartingAngle.x;
            }
        }
        this.draw();
    }
}

// Circle Creation
const ball = new Ball();
ball.draw();
ctx.globalCompositeOperation = "destination-over";

// Static Spinner Image
var WoodenRail = createImage('WoodenRail');
ctx.drawImage(WoodenRail, WoodenRail_x_position, WoodenRail_y_position, WoodenRail_width, WoodenRail_height);
ctx.globalCompositeOperation = "source-over";

// Rotating Spinner Image
var RotateSpinner = createImage('RotateSpinner');
ctx.drawImage(RotateSpinner, RotateSpinner_x_position, RotateSpinner_y_position, RotateSpinner_width, RotateSpinner_height);

var rotation = 0;

function animate() {
    if (rotation <= 2160) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Static Spinner Image
        var WoodenRail = createImage('WoodenRail');
        ctx.drawImage(WoodenRail, WoodenRail_x_position, WoodenRail_y_position, WoodenRail_width, WoodenRail_height);
        ctx.globalCompositeOperation = "source-over";
        if (ballmotion) {
            ball.update();
            ctx.globalCompositeOperation = "destination-over";
        }
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2); // to get it in the origin
        if (rotation <= 90) {
            rotation += 1;
        } else if (rotation <= 180) {
            rotation += 1.10;
        } else if (rotation <= 270) {
            rotation += 1.20;
        } else if (rotation <= 360) {
            rotation += 1.30;
        } else if (rotation <= 450) {
            rotation += 1.40;
        } else if (rotation <= 540) {
            rotation += 1.50;
        } else if (rotation <= 630) {
            rotation += 1.60;
        } else if (rotation <= 720) {
            rotation += 1.70;
        } else if (rotation <= 810) {
            rotation += 1.80;
        } else if (rotation <= 900) {
            rotation += 1.90;
        } else if (rotation <= 990) {
            rotation += 2;
        } else if (rotation <= 1080) {
            rotation += 1.90;
        } else if (rotation <= 1170) {
            rotation += 1.80;
        } else if (rotation <= 1260) {
            rotation += 1.70;
        } else if (rotation <= 1350) {
            rotation += 1.60;
        } else if (rotation <= 1440) {
            rotation += 1.50;
        } else if (rotation <= 1530) {
            rotation += 1.40;
        } else if (rotation <= 1620) {
            rotation += 1.30;
        } else if (rotation <= 1710) {
            rotation += 1.20;
        } else if (rotation <= 1800) {
            rotation += 1.10;
        } else if (rotation <= 1890) {
            rotation += 1;
        } else if (rotation <= 1980) {
            rotation += 0.95;
        } else if (rotation <= 2070) {
            rotation += 0.9;
        } else {
            rotation += 0.85
        }
        ctx.rotate(rotation * Math.PI / 180); //rotate in origin
        ctx.translate(-canvas.width / 2, -canvas.height / 2); //put it back
        ctx.drawImage(RotateSpinner, RotateSpinner_x_position, RotateSpinner_y_position, RotateSpinner_width, RotateSpinner_height);
        if (!ballmotion) {
            ctx.globalCompositeOperation = "source-over";
            ball.update();
        }
        ctx.restore();
    } else {
        clearInterval(interval);
        rotation = 0;
        ballrotation = 0;
        ballmotion = true;
        getResult();
        startbtn.removeAttribute('disabled');
    }
}

// Function for running Animation
function runanimation() {
    startbtn.setAttribute('disabled', true);
    interval = setInterval(animate, 1);
}

// Add Event Listener to button
startbtn.addEventListener('click', function () {
    gamestart();
})

function gamestart() {
    random_number = 1080 + (((Math.floor(Math.random() * 10)) + 1) * 36) - 6;
    resultdiv.innerText = 0;
    runanimation();
}

window.onkeydown = function (e) {
    if (!startbtn.hasAttribute('disabled')) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            gamestart();
        }
    }
}

// Function For Calculating and showing the results
function getResult() {
    var angle = -destination_Postion + 1;
    var position = (angle - 1080) / 30 + 1;
    console.log(angle,position);
    switch (position) {
        case 1:
            resultdiv.style.color = 'red';
            resultdiv.innerText = 7;
            break;
        case 2:
            resultdiv.style.color = 'black';
            resultdiv.innerText = 10;
            break;
        case 3:
            resultdiv.style.color = 'red';
            resultdiv.innerText = 3;
            break;
        case 4:
            resultdiv.style.color = 'black';
            resultdiv.innerText = 6;
            break;
        case 5:
            resultdiv.style.color = 'red';
            resultdiv.innerText = 1;
            break;
        case 6:
            resultdiv.style.color = 'black';
            resultdiv.innerText = 4;
            break;
        case 7:
            resultdiv.style.color = 'red';
            resultdiv.innerText = 9;
            break;
        case 8:
            resultdiv.style.color = 'black';
            resultdiv.innerText = 12;
            break;
        case 9:
            resultdiv.style.color = 'red';
            resultdiv.innerText = 5;
            break;
        case 10:
            resultdiv.style.color = 'black';
            resultdiv.innerText = 8;
            break;
        case 11:
            resultdiv.style.color = 'red';
            resultdiv.innerText = 11;
            break;
        case 12:
            resultdiv.style.color = 'black';
            resultdiv.innerText = 2;
            break;
        default:
            resultdiv.style.color = 'red';
            resultdiv.innerText = 7;
            break;
    }
}
