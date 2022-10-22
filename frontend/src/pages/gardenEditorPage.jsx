import React, {useRef, Component, useEffect} from 'react';
import './gardenEditorPage.css'
import {fabric} from "fabric";
import {LoggedInHeader} from '../components/ui';
import bedding from '../img/beddingSelected.svg';
import beddingU from '../img/beddingUnselected.svg';
import seed from '../img/logo-draft.png'
import seedU from '../img/seeds-svgrepo-com.svg';
import calendar from '../img/calendarSelected.svg';
import calendarU from '../img/calendarUnselected.svg';
import more from '../img/moreSelected.svg';
import moreU from '../img/moreUnselected.svg';
import {FCanvas, Canvas} from '../utils/canvas.js'

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: -1
    };
  }
  render() {
    return (
      <div className="sidebar">
        <a onClick={() => {
          this.setState({tab: 0});
        }}><img
          className="sidebar-item"
          src={this.state.tab == 0
        ? bedding
        : beddingU}
          id="bedding"/></a>
        <a onClick={() => this.setState({tab: 1})}><img
          className="sidebar-item"
          src={this.state.tab == 1
        ? seed
        : seedU}
          id="seedPackage"/></a>
        <a onClick={() => this.setState({tab: 2})}><img
          className="sidebar-item"
          src={this.state.tab == 2
        ? calendar
        : calendarU}
          id="calendar"/></a>
        <a onClick={() => this.setState({tab: 3})}><img
          className="sidebar-item"
          src={this.state.tab == 3
        ? more
        : moreU}
          id="more"/></a>
      </div>

    );
  }
}

class GardenEditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      penInUse: false
    };
    this.sideBar = React.createRef();

  }
  componentDidMount() {

    
  }

  render() {
    return (
      <div className='gardenEditorPage'>
        <LoggedInHeader/>
        <div className='editorWrapper'>
          <SideBar ref={this.sideBar}></SideBar>

          <div className="section" id="content_info"></div>
          <div id="canvasWrapper">
            <Canvas id="grid" width="500px" height="500px"></Canvas>
            {/* <canvas id="garden-canvas" width="500px" height="500px"/> */}
            <FCanvas ></FCanvas>
          </div>
          <div id="coordinate">
            <p id="coord"></p>
          </div>
        </div>
      </div>
    );
  }

}

// // Allow drawing a rectangle function rectPen(canvas) {
// console.log("rectpen");     let canDraw = true;     let drawing = false; var
// rect;     let origX;     let origY;     // disable all selections
// canvas.discardActiveObject().renderAll();     canvas.selection = false;
// canvas.forEachObject(function(o) {         o.selectable = false;
// o.hoverCursor = "default";     });     // style the cursor
// canvas.defaultCursor = 'crosshair';     canvas.on('mouse:down', function(o) {
//         console.log("mouse is down");         let pointer =
// canvas.getPointer(o.e);         canvas.forEachObject(function(o) {  if
// (!canDraw) return;             if (Overlap(o, pointer)) {
// console.log('attempting to draw rect on rect');                 canDraw =
// false;             }         });         if (canDraw) {             origX =
// pointer.x;             origY = pointer.y;             drawing = true;
// rect = new fabric.Rect({                 left: origX, top: origY,
//     originX: 'left',                 originY: 'top',                width:
// pointer.x - origX,                 height: pointer.y - origY,
// angle: 0,                 fill: 'rgba(255,199,0,0.5)',
// transparentCorners: false             }); canvas.add(rect);         }     });
//     canvas.on('mouse:move', function(o) {         if (!drawing) return;
//   var pointer = canvas.getPointer(o.e);       if (origX > pointer.x) {
//      rect.set({ left: Math.abs(pointer.x) });         }         if (origY >
// pointer.y) {  rect.set({ top: Math.abs(pointer.y) });         }
// rect.set({ width: Math.abs(origX - pointer.x) });         rect.set({ height:
// Math.abs(origY - pointer.y) });        ;         // calculate the rectangle
// width/height based         // on starting vs current mouse position
// var width = origX - pointer.x;         var height = origY - pointer.y;
//  // TODO: convert width and height to actual dimension
// canvas.renderAll();     }); canvas.on('mouse:up', function(o) {       if
// (!canDraw) {             canDraw = true;             return;         }
//  this.setState({penInUse : false});         resetCanvas(canvas);
// rect.setCoords(); rect.controls = {
// ...fabric.Text.prototype.controls, mtr: new fabric.Control({ visible: false
// })         }     }); }

function resetCanvas(canvas) {
  // reset canvas
  canvas
    .off('mouse:down')
    .off('mouse:move')
    .off('mouse:up');

  canvas.selection = true;
  canvas.forEachObject(function (o) {
    o.selectable = true;
    o.hoverCursor = "move";
  });
  canvas.defaultCursor = 'default';

}

function Overlap(rect, pointer) {
  if (pointer.y >= rect.top && pointer.y <= rect.top + rect.height && pointer.x >= rect.left && pointer.x <= rect.left + rect.width) {
    return true;
  }
  return false;
}

export default GardenEditorPage