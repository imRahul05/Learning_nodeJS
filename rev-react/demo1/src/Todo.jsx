import React, { useState } from "react";

const initialState = {
  title: "",
  status: "",
  description: "",
};
const Todo = () => {
  const [formData, setFormData] = useState(initialState);
  const [AllTodo, setAllTodo] = useState([]);

  const AllInput = [
    {
      name: "title",
      type: "text",
      placeholder: "Enter title",
      value: formData.title,
    },
    {
      name: "description",
      type: "text",
      placeholder: "Enter description",
      value: formData.description,
    },
  ];

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setAllTodo((prev) => [...prev, formData]);
  }

  const TodoCard = ({ todo }) => {
    return (
      <>
        <h2>{todo.title}</h2>
        <p>{todo.status}</p>
        <p>{todo.description}</p>
      </>
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {AllInput.map((input, idx) => {
          return (
            <div key={idx}>
              <input
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={handleChange}
                name={input.name}
              />
            </div>
          );
        })}
        <div>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="" disabled>
              Select status
            </option>
            <option value="to-do">To-Do</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {AllTodo.map((todo, idx) => (
          <TodoCard key={idx} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
