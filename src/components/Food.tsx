import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

class Food extends Component {
  id = 0
  state = {
    information: [],
  };

  createItem = (inputData: string) => {
    const { information } = this.state;
    const item: any[] = information;
    if (inputData) {
      item.push({ id: this.id++, name: inputData });
      this.setState({
        information: item,
      });
    }
  };

  deleteAllItem = () => {
    this.setState({
      information: []
    });
  };
  render() {
    return (
      <>
        <FoodForm createList={this.createItem} deleteAllItem={this.deleteAllItem} />
        <FoodList data={this.state.information} />
      </>
    );
  }
}

export default Food;
