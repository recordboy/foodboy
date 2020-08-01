import React, { useState } from 'react';
const FoodItem = (props: { key: number; name: string }) => {
  return <div>{props.name}<button type="button">delete</button></div>;
};
export default FoodItem;
