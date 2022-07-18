import axios from 'axios'

export async function getUsers(cb) {
  try{
      axios.get('https://jsonplaceholder.typicode.com/users', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(({data}) => cb(data))
  }catch(error) {
      return [];
  }
  
}

export async function getTodos(cb) {
  try{
      axios.get('https://jsonplaceholder.typicode.com/todos', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(({data}) => cb(data))
  }catch(error) {
      return [];
  }
}