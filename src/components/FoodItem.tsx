import React, { useState } from 'react';
const FoodItem = (props: { id: number; name: string, deleteItem: (id: number) => void; }) => {
  const { id, deleteItem } = props;
  return <div>{props.name}<button type="button" onClick={() => {
    deleteItem(id);
  }}>delete</button></div>;
};
export default FoodItem;
