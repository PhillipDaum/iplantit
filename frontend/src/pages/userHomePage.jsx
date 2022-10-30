import React, { Component } from 'react';
import axios from 'axios'
import './userHomePage.css';
import './infoPage.css'
import wave from '../img/wave.svg'

import { LoggedInHeader, Footer, GardenPrevieCard } from '../components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

var groups = []

export default class UserHomePage extends Component {
  constructor() {
    super();
    this.user = {
      gardens: [],
      uname: 'None'
    };
  }
  componentDidMount = async () => {
    const res = await axios.get('http://localhost:5000/user-home', {
      proxy: {
        host: 'localhost',
        port: 5000
      }
    });
    this.setState({ gardens: res.data.gardens });
    if (groups.length != 0) {
      groups = [];
    }
    for (let i in res.data.gardens) {
      console.log(i)
      groups.push(<div className="parent">{res.data.gardens[i]}</div>)
    }
    console.log(groups)
  }


  render() {
    return (
      <div id='userHomePage'>
        <LoggedInHeader />
        <div className="grey-zone" />
        <div className="pageContent">

          <div className="gardenViewSection" style={{backgroundImage: `url(${wave})`, backgroundSize: 'cover'}}>
            <h1 className="gardenViewHeading" style={{color: "white"}}>Your Gardens</h1>
            <div className="gardenView" >
              <GardenPrevieCard gardenName="Create new" addNew="true" />
              {groups.map((Item, i) => <GardenPrevieCard key={i} gardenName={this.state.gardens[i]['GID']} />)}
            </div>
          </div>

          <div className="commonGardenViewSection">
            <h1 className="gardenViewHeading">Community Gardens</h1>
            <div className="gardenView">
              <GardenPrevieCard gardenName="Flowers" />
              <GardenPrevieCard gardenName="Nutrition" />
              <GardenPrevieCard gardenName="Explore All" />
            </div>
          </div>


        </div>
        <Footer></Footer>
      </div>
    );
  }
} 
