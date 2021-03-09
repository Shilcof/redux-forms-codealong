import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

const addToDo = (toDo) => {
  return {
    type: 'ADD_TODO',
    toDo
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addToDo: (toDo) => dispatch(addToDo(toDo))
//   }
// }

export default connect(null,{addToDo})(CreateTodo);
