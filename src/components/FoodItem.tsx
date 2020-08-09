import React, { useState } from 'react';

const FoodItem = (props: {
  id: number;
  name: string;
  selectOn: string;
  disabled: boolean;
  updataItem: (id: number, name: string) => void;
  deleteItem: (id: number) => void;
}) => {
  const { id, selectOn, disabled, updataItem, deleteItem } = props;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(props.name);

  if (editing) {
    return (
      <div className={selectOn}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          type="button"
          className="apply"
          disabled={disabled ? true : false}
          onClick={() => {
            setEditing(!editing);
            updataItem(id, name);
          }}
        >
          apply
        </button>
        <button
          type="button"
          className="delete"
          disabled={disabled ? true : false}
          onClick={() => {
            deleteItem(id);
          }}
        >
          delete
        </button>
      </div>
    );
  }

  return (
    <div className={selectOn}>
      {name}
      <button
        type="button"
        className="modify"
        disabled={disabled ? true : false}
        onClick={() => {
          setEditing(!editing);
        }}
      >
        modify
      </button>
      <button
        type="button"
        className="delete"
        disabled={disabled ? true : false}
        onClick={() => {
          deleteItem(id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default FoodItem;
