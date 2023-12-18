import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    setText("");

    if (text.length == 0 || list.includes(text)) return;
    setList((cur) => [...cur, text]);
  };

  const deleteTask = (cur) => {
    setList(list.filter((item) => item != cur));
  };

  return (
    <>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button
        onClick={() => {
          addTask();
        }}>
        Add
      </button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item} <button onClick={() => deleteTask(item)}> delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todo;
