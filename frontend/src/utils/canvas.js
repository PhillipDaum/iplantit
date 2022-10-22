import React, { Component, useRef, useEffect, useState } from 'react';
import $ from "jquery";
import { fabric } from "fabric";
import { Garden, Bedding } from "../utils/objects.js"
// let grid = $("#grid");
// let ctxG = grid[0].getContext("2d");

let coordinate = document.getElementById('coordinate');
let coord = document.getElementById('coord');

let beddings = []


// let infoDiv = document.getElementById('content_info');
// let seedPackage = document.getElementById('seedPackage');
// let beddingPhoto = document.getElementById('bedding');
// let calendarPhoto = document.getElementById('calendar');
// let morePhoto = document.getElementById('more');

let penInUse = false;

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

export const Canvas = props => {

    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        drawGrid(context);
    }, [])

    return <canvas ref = { canvasRef } {...props }
    />
}

export const FCanvas = props => {
    const [penInUse, setPen] = useState(false);
    useEffect(() => {
        let coordinate = document.getElementById('coordinate');
        let coord = document.getElementById('coord');
        let activateButton = document.getElementById('content_info');
        let penInUse = false;
        let canvas = new fabric.Canvas("garden-canvas", { width: 500, height: 500, selection: true });
        activateButton.onclick = function() {
            bedding();
        }
        bedding();

        function bedding() {
            if (penInUse) {
                penInUse = false;
                resetCanvas();
            } else {
                penInUse = true
                rectPen();
            }
        }

        function rectPen() {
            console.log("started rect pen")
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
                var width = origX - pointer.x;
                var height = origY - pointer.y;

                // TODO: convert width and height to actual dimension
                coord.innerText = width + "," + height;

                canvas.renderAll();
            });

            canvas.on('mouse:up', function(o) {
                console.log("mouse up")
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

                coordinate.style.backgroundColor = "transparent";
                coord.innerText = "";

                garden.beddings.push(rect);
                console.log(garden.beddings);
            });


        }

        function resetCanvas() {
            // reset canvas
            console.log('resets canvas')
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

        canvas.on('selection:created', function(o) {
            console.log(canvas.getActiveObject());

        });
        canvas.on('selection:updated', function() {
            console.log(canvas.getActiveObject());
        });
    }, [])

    return ( < canvas id = "garden-canvas" / > );
}


// Functions for side bar navication

export function bedding() {

    if (penInUse) {
        penInUse = false;
        resetCanvas();

    } else {
        penInUse = true;
        rectPen();
    }

}




let garden = new Garden(100, 100, new Array(), 'weather', 'GA');
let canvas = new fabric.Canvas("garden-canvas", { width: 500, height: 500, selection: true });


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
        var width = origX - pointer.x;
        var height = origY - pointer.y;

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



canvas.on('selection:created', function(o) {
    console.log(canvas.getActiveObject());

});
canvas.on('selection:updated', function() {
    console.log(canvas.getActiveObject());
});



// drawGrid(ctxG);