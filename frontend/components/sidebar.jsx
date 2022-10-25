class SideBarContent extends React.Component {
  render() {
    return (
      <div className="sidebar-content">
        <p>{this.props.title}</p>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function AddSeed(props) {
  return (
    <div>
      <button className="btn" onClick={() => console.log("hello")}>
        <i className="fa fa-circle-plus"></i>
      </button>
    </div>

  )
}

function BeddingSideBar(props) {
  return (
    <div id="bedding">
      <div className="dimensionInput">
        <label className="beddingField" htmlFor="widthInput" >Width (m):</label>
        <input type="text" className="dimensionInputField" id="widthInput" name="widthInput" onChange={e => modifyRectDimension(e.target.value,-1)}></input>
      </div>
      <div className="dimensionInput">
        <label className="beddingField" htmlFor="heightInput">Height (m):</label>
        <input type="text" className="dimensionInputField" id="heightInput" name="heightInput" onChange={e => modifyRectDimension(-1,e.target.value)}></input>
      </div>
      <button className="btn" onClick={() => drawBedding()}>
        <i id="addIcon"className="fa fa-circle-plus fa-2x"></i>
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
