import React, { useState } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

const list: string[] = [];
const dropList: string[] = [];

const Food = () => {
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState();
  const createList = (inputData: string) => {
    if (inputData) {
      list.push(inputData);
    }
  }
  return (
    <>
      <FoodForm inputData={inputData} setInputData={setInputData} createList={createList} />
      <ul>
      </ul>
      <FoodList dropList={list} />
    </>
  );
}

export default Food;