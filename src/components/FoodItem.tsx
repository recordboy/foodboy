import React, { useState } from 'react';

const FoodItem = (props: {
  id: number;
  name: string;
  select: string;
  updataItem: (id: number, name: string) => void;
  deleteItem: (id: number) => void;
}) => {
  const { id, select, updataItem, deleteItem } = props;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(props.name);

  if (editing) {
    return (
      <div className={select}>
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
    <div className={select}>
      {name}
      <button
        type="button"
        className="modify"
        onClick={() => {
          setEditing(!editing);
        }}
      >
        modify
      </button>
      <button
        type="button"
        className="delete"
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
