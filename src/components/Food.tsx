import React, { useState } from 'react';
import FoodForm from './FoodForm';
// import FoodList from './FoodList';

const Food = () => {
  const [data, setData] = useState('');

  const createList = (data: string) => {

  }

  return (
    <>
      <FoodForm setData={setData}/>
      {/* <FoodList /> */}
    </>
  );
}

export default Food;