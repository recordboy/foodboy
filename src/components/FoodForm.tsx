import React, { Component } from 'react';

class FoodForm extends Component {

  state = {
    item: ''
  }

  handleAdd = (e: any) => {
    console.log(this.state.item)
    console.log(this.props)
  }

  handleData = (e: any) => {
    this.setState({
      item: e.target.value
    });
  }

  render() {
    return (
      <div className="header">
        <input type="text" id="input-txt" className="inputTxt" onChange={this.handleData} />
        <div className="btnArea">
          <button type="button" onClick={this.handleAdd}>add</button>
          <button type="button" id="btn-all-del" className="btnAllDel">all delete</button>
          <button type="button" id="btn-mix" className="btnMix">mix</button>
          <button type="button" id="btn-select" className="btnSelect">select</button>
        </div>
      </div>
    )
  }

}

export default FoodForm;