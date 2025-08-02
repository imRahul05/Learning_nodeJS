import React, { useState } from "react";

const initialState = {
  id: "",
  title: "",
  priority: "",
};
const Todo = () => {
  const [formData, setFormData] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const [filterTodo ,setFilterTodo]=useState([])

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = Date.now();
    const todoData = { ...formData, id };
    setTodos((prev) => [...prev, todoData]);
    setFilterTodo(todos)
  }

  function handleDelete(id) {
    const filteredTodos = todos.filter((todo) => todo.title !== id);
    setTodos(filteredTodos);
  }

  function handleFilter(e) {
    const val = e.target.value
    if(val===''){
      setFilterTodo(todos)
    }else{
        const filterData = todos.filter((todo)=>todo.priority===val)
        setFilterTodo(filterData)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter todo title"
          value={formData.title}
          onChange={handleChange}
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <div className="filter">
        <select onChange={handleFilter}>
          <option value="">select</option>
          <option value="low">Low</option>
          <option value="high">High</option>
          <option value="medium">medium</option>
        </select>
      </div>
      <div>
        {filterTodo.map((todo) => {
          return (
            <div key={todo.id}>
              <h1>{todo.id}</h1>
              <h2>{todo.title}</h2>
              <h2>{todo.priority}</h2>
              <button onClick={() => handleDelete(todo.title)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
