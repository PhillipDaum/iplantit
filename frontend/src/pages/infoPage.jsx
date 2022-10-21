import React, {Component} from 'react';
import './infoPage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import logo from '../img/logo-draft.png';
import externalLink from '../img/external-link.png';
import {Footer} from '../components/ui'
import circle1 from '../img/1_round.png';
import circle2 from '../img/2_round.png';
import circle3 from '../img/3_round.png';
import {useNavigate} from 'react-router-dom'

function InfoPage() {

  const navigate = useNavigate();

  const navigateToUserHome = () => {
    console.log('go to page 2');
    navigate('/user-home');
  };
  return (
    <div className='infoPage'>
      <div className="navbar">
        <img src={logo} id="nav-bar-icon"/>
        <div id="searchBar">
          <div className="inputIcon"><FontAwesomeIcon
            icon={solid('magnifying-glass')}
            size={'xs'}
            style={{
      color: "grey"
    }}/></div>
          <input className="input-field" type="text" placeholder="Search gardens"></input>
        </div>
        <button id="login-button">Login / Sign Up</button>

      </div>
      <div id="content-main-page">
        <div id="titleBlock">
          <div className="titleBlockText">
            <h1 id="mainTitle">Your Gardening Journey Starts Here</h1>
            <p id="titleDescription">
              IPlantit is a simple graphical vector-based application that makes sustainable
              food gardening and planning fun and easy.
            </p>
            <div id="startButtons">
              <button
                className="startGardeningBtn"
                onClick={navigateToUserHome}>Start Gardening</button>
              <button
                id="watchDemoBtn"
                onClick={() => {
                console.log("watch demo")
              }}>Watch Demo
                <img height="100%" src={externalLink}/>
              </button>
            </div>
          </div>
          <div id="someCoolAnim">
            <h3>anim place holder</h3>
          </div>
        </div>

        <div className="infoCard">
          <div className="infoCardText">
            <h1>Our Mission</h1>
            <p >Global Food Insecurity: One great way to get food that is nutritious,
              delicious sustainable and good for the environment is to grow it yourself!</p>
            <p>A simple graphical vector-based application that makes sustainable food
              gardening and planning fun and easy. It will generate potential garden bed plots
              that are easy to understand.
            </p>
          </div>
          <div className="filler">
            <p>some image</p>
          </div>
        </div>

        <div className="stepCardSection">
          <h1>
            <b>HOW IT WORKS</b>
          </h1>
          <div className="stepCards">
            <div className="stepCard">
              <img className="round-number" src={circle1}/>
              <h4>Enter Garden Bed Information</h4>
              <p>Users will enter the size and shape of their garden bed</p>
            </div>
            <div className="stepCard">
              <img className="round-number" src={circle2}/>
              <h4>AI Generates Potential Garden Bed Plots</h4>
              <p>Algorithms create a list of potential garden plots. It uses data from the
                seed/plant relational database. Later we can integrate APIs for weather and soil
                data</p>
            </div>
            <div className="stepCard">
              <img className="round-number" src={circle3}/>
              <h4>Build Community</h4>
              <p>Starting with Call for Code and go from there. Building community can help us
                add more features, more data and reach more users.</p>
            </div>

          </div>
        </div>
        <div className="closing">
          <img id="closingIcon" src={logo}/>

          <button
            className="startGardeningBtn"
            id="startGardeningBtnClosing"
            onClick={navigateToUserHome}>Start Gardening</button>
        </div>
        <Footer></Footer>
      </div>
    </div>

  );
}

export default InfoPage