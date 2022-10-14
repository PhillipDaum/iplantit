let grid = $("#grid");
let ctxG = grid[0].getContext("2d");

let coordinate = document.getElementById('coordinate');
let coord = document.getElementById('coord');

let beddings = []


let infoDiv = document.getElementById('content_info');
let seedPackage = document.getElementById('seedPackage');
let beddingPhoto = document.getElementById('bedding');
let calendarPhoto = document.getElementById('calendar');
let morePhoto = document.getElementById('more');

// Functions for side bar navication
{
    function seeds() {
        infoDiv.innerHTML = `<p>My Seeds</p>`
        morePhoto.src = 'img/moreUnselected.svg'
        calendarPhoto.src = 'img/calendarUnselected.svg'
        beddingPhoto.src = 'img/beddingUnselected.svg'
        seedPackage.src = 'img/seedPacketSelected.svg'
        rectPen();
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
}

let garden = new Garden(100, 100, new Array(), 'weather', 'GA');

let canvas = new fabric.Canvas('garden-canvas', {
    selection: true,
});
let penInUse;

// Allow drawing a rectangle
function rectPen() {
    canvas.defaultCursor = 'crosshair';
    let rect, isDown, origX, origY;
    if (penInUse) return;
    if (!penInUse) penInUse = true;

    canvas.selection = false;
    canvas.on('mouse:down', function(o) {
        isDown = true;
        var pointer = canvas.getPointer(o.e);
        origX = pointer.x;
        origY = pointer.y;
        var pointer = canvas.getPointer(o.e);

        rect = new Bedding('a', 'b', {
            left: origX,
            top: origY,
            originX: 'left',
            originY: 'top',
            width: pointer.x - origX,
            height: pointer.y - origY,
            angle: 0,
            fill: 'rgba(255,199,0,0.5)',
            transparentCorners: false
        });

        canvas.add(rect);
    });

    canvas.on('mouse:move', function(o) {
        if (!isDown) return;
        var pointer = canvas.getPointer(o.e);

        if (origX > pointer.x) {
            rect.set({ left: Math.abs(pointer.x) });
        }
        if (origY > pointer.y) {
            rect.set({ top: Math.abs(pointer.y) });
        }

        rect.set({ width: Math.abs(origX - pointer.x) });
        rect.set({ height: Math.abs(origY - pointer.y) });
        coordinate.style.backgroundColor = "orange";
        coordinate.style.left = o.e.pageX + 'px';
        coordinate.style.top = o.e.pageY - 20 + 'px';


        // calculate the rectangle width/height based
        // on starting vs current mouse position
        var width = origX - pointer.x;
        var height = origY - pointer.y;

        // TODO: convert width and height to actual dimension
        coord.innerText = width + "," + height;

        canvas.renderAll();
    });

    canvas.on('mouse:up', function(o) {
        isDown = false;
        rect.setCoords();
        rect.controls = {
            ...fabric.Text.prototype.controls,
            mtr: new fabric.Control({ visible: false })
        }
        canvas.off('mouse:down').off('mouse:move').off('mouse:up');
        canvas.selection = true;

        coordinate.style.backgroundColor = "transparent";
        coord.innerText = "";
        penInUse = false;
        canvas.defaultCursor = 'default';

        garden.beddings.push(rect);
        console.log(garden.beddings);

    });

}


canvas.on('selection:created', function(o) {
    console.log(canvas.getActiveObject());

});
canvas.on('selection:updated', function() {
    console.log(canvas.getActiveObject());
});


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
drawGrid(ctxG);