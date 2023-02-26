import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = [...todo];
    newTodo.push(todoText);
    setTodo(newTodo);
  };

  const deleteTodo = (todoIndex) => {
    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <ul className="todo-list">
        {todo.map((item, index) => {
          return (
            <li>
              {item}
              <button
                className="remove-todo-button"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>

      <form>
        <div className="input-container">
          <label htmlFor="todo-input">New Todo</label>
          <input
            id="todo-input"
            type="text"
            onChange={handleTodoTextChange}
            value={todoText}
          />
        </div>
        <button onClick={addTodo}>Add</button>
      </form>
    </div>
  );
}

export default App;
