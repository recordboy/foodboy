import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';


// interface DispatchProps {
//   aa: string
// }

function split(str: string): string[] {
  return str.split('');
}

class Food extends Component {

  state = {
    na: ''
  }
  



  render() {
    return (
      <>
        <FoodForm />
        <FoodList />
      </>
    )
  }
}

export default Food;