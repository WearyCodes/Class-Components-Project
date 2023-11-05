import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
let id = 0
let getId = () => ++id
const initialTodos = [
  {id: getId(), name: "Walk the dog", completed: false},
  {id: getId(), name: "Learn React", completed: true},
  {id: getId(), name: "Have fun", completed: false},
]


export default class App extends React.Component {


  constructor(){
    super();
    this.state = {
      todos: initialTodos
    }
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name: name})
    })
  }


toggleCompletion = id => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(id === todo.id){return {...todo, completed: !todo.completed}}
      else{return todo}
    })
  })
}

  render() {
    return (
      <div>
        To-do App
        <TodoList toggleCompletion={this.toggleCompletion} todos={this.state.todos} />
        <Form addTodo = {this.addTodo} />

      </div>
    )
  }
}
