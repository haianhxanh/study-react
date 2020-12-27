import React from 'react';
import TodoItem from './TodoItem.jsx';
import './style.scss';
import todosData from './todosData';


class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  // if we don't use arrow function here we would have to bind handleChange - see above
  handleChange = (id) => {
    // console.log('Changed', id)
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
    // i = each item inside of todosData array, we can name it whatever we like
    const todoItems = this.state.todos.map( i => <TodoItem key={i.id} item={i} handleChange={this.handleChange}/>
    
    )

    return (
      <>
        <h1>00. To-do App Redo</h1>
        <div className="todo-list-redo">
          {todoItems}
        </div>
      </>
    )
  }
  
}
export default TodoApp;