let grid = $("#grid");
let ctxG = grid[0].getContext("2d");

let coordinate = document.getElementById('coordinate');
let coord = document.getElementById('coord');

let beddings = []

var sideBarRoot = ReactDOM.createRoot(document.getElementById('content_info'));


let seedPackage = document.getElementById('seedPackage');
let beddingPhoto = document.getElementById('beddingIcon');
let calendarPhoto = document.getElementById('calendar');
let morePhoto = document.getElementById('more');

let penInUse = false;
// Functions for side bar navication


function bedding() {
    sideBarRoot.render(beddingInfo);
    morePhoto.src = 'img/moreUnselected.svg'
    calendarPhoto.src = 'img/calendarUnselected.svg'
    beddingPhoto.src = 'img/beddingSelected.svg'
    seedPackage.src = 'img/seedPacketUnselected.svg'
}

function drawBedding() {
    if (penInUse) {
        penInUse = false;
        resetCanvas();

    } else {
        penInUse = true;
        rectPen();
    }
}

function seeds() {
    morePhoto.src = 'img/moreUnselected.svg'
    calendarPhoto.src = 'img/calendarUnselected.svg'
    beddingPhoto.src = 'img/beddingUnselected.svg'
    seedPackage.src = 'img/seedPacketSelected.svg'

    sideBarRoot.render(seedInfo);
}

function calendar() {
    morePhoto.src = 'img/moreUnselected.svg'
    calendarPhoto.src = 'img/calendarSelected.svg'
    beddingPhoto.src = 'img/beddingUnselected.svg'
    seedPackage.src = 'img/seedPacketUnselected.svg'
    sideBarRoot.render(timeInfo);

}

function more() {
    morePhoto.src = 'img/moreSelected.svg'
    calendarPhoto.src = 'img/calendarUnselected.svg'
    beddingPhoto.src = 'img/beddingUnselected.svg'
    seedPackage.src = 'img/seedPacketUnselected.svg'
    sideBarRoot.render(moreInfo);

}


let garden = new Garden(100, 100, new Array(), 'weather', 'GA', 30313);
let hardinessInfo;
fetch('https://phzmapi.org/' + garden.postalCode + '.json').then((response) => response.json()).then((data) => {
    hardinessInfo = data
    console.log(hardinessInfo);
});
let canvas = new fabric.Canvas('garden-canvas', {
    selection: true,
});

var selectedRect = "";

function getCurrentTab() {
    let beddingTab = document.getElementById("bedding");
    let seedTab = document.getElementById("seedTab");

    if (beddingTab != null) {
        return "beddingTab"
    } else if (seedTab != null) {
        return "seedTab"
    } else {
        return "otherTab"
    }
}
canvas.on('selection:created', function(o) {
    selectedRect = canvas.getActiveObject();

    if (getCurrentTab() === "beddingTab") {
        let widthInputField = document.getElementById("widthInput");
        let heightInputField = document.getElementById("heightInput");
        widthInputField.value = selectedRect.width * selectedRect.scaleX;
        heightInputField.value = selectedRect.height * selectedRect.scaleY;
    } else if (getCurrentTab() === "seedTab") {
        let seedTabHint = document.getElementById("seedTabHint");
        seedTabHint.dispatchEvent(new CustomEvent("newSelection", {
            bubbles: true
        }));

    }
});

canvas.on('selection:cleared', function(o) {
    selectedRect = "";
    if (getCurrentTab() === "beddingTab") {
        let widthInputField = document.getElementById("widthInput");
        let heightInputField = document.getElementById("heightInput");
        widthInputField.value = "";
        heightInputField.value = "";
    } else if (getCurrentTab() === "seedTab") {
        let seedTabHint = document.getElementById("seedTabHint");
        seedTabHint.dispatchEvent(new CustomEvent("newSelection", {
            bubbles: true
        }));
    }

});

canvas.on('selection:updated', function() {
    selectedRect = canvas.getActiveObject();

    if (getCurrentTab() === "beddingTab") {
        let widthInputField = document.getElementById("widthInput");
        let heightInputField = document.getElementById("heightInput");
        widthInputField.value = selectedRect.width * selectedRect.scaleX;
        heightInputField.value = selectedRect.height * selectedRect.scaleY;
    } else if (getCurrentTab() === "seedTab") {
        let seedTabHint = document.getElementById("seedTabHint");
        seedTabHint.dispatchEvent(new CustomEvent("newSelection", {
            bubbles: true
        }));

    }
});

// Allow drawing a rectangle
function rectPen() {

    let canDraw = true;
    let drawing = false;

    var rect;
    let origX;
    let origY;

    // disable all selections
    canvas.discardActiveObject().renderAll();
    canvas.selection = false;
    canvas.forEachObject(function(o) {
        o.selectable = false;
        o.hoverCursor = "default";
    });

    // style the cursor
    canvas.defaultCursor = 'crosshair';

    canvas.on('mouse:down', function(o) {
        let pointer = canvas.getPointer(o.e);
        canvas.forEachObject(function(o) {
            if (!canDraw) return;
            if (Overlap(o, pointer)) {
                console.log('attempting to draw rect on rect');
                canDraw = false;
            }
        });

        if (canDraw) {

            origX = pointer.x;
            origY = pointer.y;
            drawing = true;

            rect = new Bedding('regular soil', {
                left: origX,
                top: origY,
                originX: 'left',
                originY: 'top',
                width: pointer.x - origX,
                height: pointer.y - origY,
                angle: 0,
                fill: 'rgba(77, 208, 225, 0.5)',
                transparentCorners: false
            });

            canvas.add(rect);
        }

    });

    canvas.on('mouse:move', function(o) {
        if (!drawing) return;
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
        var width = pointer.x - origX;
        var height = pointer.y - origY;

        // TODO: convert width and height to actual dimension
        coord.innerText = width + "," + height;

        canvas.renderAll();
    });

    canvas.on('mouse:up', function(o) {
        if (!canDraw) {
            canDraw = true;
            return;
        }

        // reset flags
        penInUse = false;
        resetCanvas();

        rect.setCoords();
        rect.controls = {
            ...fabric.Text.prototype.controls,
            mtr: new fabric.Control({ visible: false })
        }
        rect.set({ availableSpace: this.width * this.height / 2000 })
        coordinate.style.backgroundColor = "transparent";
        coord.innerText = "";

        garden.beddings.push(rect);
        console.log(garden.beddings);
    });

}

function resetCanvas() {
    // reset canvas
    canvas.off('mouse:down').off('mouse:move').off('mouse:up');

    canvas.selection = true;
    canvas.forEachObject(function(o) {
        o.selectable = true;
        o.hoverCursor = "move";
    });
    canvas.defaultCursor = 'default';

}

function Overlap(rect, pointer) {
    if (pointer.y >= rect.top &&
        pointer.y <= rect.top + rect.height &&
        pointer.x >= rect.left &&
        pointer.x <= rect.left + rect.width) {
        return true;
    }
    return false;
}


function modifyRectDimension(w, h) {
    w = parseFloat(w);
    h = parseFloat(h);
    if (selectedRect != "") {
        if (w == -1) {
            selectedRect.set({
                height: h,
                scaleY: 1
            });
        } else if (h == -1) {
            selectedRect.set({ width: w, scaleX: 1 });
        } else {
            selectedRect.set({ height: h, scaleY: 1 });
            selectedRect.set({ width: w, scaleX: 1 });
        }
        canvas.renderAll();

    }

    console.log(h);
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
drawGrid(ctxG);