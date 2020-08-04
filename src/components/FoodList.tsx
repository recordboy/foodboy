import React, { useState } from 'react';
import FoodItem from './FoodItem';

const FoodList = (props: {
  data: object[];
  // selectPointer: number[];
  disabled: boolean;
  updataItem: (id: number, name: string) => void;
  deleteItem: (id: number) => void;
}) => {
  const { data, /* selectPointer, */ disabled, updataItem, deleteItem } = props;
  const list = data.map((item: any, key: number) => {
    return (
      <FoodItem
        key={item.id}
        id={item.id}
        name={item.name}
        // selectOn={
        //   selectPointer[0] === key || selectPointer[1] === key ? 'on' : ''
        // }
        disabled={disabled}
        updataItem={updataItem}
        deleteItem={deleteItem}
      />
    );
  });
  return <div className="list">{list}</div>;
};

export default FoodList;
