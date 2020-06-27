import React, { useState } from 'react';

const FoodList = (props: {
  list: string[];
}) => {
  const { list } = props;
  console.log(list);
  return (
  <ul></ul>
  );
}

export default FoodList;