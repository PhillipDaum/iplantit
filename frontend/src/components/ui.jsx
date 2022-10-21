import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import logo from '../img/logo-draft.png';
import './ui.css'
import {useNavigate} from 'react-router-dom'


import bedding from '../img/beddingSelected.svg';
import beddingU from '../img/beddingUnselected.svg';
import seed from '../img/logo-draft.png'
import seedU from '../img/seeds-svgrepo-com.svg';
import calendar from '../img/calendarSelected.svg';
import calendarU from '../img/calendarUnselected.svg';
import more from '../img/moreSelected.svg';
import moreU from '../img/moreUnselected.svg';
//import * as util from '../utils/canvas.js'

const Footer = () => (
  <div className="footer">
    <a href="" style={{
      float: 'left'
    }} className="footer-item">About Us</a>
    <a href="" style={{
      float: 'left'
    }} className="footer-item">Get Involved</a>
    <a href="" style={{
      float: 'right'
    }} className="footer-item">Github</a>
  </div>
)

function LoggedInHeader(props) {
  return (
    <div className="navBar">
      <img src={logo} id="navBarLogo"/>
      <div className='navBarIcons'>
        <FontAwesomeIcon
          className="navBarIcon"
          icon={solid('bell')}
          size={'xl'}
          style={{
          color: "white"
        }}/>
        <FontAwesomeIcon
          className="navBarIcon"
          icon={solid('circle-user')}
          size={'xl'}
          style={{
          color: "white"
        }}/>
      </div>
    </div>
  );
}

function GardenPrevieCard(props) {
  const colors = ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93']
  const color = colors[Math.floor(Math.random() * colors.length)]
  const navigate = useNavigate();

  const navigateToGarden = () => {
    console.log('go to existing garden');
    navigate('/garden-editor')
  };

  const navigateToCreateGarden = () => {
    console.log('go create a garden');
    navigate('/add-garden-1')
  };

  function AddNew() {
    if (props.addNew) {
      return (<FontAwesomeIcon className="addIcon" icon={solid('circle-plus')}/>);
    }
  }

  return (
    <div className="gardenPreviewCard" onClick={props.addNew? navigateToCreateGarden:navigateToGarden}>
      <div id="gardenPreviewWindow" style={{
        backgroundColor: color
      }}>
        <AddNew/>
      </div>

      <p style={{
        fontSize: '16px'
      }}>{props.gardenName}</p>

    </div>
  );
}



export {LoggedInHeader, Footer, GardenPrevieCard}