import React, { useState } from 'react';
import FoodForm from './FoodForm';
// import FoodList from './FoodList';

const Food = () => {
  const [inputData, setInputData] = useState('');
  const [list, setList] = useState('');
  const createList = () => {
    setList(inputData);
    console.log(list);
  }
  return (
    <>
      <FoodForm inputData={inputData} setInputData={setInputData} createList={createList} />
      {/* <FoodList list={list} setList={setList} /> */}
    </>
  );
}

export default Food;