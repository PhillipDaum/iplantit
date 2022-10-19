import React, {Component} from 'react';
import './userHomePage.css'
function AddGardenPage1() {
  return (
    <div className="new-garden-green-zone">
        <div className="new-garden-green-zone-side" />
        <h2>Step 1 of 2</h2>
        <h1>Let's create a garden</h1>
        <input type="text" name="gardenName" placeholder="Enter garden name" id="gardenName" />
        <br />
        <input type="text" name="gardenLocation" placeholder="Enter garden location" id="gardenLocation" />
        <p style={{fontSize: '18px', marginTop: '40px'}}>Approximate garden dimensions:</p>
        <input type="number" name="width" placeholder="width (m)" id="width" /> x <input type="number" name="height" placeholder="height (m)" id="height" />
        <br />
        <button className="nextButton" onclick="next()"><b>Next</b></button>
        <button className="cancelButton" onclick="cancel()">Cancel</button>
      </div>
  );
}

export default AddGardenPage1