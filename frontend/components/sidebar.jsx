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
        <button className="btn" onClick={()=>
            console.log("hello")
        }> <i className="fa fa-circle-plus"></i></button>
    </div>

  )
}

var beddingInfo = <SideBarContent title="Bedding"/>;
var seedInfo = <SideBarContent title="Seeds">
  <AddSeed></AddSeed>
</SideBarContent>;
var timeInfo = <SideBarContent title="Schedule"/>;
var moreInfo = <SideBarContent title="Extensions"/>;
