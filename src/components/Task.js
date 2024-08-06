import React from "react";

function Task({ text, category, deleteBtn, id }) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=> deleteBtn(id)}>X</button>
    </div>
  );
}

export default Task;
