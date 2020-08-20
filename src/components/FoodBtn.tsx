import React, { useState } from 'react';

const FoodBtn = (props: { setSearchItem: (item: string) => void }) => {
  const { setSearchItem } = props;
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={(e) => {
            setSearchItem('식당');
          }}
        >
          식당
        </button>
        <button type="button">술집</button>
        <button type="button">카페</button>
        <button type="button">편의점</button>
        <button type="button">관광명소</button>
        <button type="button">숙박</button>
      </div>
      <div>
        <input type="text" placeholder="직접 입력" />
        <button type="button">검색</button>
      </div>
    </div>
  );
};

export default FoodBtn;
