import React from "react";
import TodoItem from "./TodoItem.jsx";
import "./style.scss"
import {todosData} from "./todosData.js";

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  handleChange = (id) => {
    // console.log("I was changed", id)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const TodoComponent = this.state.todos.map((item) =>
      <TodoItem key={item.id} text={item.text} handleChange={this.handleChange}/>
      )
    
    return (
      <>
      <h1>00. To-do App</h1>
      <div className="todo-list">
        {TodoComponent}
      </div>
      </>
    )
  }
}


// function Todo() {
//   const TodoComponent = todosData.map((item) => {
//     // here we pass down the values of todosData through argument "item" todoItem
//     // pink text refers to text in TodoItem
//     // text in item.text refers to the array key value
//     return (
//       <TodoItem key={item.id} text={item.text} />
//     )
//   })
//   return (
//     <>
//       <h1>00. To-do App</h1>
//       <div className="todo-list">
//         {TodoComponent}
//       </div>
//     </>
//   )
// }

export default Todo;


