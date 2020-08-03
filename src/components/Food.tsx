import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

let countObj: object = {};
let countNum: number = 0;

class Food extends Component {
  state = {
    id: 0,
    select: -1,
    information: [],
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
    const randomNum: number = Math.floor(Math.random() * information.length);
    this.setState({
      select: randomNum,
    });
    this.countPoint();
    console.log('result index : ' + randomNum);
  };

  countPoint = () => {
    const { information } = this.state;
    this.countMove(50, information.length);
    if (countNum > 50) {
      // clearInterval(countObj);
      // this.countMove(500, information.length);
    } else if (countNum > 999999) {
    }
  };

  countMove = (spped: number, listLength: number) => {
    let selectCount = 0;
    countObj = setInterval(() => {
      countNum++;
      selectCount++;
      if (selectCount >= listLength) {
        selectCount = 0;
      }
      this.setState({
        select: selectCount,
      });
    }, spped);
  };

  render() {
    return (
      <>
        <FoodForm
          createList={this.createItem}
          deleteAllItem={this.deleteAllItem}
          randomMix={this.randomMix}
          randomSelect={this.randomSelect}
        />
        <FoodList
          data={this.state.information}
          select={this.state.select}
          deleteItem={this.deleteItem}
          updataItem={this.updataItem}
        />
      </>
    );
  }
}

export default Food;
