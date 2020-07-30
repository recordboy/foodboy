import React, { useState } from 'react';

const FoodList = (props: {
  dropList: string[];
}) => {
  const { dropList } = props;
  return (
    <ul>{dropList}</ul>
  );
}

export default FoodList;