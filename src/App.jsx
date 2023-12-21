import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import DashboardLayout from './components/dashboard/DashboardLayout'
import TodoList from './components/todoList/TodoList'
import Users from './components/Users'
import SingleUser from './components/SingleUser'
import SingleTodo from './components/todoList/SingleTodo'

function App() {

  const [todos , setTodos] = useState([]);

  useEffect(()=>{

    axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => setTodos(res.data) )
        .then(console.log(todos))
        .catch((error)=>console.log(error))

},[])

return (

  <BrowserRouter>
    <Routes>
      <Route path='dashboard' element={<DashboardLayout />}>

        <Route path='todos' element={<TodoList todos={todos} />}/>
        <Route path='todos/:id' element={<SingleTodo />}/>

        <Route path='users' element={<Users />}/>
        <Route path='users/:id' element={<SingleUser />}/>

      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App
