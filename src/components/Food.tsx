import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';
import FoodMap from './FoodMap';

let countObj: any = null;
let countIdx: number = 0;
let randomNum: number = 0;
let countMsgNum: number = 0;
let dataIdArr: number[] = [];
let dataId: number = 0;
let data: any = '';

countMsgNum = Math.floor((data.length * -10) * -10 * 0.005);
if (localStorage.getItem('data') !== null) {
  data = localStorage.getItem('data');
  data = JSON.parse(data);
  dataIdArr = data.map((item: any) => {
    return item.id;
  });
  dataIdArr.length !== 0
    ? (dataId = Math.max.apply(null, dataIdArr) + 1)
    : (dataId = 0);
} else {
  data = [];
  dataId = 0;
}

class Food extends Component {
  state = {
    id: dataId,
    on: '',
    countId: -1,
    disabled: false,
    information: data,
  };

  createItem = (inputData: string) => {
    const { information } = this.state;
    const item: {
      id: number;
      name: string;
    }[] = information;
    if (inputData === '') {
      alert('값이 없음');
      return;
    }
    item.push({ id: this.state.id++, name: inputData });
    this.setState(
      {
        information: item,
      },
      () => {
        localStorage.setItem('data', JSON.stringify(this.state.information));
        // countMsgNum = Math.floor((information.length * -10) * -10 * 0.005);
      }
    );
  };

  updataItem = (id: number, name: string) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        (info: { id: number; name: string; }) =>
          info.id === id ? { id: id, name } : info
      ),
    });
  };

  deleteItem = (id: number) => {
    const { information } = this.state;
    this.setState(
      {
        information: information.filter(
          (info: { id: number; name: string; }) => info.id !== id
        ),
      },
      () => {
        localStorage.setItem('data', JSON.stringify(this.state.information));
        // countMsgNum = Math.floor((information.length * -10) * -10 * 0.005);
      }
    );
  };

  deleteAllItem = () => {
    const { information } = this.state;
    this.setState(
      {
        id: 0,
        information: [],
      },
      () => {
        localStorage.setItem('data', JSON.stringify(this.state.information));
        // countMsgNum = Math.floor((information.length * -10) * -10 * 0.005);
      }
    );
  };

  randomMix = () => {
    const { information } = this.state;
    let random: number[] = [];
    let data: {
      id: number;
      name: string;
    }[] = information;
    let finalData: {
      id: number;
      name: string;
    }[] = [];
    random = this.shuffle(
      information.map(
        (info: { id: number; name: string; }) => info.id
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
    this.countPointerMove(50, information.length);
    this.setState({
      on: 'on',
      disabled: true,
    });
  };

  countPointerMove = (spped: number, listLength: number) => {
    const { information } = this.state;
    const data: {
      id: number;
      name: string;
      on: boolean;
    }[] = information;
    let countNum: number = listLength * -10;
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
          // countMsgNum = Math.floor((information.length * -10) * -10 * 0.005);
          alert(data[randomNum].name);
        }, 500);
      }
      this.setState({
        countId: data[countIdx].id,
      });
      this.countMsg(countNum);
    }, spped);
  };

  countMsg = (countNum: number) => {
    countMsgNum = Math.floor(countNum * -10 * 0.005);
  };

  render() {
    return (
      <div className={this.state.on}>
        <FoodMap
          createList={this.createItem}
        />
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
