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
    // calculate remaining spacing
    
    this.props.insertAmount(item.value.name,selectedRect.seeds[item.value.name],selectedRect.availableSpace);
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
                let red =  "#ff7961"
                let green = "#c8e6c9"
                let color = red;
                
                // Check recommendation
                // plant: item.value
                // currentBedding: selectedRect
                // 1. remove plant item if selected
                if(selectedRect.seeds[item.value.name]!=0){
                  return
                }
                // 2. mark plant as red if not in the hardiness zone
                let hardinessZone = parseInt(hardinessInfo.zone.substring(0,1))
                if(item.value.hardinessZoneStart <= hardinessZone && item.value.hardinessZoneEnd >= hardinessZone) {
                  // 3. mark plant as red if avoid > companion
                  let companions = item.value.companions
                  let avoid = item.value.avoid
                  let currPlants = selectedRect.seeds
                  
                  let avoidCount = 0
                  let companionCount = 0

                  for (const [plantName, amount] of Object.entries(currPlants)) {
                    if(companions.includes(plantMap[plantName].category )){
                      companionCount+=amount
                    } else if(avoid.includes(plantMap[plantName].category )){
                      avoidCount+=amount
                    }
                  }

                  if(avoidCount>companionCount) {
                    color = red
                  } else {
                    color = green
                  }
                } else {
                  color = red
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
      color: "white",
      origSpace: this.props.origSpace
    }
  }
  componentDidMount(){

  }
  componentDidUpdate(){
    console.log("amount field is updated")
    console.log(this.state)
  }
  editSeedMap(amount){
    selectedRect.seeds[this.props.selectedName]=amount
    console.log("seed amount updated")
    console.log(selectedRect.seeds)
    
    selectedRect.availableSpace = this.state.origSpace - amount*plantMap[this.props.selectedName].spacing
    console.log(this.state.origSpace)
    console.log("selectedRect.availableSpace")
    console.log(selectedRect.availableSpace)
    this.setState({
      currAmount: amount
    })
    if(selectedRect.availableSpace<0){
      this.setState({
        color:"#ff7961"
      })
      selectedRect.set({fill : "rgba(255,0,0,0.5)"})
      canvas.renderAll()
    } else {
      this.setState({
        color:"white"
      })
      selectedRect.set({fill : "rgba(115,221,0,0.5)"})
      canvas.renderAll()
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