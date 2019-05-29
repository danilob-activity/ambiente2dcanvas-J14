document.getElementById("info-object").style.display = "none";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = window.innerWidth;
const HEIGHT = window.outerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;
//faz o desenho do triângulo

var objects = []; //lista de objetos
var objectSelected = null;

function drawCanvas() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (var i = 0; i < objects.length; i++) {
        objects[i].draw();
    }
    drawAxis();
}

function drawAxis() {
    ctx.strokeStyle = "#f3c1c6";
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.setLineDash([1, 1]);
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);


}

window.addEventListener("load", drawCanvas);

function pushBox() {
    var obj = new Box();
    objects.push(obj);
    objectSelected = objects[objects.length - 1];
    updateDisplay(objectSelected);
    document.getElementById("info-object").style.display = "block";
    drawCanvas();

}

function pushCircle() {
    var obj = new Circle();
    objects.push(obj);
    objectSelected = objects[objects.length - 1];
    updateDisplay(objectSelected);
    document.getElementById("info-object").style.display = "block";
    drawCanvas();
}

function updateDisplay(objectSelected) {
    document.getElementById("posx").value = objectSelected.getTranslate()[0];
    document.getElementById("posy").value = objectSelected.getTranslate()[1];

    document.getElementById("theta").value = objectSelected.getRotate()[0];

    document.getElementById("scalex").value = objectSelected.getScale()[0];
    document.getElementById("scaley").value = objectSelected.getScale()[1];

    document.getElementById("fill_color").value = objectSelected.getFill();

    document.getElementById("stroke_color").value = objectSelected.getStroke();
}

function updatePosition() {
    if (objectSelected != null) {
        try {
            posx = parseFloat(document.getElementById("posx").value);
            posy = parseFloat(document.getElementById("posy").value);
            objectSelected.setTranslate(posx, posy);

            drawCanvas();
        } catch (error) {
            alert(error);
        }
    }
}

function updateRotate() {
    if (objectSelected != null) {
        try {
            theta = parseFloat(document.getElementById("theta").value);
            objectSelected.setRotate(theta);

            drawCanvas();
        } catch (error) {
            alert(error);
        }
    }
}

function updateScale() {
    if (objectSelected != null) {
        try {
            scalex = parseFloat(document.getElementById("scalex").value);
            scaley = parseFloat(document.getElementById("scaley").value);
            objectSelected.setScale(scalex, scaley);

            drawCanvas();
        } catch (error) {
            alert(error);
        }
    }
}

function updateFill() {
    if (objectSelected != null) {
        try {
            fill_color = document.getElementById("fill_color").value;
            objectSelected.setFill(fill_color);

            drawCanvas();
        } catch (error) {
            alert(error);
        }
    }
}

function updateStroke() {
    if (objectSelected != null) {
        try {
            stroke_color = document.getElementById("stroke_color").value;
            objectSelected.setStroke(stroke_color);

            drawCanvas();
        } catch (error) {
            alert(error);
        }
    }
}