import React, { useState } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

let id = 0;
const info: object[] = [];
const Food = () => {
  const [list, setList] = useState([{}]);
  const createList = (inputData: string) => {
    if (inputData) {
      info.push({ id: id++, inputData });
      setList(info);
      console.log(info);
    }
  };
  const deleteList = () => {};
  return (
    <>
      <FoodForm createList={createList} deleteList={deleteList} />
      <FoodList data={info} />
    </>
  );
};

export default Food;
