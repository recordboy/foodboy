import React, { useState } from 'react';

const FoodForm = () => {
  const [data, setData] = useState('');\
  return (
    <div className="header">
      <input type="text" id="input-txt" className="inputTxt" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
      }} />

      <div className="btnArea">
        <button type="button" onClick={() => {
          // setData(1);
          // console.log(e.target)
        }}>add</button>
        <button type="button" id="btn-all-del" className="btnAllDel">all delete</button>
        <button type="button" id="btn-mix" className="btnMix">mix</button>
        <button type="button" id="btn-select" className="btnSelect">select</button>
      </div>
    </div>
  )
}

export default FoodForm;







