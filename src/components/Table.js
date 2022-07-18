import React from "react";
import {getTodos, getUsers} from '../services/getData'

class ExampleComponent extends React.Component { 
  constructor(props) { 
      super(props); 
      this.state = {
        users: [],
        todos: []
       }; 
  } 

  componentDidMount() {
    const {users, todos} = {...this.state};
    if (users.length === 0 || todos.length === 0) {
      getUsers((data) => this.setState({users: data}))
      getTodos((data) => this.setState({todos: data}))
    }
  }

  render() { 
    console.log(this.state)
      return ( 
          <div> 
              <h1>This is a view created by a class component</h1> 
          </div> 
      ); 
  } 
} 



export default ExampleComponent