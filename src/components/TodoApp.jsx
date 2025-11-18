import React from "react";

function TodoApp() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if (text.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTodos([...todos, { text, completed: false }]);
    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") addTodo();
  }

  function handleAdd(e) {
    e.preventDefault();
    addTodo();
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function toggleComplete(index) {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const totalTasks = todos.length;
  const completedTasks = todos.filter((t) => t.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <>
      <h1>Todo App</h1>

      <div className="input-container">
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={text}
          className="text-input"
          placeholder="Enter the task..."
        />
        <button onClick={handleAdd} className="add-btn">
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "white",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <footer>
        <span>Total Tasks: {totalTasks} |</span>
        <span> Remaining Tasks: {remainingTasks} |</span>
        <span> Completed Tasks: {completedTasks}</span>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/md_tharick22/"
            target="_blank"
            className="social-link"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/md.tharick/"
            target="_blank"
            className="social-link"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com/a_tharick52871"
            target="_blank"
            className="social-link"
            aria-label="X (Twitter)"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://github.com/MohammedTharick25"
            target="_blank"
            className="social-link"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mdtharick/"
            target="_blank"
            className="social-link"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default TodoApp;
