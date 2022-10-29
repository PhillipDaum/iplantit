class DropDown extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: {
      value: plantMap[this.props.plantName],
      id: plantMap[this.props.plantName].pid
    }
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({selectedItem: item, showItems: false});
    console.log(selectedRect.seeds[item.value.name])
    this.props.insertAmount(item.value.name,selectedRect.seeds[item.value.name]);
  };



  render() {
    return (
      <div className="dropDown--box">
        <div className="dropDown--container">
          <div className="dropDown--selected-item"onClick={this.dropDown}>
            {this.state.selectedItem.value.name}
            <div className="dropDown--arrow" >
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
                // item = {value: plant, id: plant.pid}
                let color = "red";
                if (item.id % 2 == 0) {
                  color = "green"
                }
                // Check recommendation
                // plant: item.value
                // currentBedding: selectedRect
                // remove plant item if selected
                if(selectedRect.seeds[item.value.name]!=0){
                  return
                }
                return (
                  <div
                    key={item.id}
                    onClick={() => this.selectItem(item)}
                    className={this.state.selectedItem === item
                    ? "dropDown--selected"
                    : "dropDown--unselected"}
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
      plant: "",
      currAmount: this.props.currAmount,
      color: "white"
    }
  }
  componentDidMount(){

  }
  componentDidUpdate(){
    console.log("amount field is updated")
  }
  editSeedMap(amount){
    selectedRect.seeds[this.props.selectedName]=amount
    console.log("seed amount updated")
    console.log(selectedRect.seeds)
    this.setState({
      currAmount: amount
    })
    if(amount>20){
      this.setState({
        color:"red"
      })
    } else {
      this.setState({
        color:"white"
      })
    }
  }

  render() {
    return (
      <div className="amountFieldWrapper">
        <p style={{
          fontSize: "8px"
        }}>Enter plant amount</p>
        <input type="number" onChange={(e)=>{this.editSeedMap(e.target.value)} } className="amountInputField"style={{backgroundColor: this.state.color}}value = {this.state.currAmount}></input>
      </div>
    )
  }
}