import React, { useState } from 'react';
const FoodForm = (props: {
  inputData: string,
  setInputData: (data: string) => void;
  createList: (data: string) => void;
}) => {
  const { inputData, setInputData,
    createList } = props;
  return (
    <div className="header">
      <input type="text" id="input-txt" className="inputTxt" value={inputData} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
      }} />
      <div className="btnArea">
        <button type="button" onClick={() => {
          createList(inputData);
          setInputData("");
        }}>add</button>
        <button type="button" id="btn-all-del" className="btnAllDel">all delete</button>
        <button type="button" id="btn-mix" className="btnMix">mix</button>
        <button type="button" id="btn-select" className="btnSelect">select</button>
      </div>
    </div>
  )
}

export default FoodForm;







