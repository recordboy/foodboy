import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

const time: number = 5;

let countObj: any = null;
let countIdx: number = 0;
let randomNum: number = 0;
let countMsgObj: any = null;
let countMsgNum: number = 0;

class Food extends Component {
  state = {
    id: 4,
    on: '',
    countId: -1,
    disabled: false,
    information: [
      {
        id: 0,
        name: 'a',
        on: false,
      },
      {
        id: 1,
        name: 'b',
        on: false,
      },
      {
        id: 2,
        name: 'c',
        on: false,
      },
      {
        id: 3,
        name: 'd',
        on: false,
      },
    ],
  };

  createItem = (inputData: string) => {
    const { information } = this.state;
    const item: {
      id: number;
      name: string;
      on: boolean;
    }[] = information;
    if (inputData === '') {
      alert('값이 없음');
      return;
    }
    item.push({ id: this.state.id++, name: inputData, on: false });
    this.setState({
      information: item,
    });
  };

  updataItem = (id: number, name: string) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        (info: { id: number; name: string; on: boolean }) =>
          info.id === id ? { id: id, name } : info
      ),
    });
  };

  deleteItem = (id: number) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(
        (info: { id: number; name: string; on: boolean }) => info.id !== id
      ),
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
    let data: {
      id: number;
      name: string;
      on: boolean;
    }[] = information;
    let finalData: {
      id: number;
      name: string;
      on: boolean;
    }[] = [];
    random = this.shuffle(
      information.map(
        (info: { id: number; name: string; on: boolean }) => info.id
      )
    );
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
    countIdx = randomNum;
    this.countPointerMove(25, information.length);
    this.setState({
      on: 'on',
      disabled: true,
    });
  };

  countPointerMove = (spped: number, listLength: number) => {
    const { information } = this.state;
    let countNum: number = listLength * -30;
    countObj = setInterval(() => {
      countNum++;
      countIdx++;
      if (countIdx >= listLength) {
        countIdx = 0;
      }
      if (countNum >= 0) {
        clearInterval(countObj);
        this.setState({
          on: '',
          disabled: false,
        });
        setTimeout(() => {
          alert(this.state.information[randomNum].name);
        }, 500);
      }
      this.setState({
        countId: information[countIdx].id,
      });
      this.countMsg(countNum);
    }, spped);
  };

  countMsg = (countNum: number) => {
    countMsgNum = Math.floor(countNum * -30 * 0.001);
  };

  render() {
    return (
      <div className={this.state.on}>
        <FoodForm
          disabled={this.state.disabled}
          createList={this.createItem}
          deleteAllItem={this.deleteAllItem}
          randomMix={this.randomMix}
          randomSelect={this.randomSelect}
        />
        <FoodList
          data={this.state.information}
          disabled={this.state.disabled}
          deleteItem={this.deleteItem}
          updataItem={this.updataItem}
          countId={this.state.countId}
        />
        {this.state.disabled && (
          <span className="count">
            {/* {this.state.information[countIdx].name} */}
            <span>{countMsgNum}</span>
          </span>
        )}
      </div>
    );
  }
}

export default Food;
