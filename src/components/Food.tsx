import React, { useState } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

const Food = () => {
  const [data, setData] = useState('');

  return (
    <>
      <FoodForm />
      <FoodList />
    </>
  );
}

export default Food;