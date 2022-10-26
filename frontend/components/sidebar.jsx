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

function SeedOption(props) {
  return (
    <div className="option">
      <input
        className="s-c top"
        type="radio"
        name="platform"
        defaultValue={props.name}/>
      <input
        className="s-c bottom"
        type="radio"
        name="platform"
        defaultValue={props.name}/>
      <img className="plantPic" src={props.img}/>
      <span className="label">{props.name}</span>
      <span className="opt-val">{props.name}</span>
    </div>
  )
}

class SeedDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: ""
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
        <form id="app-cover">
          <div id="select-box">
            <input type="checkbox" id="options-view-button"/>
            <div id="select-button" className="brd">
              <div id="selected-value">
                <span>Select a Seed</span>
              </div>
              <div id="chevrons">
                <img className="plantPic" src="./img/search.svg"></img>
              </div>
            </div>
            <div id="options" onClick={this.insertAmount}>
              <SeedOption name="carrot" img="./img/add.svg"></SeedOption>
              <SeedOption name="carrot" img="./img/add.svg"></SeedOption>
              <SeedOption name="carrot" img="./img/add.svg"></SeedOption>
              <div id="option-bg"/>
            </div>
          </div>
        </form>
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
