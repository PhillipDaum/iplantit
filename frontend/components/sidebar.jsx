class SideBarContent extends React.Component {
  render() {
    return (
      <div className="sidebar-content">
        <p className="title">{this.props.title}</p>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}


class SeedDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: "",
      plants: [
        {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
        }, {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'location'
        }, {
          id: 2,
          title: 'California',
          selected: false,
          key: 'location'
        }, {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'location'
        }, {
          id: 4,
          title: 'Izmir',
          selected: false,
          key: 'location'
        }, {
          id: 5,
          title: 'Oslo',
          selected: false,
          key: 'location'
        }
      ]
    }
    this.insertAmount = this
      .insertAmount
      .bind(this);
  }
  
  insertAmount() {
    console.log("clicked")
    this.setState({amount: (
        <div
          style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <p style={{
            fontSize: "8px"
          }}>Enter plant amount</p>
          <input type="number"></input>
        </div>

      )})

  }
  render() {
    return (
      <div className="seedDrop">
        <DropDown
        items={[
          { value: "United States", id: 1 },
          { value: "Canada", id: 2 },
          { value: "Mexico", id: 3 },
          { value: "Japan", id: 4 }
        ]} onClick = {()=>{this.insertAmount()}}
      />
        
        {this.state.amount}
      </div>
    )
  }

}

class AddSeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seedList: [],
      key: 0
    }
  }
  addPlant() {
    this.setState({
      seedList: this
        .state
        .seedList
        .concat( < SeedDropDown key = {
          this.state.key
        } > </SeedDropDown>),
      key: this.state.key + 1
    });
  }
  render() {
    return (
      <div id="seedTab">
        <div className="planted">
          {this.state.seedList}
        </div>
        <button className="btn" onClick={() => this.addPlant()}>
          <i id="addIcon" className="fa fa-circle-plus fa-2x"></i>
          <br></br>
          Add Seed
        </button>
      </div>
    )
  }

}

function BeddingSideBar(props) {
  return (
    <div id="bedding">
      <div className="dimensionInput">
        <label className="beddingField" htmlFor="widthInput">Width (m):</label>
        <input
          type="text"
          className="dimensionInputField"
          id="widthInput"
          name="widthInput"
          onChange={e => modifyRectDimension(e.target.value, -1)}></input>
      </div>
      <div className="dimensionInput">
        <label className="beddingField" htmlFor="heightInput">Height (m):</label>
        <input
          type="text"
          className="dimensionInputField"
          id="heightInput"
          name="heightInput"
          onChange={e => modifyRectDimension(-1, e.target.value)}></input>
      </div>
      <button className="btn" onClick={() => drawBedding()}>
        <i id="addIcon" className="fa fa-circle-plus fa-2x"></i>
        <br></br>
        Add Bedding
      </button>

    </div>
  );
}

var beddingInfo = <SideBarContent title="Bedding">
  <BeddingSideBar></BeddingSideBar>

</SideBarContent>;
var seedInfo = <SideBarContent title="Seeds">
  <AddSeed></AddSeed>
</SideBarContent>;
var seedInfoUnselected = <SideBarContent title="Seeds">
  <p>{selectedRect}</p>
</SideBarContent>;
var timeInfo = <SideBarContent title="Schedule"/>;
var moreInfo = <SideBarContent title="Extensions"/>;
