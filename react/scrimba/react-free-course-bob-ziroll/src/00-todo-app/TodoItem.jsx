import React from "react";

const TodoItem = (props) => 
// export default class TodoItem extends React.Component 
{

   const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">
    {/* here the onChange property needs an event (), in case we pass in only {props.handleChange it will return an object, not an event} */}
    <input 
      type="checkbox" 
      checked={props.completed} 
      onChange={() => props.handleChange(props.id)}/> 
      <span style={props.completed ? completedStyle : null}>{props.text}</span>
    <br/>
  </div>
  )
}

export default TodoItem;