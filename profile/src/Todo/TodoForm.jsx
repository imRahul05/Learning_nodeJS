import React, { useContext, useState } from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContextAPI/TodoContext";

const initialState = {
  todoName: "",
  priority: "",
  completed: false,
  timeStamp: Date.now(),
};
const TodoForm = () => {
  const [todoFormData, setTodoFormData] = useState(initialState);
  const {setAllTodo,allTodo} = useContext(TodoContext)
 
  function handelSubmit(e) {
    e.preventDefault();
    setAllTodo((prev)=>
        [...prev,
        todoFormData]
    )
     //console.log(allTodo)
   
  }

  function handleChange(e){
      const {name,value}= e.target

      setTodoFormData((prev)=>({
        ...prev,
        [name]:value
      }))
  }
  return (
    <div className="todo-form-container">
      <h1>Todo-Form</h1>
      <form onSubmit={handelSubmit}>
       <div>
         <input
          type="text"
          placeholder="Enter the todo Name"
          value={todoFormData.todoName}
          name="todoName"
          onChange={handleChange}
        />
       </div>
       <div>
         <select name='priority' value={todoFormData.priority} onChange={handleChange}>
          <option>Select Priority</option>
          <option  value="low">Low</option>
          <option  value="medium">Medium</option>
          <option  value="high">High</option>
        </select>
       </div>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
