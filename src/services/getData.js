import axios from 'axios'

// axios.post('https://httpbin.org/post', {x: 1}, {
//   headers: {
//     'Content-Type': 'multipart/form-data'
//   }
// }).then(({data})=> console.log(data));
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