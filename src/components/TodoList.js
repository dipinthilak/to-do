import React, { useState } from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'

function TodoList() {

  //task data and manipulation
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "React basics",
      completed: true,
    },
    {
      id: 2,
      text: "To do app",
      completed: false,
    },
  ]);



  const [text, setText] = useState("");
  function addTask(text) {
    if(text!=''){
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([ newTask,...tasks]);
    setText("");}
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
    console.log(tasks);
  }
  return (
    <div className="todo-list">
      <input className="ipfield" name="new-todo" placeholder="Enter your to-do task" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="ipbutton" onClick={() => addTask(text)}>Add</button>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
export default TodoList;
