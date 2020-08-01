import React, { useState } from 'react';
import FoodItem from './FoodItem';

const FoodList = (props: { data: object[], deleteItem: (id: number) => void; }) => {
  const { data, deleteItem } = props;
  const list = data.map((item: any) => {
    return <FoodItem key={item.id} name={item.name} deleteItem={deleteItem} />;
  });
  return <div className="list">{list}</div>;
};

export default FoodList;
