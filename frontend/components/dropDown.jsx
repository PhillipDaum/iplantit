class DropDown extends React.Component {
    state = {
      items: this.props.items || [],
      showItems: false,
      selectedItem: this.props.items && this.props.items[0]
    };
  
    dropDown = () => {
      this.setState(prevState => ({
        showItems: !prevState.showItems
      }));
    };
  
    selectItem = item => {
      this.setState({
        selectedItem: item,
        showItems: false
      });
    };
  
    render() {
      return (
        <div className="dropDown--box" onClick={this.props.onClick}>
          <div className="dropDown--container">
            <div className="dropDown--selected-item">
              {this.state.selectedItem.value}
              <div className="dropDown--arrow" onClick={this.dropDown}>
              <span
                className={`${
                  this.state.showItems
                    ? "dropDown--arrow-up"
                    : "dropDown--arrow-down"
                }`}
              />
            </div>
            </div>
            
  
            <div
              style={{ display: this.state.showItems ? "block" : "none" }}
              className={"dropDown--items"}
            >
              {this.state.items.map(item => (
                <div
                  key={item.id}
                  onClick={() => this.selectItem(item)}
                  className={this.state.selectedItem === item ? "selected" : ""}
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }