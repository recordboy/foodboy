import React, { Component } from 'react';

class FoodForm extends Component {
  
  handleAdd = () => {
    console.log(1)
  }


	render() {
		return (
			<div className="header">
				<input type="text" id="input-txt" className="inputTxt" />
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