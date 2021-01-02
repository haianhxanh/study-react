import React from 'react';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: 'red',
    textDecoration: 'line-through'
  }

  return (
    <p className="todo-item">
      <input type="checkbox"
        // checked when completed status is true
        checked={props.item.completed}

        onChange={() => props.handleChange(props.item.id)}
      /> 
        
        <span 
          // if completed status is true, render completed Style, else render nothing
          style={props.item.completed ? completedStyle : null}>
            {props.item.id}.{props.item.text}
        </span>
    </p>
  )
}

export default TodoItem;
