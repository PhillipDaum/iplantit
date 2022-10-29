class SideBarContent extends React.Component {
  render() {
    return (
      <div className="sidebar-content" id="sideBarWrapper">
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
          id: 1,
          value: sweetBasil
        }, {
          id: 2,
          value: marvelousMixMint
        }, {
          id: 3,
          value: vulgareOregano
        }, {
          id: 4,
          value: commonArugula
        }
      ]
    }
    this.insertAmount = this
      .insertAmount
      .bind(this);
  }
  
  insertAmount(seed) {
    this.setState({amount: (
       <AmountField selectedName= {seed}></AmountField>

      )})
  }
  render() {
    return (
      <div className="seedDrop">
        <DropDown
        items = {this.state.plants} insertAmount = {(s)=>{this.insertAmount(s)}}
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
      selectedRect: selectedRect,
      seedList: [],
      key: 0,
    }

    this.handleSelection = this.handleSelection.bind(this);
  }
  handleSelection(){
    this.setState({
      selectedRect: selectedRect
    })
    
  }
  componentDidMount(){
    console.log("mounted")
    document.addEventListener("newSelection",this.handleSelection)
  }
  componentDidUpdate(){
    console.log("new selection: ")
    console.log(this.state.selectedRect);
    console.log("the selected bedding has these plants: ")
    console.log(this.state.selectedRect.seeds)
    // this.setState({
    //   seedList: this
    //     .state
    //     .seedList
    //     .concat( < SeedDropDown key = {
    //       this.state.key
    //     } > </SeedDropDown>),
    //   key: this.state.key + 1
    // })
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
    console.log(this.props.pselectedRect)
    return (
      <div id="seedTab">
        <div id="seedTabHint">{this.state.selectedRect.soil}</div>
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

var timeInfo = <SideBarContent title="Schedule"/>;
var moreInfo = <SideBarContent title="Extensions"/>;
