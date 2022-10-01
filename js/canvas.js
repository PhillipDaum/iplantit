let i = 0;
let grid = document.getElementById('grid');
let ctxG = grid.getContext("2d");

let overlay = document.getElementById('overlay');
let ctxO = overlay.getContext("2d");

let infoDiv = document.getElementById('content_info');
let seedPackage = document.getElementById('seedPackage');
let beddingPhoto = document.getElementById('bedding');
let calendarPhoto = document.getElementById('calendar');
let morePhoto = document.getElementById('more');
let coordinate = document.getElementById('coordinate');
let coord = document.getElementById('coord');

// calculate where the canvas is on the window
// (used to help calculate mouseX/mouseY)
var $canvas = $("#grid");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();

// this flage is true when the user is dragging the mouse
var isDown = false;

// these vars will hold the starting mouse position
var startX;
var startY;

var prevStartX = 0;
var prevStartY = 0;

var prevWidth = 0;
var prevHeight = 0;


function seeds() {
    infoDiv.innerHTML = `<p>My Seeds</p>`
    morePhoto.src = 'img/moreUnselected.svg'
    calendarPhoto.src = 'img/calendarUnselected.svg'
    beddingPhoto.src = 'img/beddingUnselected.svg'
    seedPackage.src = 'img/seedPacketSelected.svg'
}

function bedding() {
    infoDiv.innerHTML = `<p>Bedding</p>`
    morePhoto.src = 'img/moreUnselected.svg'
    calendarPhoto.src = 'img/calendarUnselected.svg'
    beddingPhoto.src = 'img/beddingSelected.svg'
    seedPackage.src = 'img/seedPacketUnselected.svg'
}

function calendar() {
    infoDiv.innerHTML = `<p>Calendar</p>`
    morePhoto.src = 'img/moreUnselected.svg'
    calendarPhoto.src = 'img/calendarSelected.svg'
    beddingPhoto.src = 'img/beddingUnselected.svg'
    seedPackage.src = 'img/seedPacketUnselected.svg'
}

function more() {
    infoDiv.innerHTML = `<p>More</p>`
    morePhoto.src = 'img/moreSelected.svg'
    calendarPhoto.src = 'img/calendarUnselected.svg'
    beddingPhoto.src = 'img/beddingUnselected.svg'
    seedPackage.src = 'img/seedPacketUnselected.svg'
}

function selectRectangle(id) {
    console.log(id)
}

function drawGrid(context) {
    let width = context.canvas.clientWidth;
    let height = context.canvas.clientHeight;

    for (let x = 0; x <= width; x += 10) {
        context.moveTo(x + 0.5, 0);
        context.lineTo(x + 0.5, height);
    }
    context.moveTo(width - 0.5, 0);
    context.lineTo(width - 0.5, height);

    for (let x = 0; x <= height; x += 10) {
        context.moveTo(0, x + 0.5);
        context.lineTo(width, x + 0.5);
    }
    context.moveTo(0, height - 0.5);
    context.lineTo(width, height - 0.5);

    context.lineWidth = 1;
    context.strokeStyle = "#ADD8E6";
    context.stroke();
}


function handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();

    // save the starting x/y of the rectangle
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);

    // set a flag indicating the drag has begun
    isDown = true;
}

function handleMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false;
    ctxG.fillStyle = "#FFC700";
    ctxG.fillRect(prevStartX, prevStartY, prevWidth, prevHeight);
    coordinate.style.backgroundColor = "transparent";
    coord.innerText = "";
}

function handleMouseOut(e) {
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false;
}


function handleMouseMove(e) {
    e.preventDefault();
    e.stopPropagation();

    // if we're not dragging, just return
    if (!isDown) {
        return;
    }

    // get the current mouse position
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mousemove stuff here
    coordinate.style.backgroundColor = "orange";
    coordinate.style.left = e.pageX + 'px';
    coordinate.style.top = e.pageY - 15 + 'px';


    // calculate the rectangle width/height based
    // on starting vs current mouse position
    var width = mouseX - startX;
    var height = mouseY - startY;

    // TODO: convert width and height to actual dimension
    coord.innerText = width + "," + height;

    // clear the canvas
    ctxO.clearRect(0, 0, overlay.width, overlay.height);
    ctxO.fillStyle = "#FFC700";
    // draw a new rect from the start position 
    // to the current mouse position
    ctxO.fillRect(startX, startY, width, height);
    prevStartX = startX;
    prevStartY = startY;

    prevWidth = width;
    prevHeight = height;
}
drawGrid(ctxG);
// listen for mouse events
$("#grid").mousedown(function(e) {
    handleMouseDown(e);
});
$("#grid").mousemove(function(e) {
    handleMouseMove(e);
});
$("#grid").mouseup(function(e) {
    handleMouseUp(e);
});

$("#grid").mouseout(function(e) {
    handleMouseOut(e);
});