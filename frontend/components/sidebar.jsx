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
          id: sweetBasil.pid,
          value: sweetBasil
        }, {
          id: marvelousMixMint.pid,
          value: marvelousMixMint
        }, {
          id: vulgareOregano.pid,
          value: vulgareOregano
        }, {
          id: commonArugula.pid,
          value: commonArugula
        }, {
          id: detroitDarkRedBeet.pid,
          value: detroitDarkRedBeet
        }, {
          id: goldenDetroitBeet.pid,
          value: goldenDetroitBeet
        }, {
          id: greenFortune.pid,
          value: greenFortune
        }, {
          id: prizeChoy.pid,
          value: prizeChoy
        },{
          id: greenSprouting.pid,
          value: greenSprouting
        }, {
          id: longIslandImproved.pid,
          value: longIslandImproved
        }
      ]
    }
    this.insertAmount = this
      .insertAmount
      .bind(this);
  }

  insertAmount(seed, num, origSpace) {
    this.setState({amount: (
        <AmountField selectedName={seed} currAmount={num} origSpace={origSpace} ></AmountField>
      )})
  }
  componentDidMount() {
    if (this.props.amount != 0) {
      this.insertAmount(this.props.plantName, this.props.amount)
    }
  }
  render() {

    return (
      <div className="seedDrop">
        <DropDown
          items={this.state.plants}
          insertAmount=
          {(s, n, o)=>{this.insertAmount(s,n,o)}}
          plantName={this.props.plantName}/> {this.state.amount}
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
      key: 0
    }

    this.handleSelection = this
      .handleSelection
      .bind(this);
  }
  handleSelection() {
    this.setState({selectedRect: selectedRect})
    this.state.seedList = []
    if (selectedRect != "") {
      this.addPlant2(selectedRect)
    }

  }
  componentDidMount() {
    document.addEventListener("newSelection", this.handleSelection)
    
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("new selection: ")
    console.log(this.state.selectedRect);
    console.log("the selected bedding has these plants: ")
    console.log(this.state.selectedRect.seeds)
    console.log("seed list")
    console.log(this.seedList)
  }
  addPlant() {
    
    this.setState({
      seedList: this
        .state
        .seedList
        .concat( < SeedDropDown key = {
          this.state.key
        }
        plantName = "Select Plant" amount = {
          0
        } > </SeedDropDown>),
      key: this.state.key + 1
    });
  }
  addPlant2(bedding) {

    let key = 0;

    for (const [plantName,
      amount]of Object.entries(bedding.seeds)) {
      if (amount > 0) {
        this
          .state
          .seedList
          .push( < SeedDropDown key = {
            key
          }
          plantName = {
            plantName
          }
          amount = {
            amount
          } > </SeedDropDown>)
        key++;
      }
    }

    this.setState({key: key})
  }
  render() {

    return (
      <div id="seedTab">
        <div id="seedTabHint">{this.state.selectedRect == ""
            ? "Please Select a bedding"
            : "Add seed to the bedding"}</div>
        <div className="planted">
          {this.state.seedList}
        </div>
        <button
          className="btn"
          onClick={() => this.addPlant()}
          disabled={this.state.selectedRect == ""}
          style={{
          backgroundColor: this.state.selectedRect == ""
            ? "gray"
            : "#36AD89",
          pointerEvents: this.state.selectedRect == ""
            ? "none"
            : "auto"
        }}>
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
