import React, { Component, useState } from 'react';
import axios from 'axios'
import './addGardenPage.css'
import { useNavigate } from 'react-router-dom'

function AddGardenPage1() {
  const navigate = useNavigate();
  const navigateToCreateGarden2 = () => {
    sessionStorage.garden_info = [];
    var gname = document.getElementById('gardenName').value;
    var location = document.getElementById('gardenLocation').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    sessionStorage.gardens = JSON.stringify({ gname: gname, location: location, width: width, height: height })
    console.log('go to garden creation page 2');
    navigate('/add-garden-2');
  };
  const navigateToUserHome = () => {
    console.log('go to home page');
    navigate('/user-home');
  };
  
  return (
    <div className="addGardenPage">
      <div className="new-garden-green-zone">
        <h2
          style={{
            marginTop: '20%',
            marginBottom: '0',
            fontSize: '1vw'
          }}>Step 1 of 2</h2>
        <h1
          style={{
            marginBottom: '0',
            textAlign: 'left'
          }}>Let's create a garden</h1>
        <input
          type="text"
          name="gardenName"
          id="gardenName"
          placeholder="Enter garden name"
          className="bigField" />
        <input
          type="text"
          name="gardenLocation"
          id="gardenLocation"
          placeholder="Enter garden location"
          className="smallField" />
        <p
          style={{
            fontSize: '18px',
            marginBottom: '0',
            marginTop: '7%',
            textAlign: 'left'
          }}>Approximate garden dimensions (m):</p>
        <div className='contentGroup'>
          <input
            type="number"
            name="width"
            id="width"
            placeholder="width"
            className='dimensionField' />
          <p style={{
            fontSize: '18px'
          }}>&nbsp;x&nbsp;</p>
          <input
            type="number"
            name="height"
            id="height"
            placeholder="height"
            className='dimensionField' />
        </div>
        <div className="contentGroup" style={{
          marginTop: '20%'
        }}>
          <button className="nextButton" onClick={navigateToCreateGarden2}>
            <b>Next</b>
          </button>
          <button className="cancelButton" onClick={navigateToUserHome}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function AddGardenPage2() {
  const navigate = useNavigate();

  const navigateToGarden = () => {
    console.log('go to existing garden');
    var gardenToAdd = JSON.parse(sessionStorage.gardens)
    var purpose = document.getElementById('purpose').value;
    var beddings = document.getElementById('beddings').value;
    var param2 = document.getElementById('param2').value;
    gardenToAdd['purpose'] = purpose;
    gardenToAdd['beddings'] = beddings;
    gardenToAdd['param2'] = param2;
    console.log(gardenToAdd)
    axios.post('http://localhost:5000/add-garden', gardenToAdd, function (req, res) {
      res.send(gardenToAdd)
    })
      .then(() => console.log('Garden Created'))
      .catch(err => {
        console.error(err);
      });;
    navigate('/garden-editor')
  };

  const navigateToCreateGarden = () => {
    console.log('go create a garden');
    navigate('/add-garden-1')
  };

  return (
    <div className="addGardenPage">
      <div className="new-garden-green-zone">
        <h2
          style={{
            marginTop: '20%',
            marginBottom: '0',
            fontSize: '1vw'
          }}>Step 2 of 2</h2>
        <h1
          style={{
            marginBottom: '2%',
            textAlign: 'left'
          }}>What's your vision?</h1>
        <select name="purpose" id="purpose" className="bigField">
          <option value={0}>Select your purpose</option>
        </select>

        <input
          type="number"
          name="numberBeddings"
          placeholder="Enter number of beddings"
          id="beddings"
          className="smallField" />

        <input
          type="text"
          name="optionalParam2"
          placeholder="Enter optional param2"
          id="param2"
          className="smallField" />

        <div className="contentGroup" style={{
          marginTop: '29%'
        }}>
          <button className="nextButton" onClick={navigateToGarden}>
            <b>Create</b>
          </button>
          <button className="cancelButton" onClick={navigateToCreateGarden}>Previous</button>
        </div>
      </div>
    </div>
  );
}

export { AddGardenPage1, AddGardenPage2 }