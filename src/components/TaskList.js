import React from "react";
import Task from "./Task";

function TaskList({listOfTasks, onDelete}) {

  function handleDelete(id){
    onDelete(id);
  }
  
  return (
    <div className="tasks">
      <ul>
        {listOfTasks.map((task, index) =>
          <Task
            key={index}
            id = {task.id}
            text={task.text}
            category={task.category}
            deleteBtn ={handleDelete}
          />
        )}
      </ul>
    </div>
  );
}

export default TaskList;
