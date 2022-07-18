import React from "react";
import {getTodos, getUsers} from '../services/getData'
import { TableRow } from "./TableRow";
import { TableTodo } from "./TableTodo";

class ExampleComponent extends React.Component { 
  constructor(props) { 
      super(props); 
      this.state = {
        users: [],
        todos: [],
        selected: 1,
       }; 
  } 

  componentDidMount() {
    const {users, todos} = {...this.state};
    if (users.length === 0 || todos.length === 0) {
      getUsers((data) => this.setState({users: data}))
      getTodos((data) => this.setState({todos: data}))
    }
  }

  setUser = (e) => this.setState({selected: e})

  sortKey = (e) => {
    console.log('clicked', e)
  }

  clear = () => this.setState({selected: false})

  render() { 
    const {users, todos} = {...this.state};
    const userTodos = todos.filter((todo) => todo.userId === this.state.selected);
      return ( 
        <>
          <div>   
            Users:
              {
                <table>
                  <tr className="Table--listTableHeaders" key={'header'}>
                    <td>
                      <button onClick={() => this.sortKey('name')}>  
                        Name
                        </button>
                        </td>
                    <td>
                      <button onClick={() => this.sortKey('email')}>  
                        Email
                        </button>
                        </td>
                    <td>
                      <button onClick={() => this.sortKey('phone')}>  
                      Phone Number
                        </button>
                        </td>
                    <td>
                      <button onClick={() => this.sortKey('address')}>  
                      Address
                        </button>
                        </td>
                    <td>
                    <button onClick={() => this.sortKey('website')}>  
                    Website
                      </button>
                      </td>
                    </tr>

                  {users.map(user => <TableRow handler={this.setUser} props={user}/>)}
              </table>}
          </div> 
          <div>
            {
              (this.state.users.length > 0) &&
              (
              <>
              <h2>
              View {users[this.state.selected].name}'s todo list
              </h2>
              <p>they have completed {userTodos.filter(({completed}) => completed).length} tasks on their todo list</p>
              </>
              )
            }
            { this.state.selected ?
              (<>
                 todos:
                <table>
                  <tr>
                    <td>Title</td>
                    <td>Completed</td>
                  </tr>
              {userTodos.map(todo => <TableTodo props={todo}/>)}
                </table>
              </>)
              : <h3>
                Select a User
              </h3>
            }
          </div>
        </>
      ); 
  } 
} 



export default ExampleComponent