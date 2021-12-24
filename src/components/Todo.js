import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
    <div 
      className="todo"
      style={{ textDecoraton: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>✅</button>
        <button onClick={() => removeTodo(index)}>❌</button>
      </div>
    </div>
  );
}

  export default Todo;
