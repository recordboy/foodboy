import React, { useState } from 'react';
import FoodForm from './FoodForm';
// import FoodList from './FoodList';

const Food = () => {
  const [inputData, setInputData] = useState('');
  const [data, setData] = useState('')

}

return (
  <>
    <FoodForm inputData={inputData} setInputData={setInputData} setData={setData} />
    {/* <FoodList /> */}
  </>
);
}

export default Food;