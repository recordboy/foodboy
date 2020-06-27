import React, { useState } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

const Food = () => {
  const [inputData, setInputData] = useState('');

  const list: string[] = [];
 
 
 
 
  const createList = () => {
    if (inputData) {
      list.push(inputData);

    }
    console.log(list);
  }
  
  

  return (
    <>
      <FoodForm inputData={inputData} setInputData={setInputData} createList={createList} />
      <div></div>
      <FoodList />
    </>
  );
}

export default Food;