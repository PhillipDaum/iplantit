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

function Bedding(props) {
  return (
    <div id="bedding">
      <div className="dimensionInput">
        <label className="beddingField" htmlFor="widthInput">Width (m):</label>
        <input type="text" className="dimensionInputField" name="widthInput"></input>
      </div>
      <div className="dimensionInput">
        <label className="beddingField" htmlFor="heightInput">Height (m):</label>
        <input type="text" className="dimensionInputField" name="widthInput"></input>
      </div>

    </div>
  );
}

var beddingInfo = <SideBarContent title="Bedding">
  <Bedding></Bedding>

</SideBarContent>;
var seedInfo = <SideBarContent title="Seeds">
  <AddSeed></AddSeed>
</SideBarContent>;
var timeInfo = <SideBarContent title="Schedule"/>;
var moreInfo = <SideBarContent title="Extensions"/>;
