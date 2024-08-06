import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState(TASKS);
const [filteredTasks, setFilteredTasks] = useState(TASKS);
const [categories, setCategories] = useState(CATEGORIES);
const [details, setDetails] = useState("")
const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0])

function handleDetails(e){
  setDetails(e.target.value)
}

function handleCategories(e){
  setSelectedCategory(e.target.value)
}

function handleFilter(category){
  if(category === "All"){
    setFilteredTasks(tasks)
  }else{
  setFilteredTasks(tasks.filter(task => task.category === category))
}
}

function handleSubmit(e){
  e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      text: details,
      category: selectedCategory,
    };
  
  const newTasks = [...tasks, newTask];

  setTasks(newTasks);

  if (selectedCategory === "All") {
    setFilteredTasks(newTasks);
  } else {
    setFilteredTasks(newTasks.filter(task => task.category === selectedCategory));
  }

  setDetails("");
  setSelectedCategory(CATEGORIES[0]);

}

function handleDelete(id){
  const newTasks = tasks.filter(task => task.id !== id);
  setTasks(newTasks);
  setFilteredTasks(newTasks.filter(task => task.category === selectedCategory || selectedCategory === "All"))
}

return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categorylist={categories} 
        onFilter = {handleFilter}
      />
      <NewTaskForm 
        onNewDetails={handleDetails} 
        onNewCategory ={handleCategories}
        categoryList = {categories}
        onTaskFormSubmit = {handleSubmit}
        details = {details}
        selectedCategory = {selectedCategory}
      />
      <TaskList listOfTasks = {filteredTasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
