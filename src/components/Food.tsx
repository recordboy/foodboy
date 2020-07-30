import React, { useState } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

const list: string[] = [];



const Food = () => {
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState();
  const id = 0;

  const createList = (inputData: string) => {
    if (inputData) {
      list.push(inputData);
    }
  }
  return (
    <>
      <FoodForm inputData={inputData} setInputData={setInputData} createList={createList} />
      <FoodList list={list} />
    </>
  );
}

export default Food;