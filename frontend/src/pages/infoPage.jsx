import React, {Component} from 'react';
import './infoPage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import logo from '../img/logo-draft.png';
import externalLink from '../img/external-link.png';
import {SearchField, StepsCard} from '../components/ui'

class InfoPage extends React.Component {
  render() {
    return (
      <div className='infoPage'>
        <div className="navbar">
          <img src={logo} id="nav-bar-icon"/>
          <div id="searchBar">
            <div className="inputIcon"><FontAwesomeIcon icon={solid('magnifying-glass')} size={'xs'} style={{color: "grey"}}/></div>
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
                    id= "startGardeningBtn"
                    onClick={()=>{console.log("navigate to page2")}}>Start Gardening</button>
                <button
                    id="watchDemoBtn"
                    onClick={()=>{console.log("watch demo")}}
                   >Watch Demo
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
              <p >Global Food Insecurity:
                One great way to get food that is nutritious, delicious sustainable and good for
                the environment is to grow it yourself!</p>
              <p>A simple graphical
                vector-based application that makes sustainable food gardening and planning fun
                and easy. It will generate potential garden bed plots that are easy to
                understand.
              </p>
            </div>
            <div className="filler"><p>some image</p></div>
          </div>
          
          <div
            className="infoCard"
            style={{
            textAlign: 'center',
            paddingBottom: '150px'
          }}>
            <h1>
              <b>HOW IT WORKS</b>
            </h1>
            <div
              style={{
              display: 'inline-block',
              width: 'fit-content',
              textAlign: 'center'
            }}>
              <table>
                <tbody>
                  <tr>
                    <th><img className="round-number" src="../img/1_round.png"/></th>
                    <th><img className="round-number" src="../img/2_round.png"/></th>
                    <th><img className="round-number" src="../img/3_round.png"/></th>
                  </tr>
                  <tr>
                    <td>Enter Garden Bed Information</td>
                    <td>AI Generates Potential Garden<br/>Bed Plots</td>
                    <td>Build Community</td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '17px'
                    }}>Users will enter the size and shape of<br/>their garden bed</td>
                    <td style={{
                      fontSize: '17px'
                    }}>Algorithms create a list of potential<br/>garden plots. It uses data from the<br/>seed/plant relational database. Later<br/>we can integrate APIs for weather and
                      <br/>soil data</td>
                    <td style={{
                      fontSize: '17px'
                    }}>Starting with Call for Code and go from<br/>there. Building community can help us add more features, more data and<br/>reach more users.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div style={{
          textAlign: 'center'
        }}>
          <img
            style={{
            marginTop: '150px',
            height: '300px'
          }}
            src="../img/logo-draft.png"/>
          <br/>
          <button
            style={{
            marginTop: '50px'
          }}
            id="start-gardening-btn"
            onclick="startGardening()">Start Gardening</button>
        </div>
        <div className="footer2" style={{
          marginTop: '200px'
        }}>
          <p style={{
            float: 'left'
          }} className="footer-item">About Us</p>
          <p style={{
            float: 'left'
          }} className="footer-item">Get Involved</p>
          <p style={{
            float: 'right'
          }} className="footer-item">Github</p>
        </div>
      </div>
    );
  }
};

export default InfoPage