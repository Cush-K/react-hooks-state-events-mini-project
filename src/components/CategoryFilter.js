import React, {useState} from "react";


function CategoryFilter({ categorylist, onFilter }) {
  const [clicked, setClicked] = useState(null);
  
  function handleClick(index, value){
    setClicked(index);
    onFilter(value);
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categorylist.map((category, index) => 
      (<button 
        className={index === clicked ? "selected": ""}
        key = {index} 
        onClick={() => handleClick(index, category)}>{category}
        </button>)
      )}
    </div>
  );
}

export default CategoryFilter;
