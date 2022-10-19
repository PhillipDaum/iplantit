import React, {Component} from 'react';
import './userHomePage.css'
function AddGardenPage2() {
  return (
    <div className="new-garden-green-zone">
      <div className="new-garden-green-zone-side"/>
      <h2>Step 2 of 2</h2>
      <h1>What's your vision?</h1>
      <select name="purpose" id="purpose">
        <option value={0}>Select your purpose:</option>
      </select>
      <br/>
      <input
        type="number"
        name="numberBeddings"
        placeholder="Enter number of beddings"
        id="numberBeddings"/>
      <br/>
      <input
        type="text"
        name="optionalParam2"
        placeholder="Enter optional param2"
        id="optionalParam2"/>
      <br/>
      <br/>
      <br/>
      <button className="nextButton" onclick="create()">
        <b>Create</b>
      </button>
      <button className="cancelButton" onclick="previous()">Previous</button>
    </div>
  );
}

export default AddGardenPage2