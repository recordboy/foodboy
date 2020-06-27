import React, { useState } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

const Food = () => {
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState('');
  const createList = (inputData: string) => {
    


    inputData && setDataList(inputData);
    console.log(inputData);

    
  }
  return (
    <>
      <FoodForm inputData={inputData} setInputData={setInputData} createList={createList} />
      {/* <FoodList list={list} /> */}
    </>
  );
}

export default Food;