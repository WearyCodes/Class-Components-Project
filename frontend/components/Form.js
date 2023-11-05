import React from 'react'

export default class Form extends React.Component {

  handleChange = evt => {
this.setState({
  name: evt.target.value
})
  }

  onSubmit = evt => {
    const {addTodo} = this.props
evt.preventDefault()
 addTodo(this.state.name)
 this.setState({
  name: ''
 }
 )
  }

  state = {
    name: "",
  }
  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <input onChange = {this.handleChange} type= "text" value={this.state.name}></input>
        <button>Submit</button>
</form>
    )
  }
}
