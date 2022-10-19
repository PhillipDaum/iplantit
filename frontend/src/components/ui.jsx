import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import circle1 from '../img/1_round.png';
import logo from '../img/logo-draft.png';
import './ui.css'
import {Routes, Route, useNavigate} from 'react-router-dom'

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
    console.log('go to existing garden');
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