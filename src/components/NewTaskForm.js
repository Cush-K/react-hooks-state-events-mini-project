import React from "react";

function NewTaskForm(props) {
  return (
    <form className="new-task-form" onSubmit={props.onTaskFormSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={props.details}
          onChange={props.onNewDetails}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={props.selectedCategory}
          onChange={props.onNewCategory}
        >
           {props.categoryList.map((category, index)=>{
  return <option key ={index} value={category}> 
           {category} 
        </option> 
})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
