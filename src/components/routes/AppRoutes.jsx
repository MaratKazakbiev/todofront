import React from 'react'
import { Routes, Route } from 'react-router-dom'


import DashboardLayout from '../Dashboard/DashboardLayout'
import TodoList from '../TodoList/TodoList'
import Users from '../Users/Users'
import SingleUser from '../SingleUser/SingleUser'
import SingleTodo from '../SingleTodo/SingleTodo'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='dashboard' element={<DashboardLayout />}>

            <Route path='todos' element={<TodoList/>}/>
            <Route path='todos/:id' element={<SingleTodo />}/>

            <Route path='users' element={<Users />}/>
            <Route path='users/:id' element={<SingleUser />}/>

        </Route>
  </Routes>

  )
}

export default AppRoutes