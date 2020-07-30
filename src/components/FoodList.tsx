import React, { useState } from 'react';

const FoodList = (props: {
  list: string[];
}) => {

  const { list } = props;
  return (
    <ul>{list}</ul>
  );
}

export default FoodList;