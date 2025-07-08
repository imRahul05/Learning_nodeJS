import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../TodoContextAPI/TodoContext";
import "./Todo.css";
import CheckList from "../components/CheckList";

const Todos = () => {
  const { allTodo, setAllTodo } = useContext(TodoContext);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    applyFilter(filter);
  }, [allTodo, filter]);

  const applyFilter = (value) => {
    let temp = [...allTodo];
    if (value === "pending") {
      temp = temp.filter((todo) => !todo.completed);
    } else if (value === "completed") {
      temp = temp.filter((todo) => todo.completed);
    }
    setFilteredTodoList(temp);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  const toggleComplete = (indexInAllTodo) => {
    const updatedTodos = allTodo.map((todo, idx) =>
      idx === indexInAllTodo ? { ...todo, completed: !todo.completed } : todo
    );
    setAllTodo(updatedTodos);
  };

  const TodoCard = ({ todo, indexInAllTodo }) => {
    return (
      <div className="todo-card">
        <h3>
          {todo.todoName} --{" "}
          <CheckList
            checked={todo.completed}
            onChange={() => toggleComplete(indexInAllTodo)}
          />
        </h3>
        <p>{todo.priority}</p>
      </div>
    );
  };

  return (
    <>
      {allTodo.length > 0 ? (
        <div className="todos-container">
          <div>
            <label>Completed-filter: </label>
            <select onChange={handleChange} value={filter}>
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {filteredTodoList.map((todo, idx) => {
            const indexInAllTodo = allTodo.findIndex(
              (item) => item.timeStamp === todo.timeStamp
            );
            return (
              <TodoCard
                key={todo.timeStamp || idx}
                todo={todo}
                indexInAllTodo={indexInAllTodo}
              />
            );
          })}
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>No todos</h2>
      )}
    </>
  );
};

export default Todos;
