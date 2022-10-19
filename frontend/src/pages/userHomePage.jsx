import React, {Component} from 'react';
import './userHomePage.css';
import './infoPage.css'

import {LoggedInHeader, Footer, GardenPrevieCard} from '../components/ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
function UserHomePage() {
  return (
    <div id='userHomePage'>
      <LoggedInHeader/>
      <div className="grey-zone"/>
      <div className="pageContent">

        <div className="gardenViewSection">
          <h1 className="gardenViewHeading">Your Gardens</h1>
          <div className="gardenView">
          <GardenPrevieCard gardenName="Create new" addNew="true"/>
          <GardenPrevieCard gardenName="My Garden 1"/>
          <GardenPrevieCard gardenName="My Garden 2"/>
          </div>
        </div>

        <div className="gardenViewSection">
          <h1 className="gardenViewHeading">Community Gardens</h1>
          <div className="gardenView">
          <GardenPrevieCard gardenName="Flowers"/>
          <GardenPrevieCard gardenName="Nutrition"/>
          <GardenPrevieCard gardenName="Explore All"/>
          </div>
        </div>

       
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UserHomePage