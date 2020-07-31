import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

class Food extends Component {
  id = 0;
  state = {
    information: [{}],
  };

  createList = (inputData: string) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, name: inputData }),
    });

    console.log(information);
  };
  deleteList = () => { };
  render() {
    return (
      <>
        <FoodForm createList={this.createList} />
        {/* <FoodList data={info} /> */}
      </>
    );
  }
}

// let id = 0;
// const info: object[] = [];
// const Food = () => {
//   const [list, setList] = useState([{}]);
//   const createList = (inputData: string) => {
//     if (inputData) {
//       info.push({ id: id++, inputData });
//       setList(info);
//       console.log(info);
//     }
//   };
//   const deleteList = () => {};
//   return (
//     <>
//       <FoodForm createList={createList} deleteList={deleteList} />
//       <FoodList data={info} />
//     </>
//   );
// };

export default Food;
