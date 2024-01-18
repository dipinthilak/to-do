import React from "react";
import "./TodoItem.css"



function TodoItem({ task, deleteTask, toggleCompleted }) {


  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <input id= {task.id} className="todo-check" type="checkbox" checked={task.completed} onChange={handleChange} />
      <p className="todo-cont">{task.text}</p>
      <button className="delete-b" onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
export default TodoItem;
