import React, { useState } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

const list: string[] = [];

const Food = () => {
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState();
  const createList = (inputData: string) => {
    
    if (inputData) {
      list.push(inputData);
      // list.forEach((item: any) => {
      //   const a: any = item;
      // })
      console.log(list);
    }
  }
  return (
    <>
      <FoodForm inputData={inputData} setInputData={setInputData} createList={createList} />
      {/* <FoodList a={a} /> */}
    </>
  );
}

export default Food;