import React, { useState } from 'react';
import FoodItem from './FoodItem';

const FoodList = (props: {
  countId: number;
  data: object[];
  disabled: boolean;
  updataItem: (id: number, name: string) => void;
  deleteItem: (id: number) => void;
}) => {
  const { data, disabled, updataItem, deleteItem, countId } = props;
  const list = data.map((item: any, key: number) => {
    return (
      <FoodItem
        key={item.id}
        id={item.id}
        name={item.name}
        selectOn={countId === item.id ? 'on' : ''}
        disabled={disabled}
        updataItem={updataItem}
        deleteItem={deleteItem}
      />
    );
  });
  return <div className="list">{list}</div>;
};

export default FoodList;
