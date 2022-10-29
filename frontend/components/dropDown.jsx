class DropDown extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: {
      value: dummy,
      id: -1
    },
    checkPlantColor: () => {
      console.log("background should be red")
    }
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({selectedItem: item, showItems: false});
    this.props.insertAmount(item.value.name);
  };

  render() {
    return (
      <div className="dropDown--box">
        <div className="dropDown--container">
          <div className="dropDown--selected-item">
            {this.state.selectedItem.value.name}
            <div className="dropDown--arrow" onClick={this.dropDown}>
              <span
                className={`${this.state.showItems
                ? "dropDown--arrow-up"
                : "dropDown--arrow-down"}`}/>
            </div>
          </div>

          <div
            style={{
            display: this.state.showItems
              ? "block"
              : "none"
          }}
            className={"dropDown--items"}>
            {this
              .state
              .items
              .map(item => {
                let color = "red";
                if (item.id % 2 == 0) {
                  color = "green"
                }
                //item.checkRecommendation();
                return (
                  <div
                    key={item.id}
                    onClick={() => this.selectItem(item)}
                    className={this.state.selectedItem === item
                    ? "selected"
                    : ""}
                    style={{
                    backgroundColor: color
                  }}>
                    {item.value.name}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

class AmountField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant: ""
    }
  }
  
  editSeedMap(amount){
    console.log(this.props.selectedName)
    selectedRect.seeds[this.props.selectedName]=amount
    console.log(selectedRect.seeds)
  }

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <p style={{
          fontSize: "8px"
        }}>Enter plant amount</p>
        <input type="number" onChange={(e)=>{this.editSeedMap(e.target.value)}}></input>
      </div>
    )
  }
}