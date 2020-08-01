import React, { useState } from 'react';
const FoodItem = (props: { key: number; name: string, deleteItem: (id: number) => void; }) => {
  const { key } = props;
  return <div>{props.name}<button type="button" onClick={() => {
    console.log(key);

  }}>delete</button></div>;
};
export default FoodItem;
