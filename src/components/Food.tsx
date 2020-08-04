import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

let countObj: any = null;
let countNum: number = 0;
let selectCountNum: number = 0;
let randomNum: number = 0;

class Food extends Component {
  state = {
    id: 0,
    // selectPointer: [],
    disabled: false,
    information: [
      {
        id: 0,
        name: 'a',
      },
      {
        id: 1,
        name: 'b',
      },
      {
        id: 2,
        name: 'c',
      },
      {
        id: 3,
        name: 'd',
      },
    ],
  };

  createItem = (inputData: string) => {
    const { information } = this.state;
    const item: any[] = information;
    if (inputData === '') {
      alert('값이 없음');
      return;
    }
    item.push({ id: this.state.id++, name: inputData });
    this.setState({
      information: item,
    });

  };

  updataItem = (id: number, name: string) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info: any) =>
        info.id === id ? { id: id, name } : info
      ),
    });
  };

  deleteItem = (id: number) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info: any) => info.id !== id),
    });
  };

  deleteAllItem = () => {
    this.setState({
      id: 0,
      information: [],
    });
  };

  randomMix = () => {
    const { information } = this.state;
    let random: number[] = [];
    let data: any[] = information;
    let finalData: any[] = [];
    random = this.shuffle(information.map((info: any) => info.id));
    for (let i = 0; i < random.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (random[i] === data[j].id) {
          finalData.push(data[j]);
        }
      }
    }
    this.setState({
      information: finalData,
    });
  };

  shuffle = (data: number[]) => {
    let j, x, i;
    for (let i = data.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = data[i - 1];
      data[i - 1] = data[j];
      data[j] = x;
    }
    return data;
  };

  randomSelect = () => {
    const { information } = this.state;
    randomNum = Math.floor(Math.random() * information.length);
    this.countStart();
    console.log('result index : ' + randomNum);
  };

  countStart = () => {
    const { information } = this.state;
    countNum = 0;
    selectCountNum = randomNum;
    this.countPointerMove(100, information.length);
    this.setState({
      disabled: true,
    });
  };

  countPointerMove = (spped: number, listLength: number) => {
    const { information } = this.state;
    // const selectPointerNum = Math.floor(information.length / 2);

    countObj = setInterval(() => {
      const selectNum: number[] = [];
      console.log('waiting');
      // for (let i = 0; i < selectPointerNum; i++) {
      //   selectNum.push(Math.floor(Math.random() * information.length));
      // }
      // this.setState({
      //   selectPointer: selectNum,
      // });
    }, spped);
    setTimeout(() => {
      clearInterval(countObj);
      this.setState({
        disabled: false,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        <FoodForm
          disabled={this.state.disabled}
          createList={this.createItem}
          deleteAllItem={this.deleteAllItem}
          randomMix={this.randomMix}
          randomSelect={this.randomSelect}
        />
        <FoodList
          data={this.state.information}
          // selectPointer={this.state.selectPointer}
          disabled={this.state.disabled}
          deleteItem={this.deleteItem}
          updataItem={this.updataItem}
        />
      </>
    );
  }
}

export default Food;
