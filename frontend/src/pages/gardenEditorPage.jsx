import React, {Component} from 'react';
import './userHomePage.css'

function GardenEditorPage() {
  return (
    <div>
    <div className="navbar">
      <a href="user-home.html"><img src="img/home.svg" id="nav-bar-icon-home" /></a>
      <p className="heading">My Good Garden</p>
      <img src="img/user.svg" id="nav-bar-notification-icon" />
      <button className="share-button">
        <b><p style={{float: 'left', marginLeft: '10px', marginRight: '10px'}}>Share</p></b>
        <img src="img/share.svg" style={{height: '25px', float: 'left'}} />
      </button>
    </div>
    <div className="sidebar">
      <a onclick="bedding()"><img className="sidebar-item" src="img/beddingUnselected.svg" id="bedding" /></a>
      <a onclick="seeds()"><img className="sidebar-item" src="img/seedPacketUnselected.svg" id="seedPackage" /></a>
      <a onclick="calendar()"><img className="sidebar-item" src="img/calendarUnselected.svg" id="calendar" /></a>
      <a onclick="more()"><img className="sidebar-item" src="img/moreUnselected.svg" id="more" /></a>
    </div>
    <div className="section" id="content_info" />
    <div id="canvasWrapper">
      <canvas id="grid" width="500px" height="500px" />
      <canvas id="garden-canvas" width="500px" height="500px" />
    </div>
    <div id="coordinate">
      <p id="coord">hi</p>
    </div>
  </div>
  );
}

export default GardenEditorPage