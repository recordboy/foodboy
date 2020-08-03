
import React, { useState } from 'react';

const FoodForm = (props: {
  createList: (data: string) => void;
  deleteAllItem: () => void;
  randomMix: () => void;
  randomSelect: () => void;
}) => {
  const { createList, deleteAllItem, randomMix, randomSelect } = props;
  const [inputData, setInputData] = useState('');
  return (
    <div className="search">
      <input
        type="text"
        id="input-txt"
        className="inputTxt"
        value={inputData}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputData(e.target.value);
        }}
      />
      <div className="btnArea">
        <button
          type="button"
          onClick={() => {
            createList(inputData);
            setInputData('');
          }}
        >
          add
        </button>
        <button
          type="button"
          onClick={() => {
            deleteAllItem();
          }}
        >
          all delete
        </button>
        <button
          type="button"
          onClick={() => {
            randomMix();
          }}
        >
          mix
        </button>
        <button
          type="button"
          onClick={() => {
            randomSelect();
          }}
        >
          select
        </button>
      </div>
    </div>
  );
};

export default FoodForm;
