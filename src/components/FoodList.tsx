import React, { useState } from 'react';
import FoodItem from './FoodItem';

const FoodList = (props: {
  data: object[];
  select: number;
  updataItem: (id: number, name: string) => void;
  deleteItem: (id: number) => void;
}) => {
  const { data, select, updataItem, deleteItem } = props;
  const list = data.map((item: any, key: number) => {
    return (
      <FoodItem
        key={item.id}
        id={item.id}
        name={item.name}
        updataItem={updataItem}
        deleteItem={deleteItem}
        select={select === key ? 'on' : ''}
      />
    );
  });
  return <div className="list">{list}</div>;
};

export default FoodList;
