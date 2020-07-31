import React, { useState } from 'react';
const FoodItem = (props: { key: number; name: string }) => {
  return <div>{props.name}</div>;
};
export default FoodItem;
