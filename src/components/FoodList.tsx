import React, { useState } from 'react';
import FoodItem from './FoodItem';

const FoodList = (props: { data: object[] }) => {
  const { data } = props;
  const list = data.map((item: any) => {
    return <FoodItem key={item.id} name={item.inputData} />;
  });
  return <div className="list">{list}</div>;
};

export default FoodList;
