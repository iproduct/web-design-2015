/* 
 * Canvas demo.
 */
function init() {
    var canvas = document.getElementById("canvas01");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.fillRect(50, 30, 150, 75);
    ctx.strokeRect(50, 30, 150, 75);
    ctx.fillStyle = "black";
//    drawPacman(ctx);
//    drawSphere(ctx);
//    drawText(ctx);
//    drawRobot(ctx);
    loadImages(ctx, "img/robot", ".svg", 4, animate);
    
    function animate(images) {
        var start;
        function step(timestamp) {
            if (!start)
                start = timestamp;
            var progress = timestamp - start;
            ctx.clearRect(0, 0, width, height);
            drawImage(images, Math.PI /2, 50, 1, progress, 0, 0, 200);
            if (progress < 8000) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }
    
    function drawImage(images, angle, speed, scale, progress, 
        startX, startY, startSize){
        var image;
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        var times = Math.floor(angle / (2 * Math.PI));
        angle  = times * 2 * Math.PI;
        console.log("Angle: " + angle);
        var position = progress*speed/1000;
        var sizeY = startSize; //* progress*scale/1000;
        console.log("Progress: " + position);
        ctx.translate(startX + Math.cos(angle)*position, startY+ Math.sin(angle)*position);
        if (angle > (7/4)*Math.PI || angle <= (1/4)*Math.PI) {
            image = images[2];
        } else if (angle > (1/4)*Math.PI && angle <= (3/4)*Math.PI) {
            image = images[1];
        }else if (angle > (3/4)*Math.PI && angle <= (5/4)*Math.PI) {
            image = images[0];
        }else {
            image = images[3];
        }
        var sizeX = sizeY * image.width / image.height;
        ctx.drawImage(image, 0, 0, sizeX, sizeY);
        ctx.restore();
    }

}

function loadImages(ctx, basename, extension, number, callback) {
    var file, img, loaded = 0;
    var images = [];
    for (var i = 0; i < number; i++) {
        file = basename + (i + 1) + extension;
        console.log(file);
        images[i] = new Image();
        images[i].src = file;
        images[i].onload = function () {
            if (++loaded === number)
                callback(images);
        };
    }
}

//function showImages(ctx, images) {
//    for (var i = 0; i < images.length; i++) {
//        ctx.drawImage(images[i], 130, 15, 725, 990, 100, i * 100, 73, 100);
//    }
//}

function drawRobot(ctx) {
    var img01 = document.getElementById("robot01");
    var img02 = new Image();   // Create new img element
    img02.src = 'img/robot2.svg'; // Set source path
    ctx.drawImage(img01, 130, 15, 725, 990, 100, 100, 145, 200);
    img02.onload = function () {
        ctx.drawImage(img02, 220, 15, 750, 990, 245, 100, 145, 200);
    };

}

function drawText(ctx) {
    ctx.font = "46px Arial";
    ctx.fillStyle = "red";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 6;
    ctx.shadowColor = "#555";
    ctx.fillText("A Big Red Sphere", 10, 160);
}


function drawSphere(ctx) {
    var grd = ctx.createRadialGradient(50, 50, 5, 90, 60, 100);
    grd.addColorStop(1, "red");
    grd.addColorStop(0, "white");
    ctx.fillStyle = grd;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#555";
    ctx.beginPath();
    ctx.arc(75, 75, 70, 0, 2 * Math.PI);
    ctx.fill();
}


function drawPacman(ctx) {
    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
}