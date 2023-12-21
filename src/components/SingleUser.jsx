import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';

import style from './styles/singleUser.module.css'


const SingleUser = () => {
  
  const [todos , setTodos] = useState([]);
  const [user , setUser] = useState([]);
  const params = useParams();

  async function fetchData() {
    let firstResponse = await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    let user = await firstResponse.data;
    setUser(user);

    let secondResponse = await axios(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`)
    let todos = await secondResponse.data;
    setTodos(todos);
  }

  useEffect(() => {
    fetchData();
  },[]); 

  return (
    <div className={style.container}>

      <div className={style.todos}>
          {todos.map((todo)=> <h1 className={!todo.completed ? style.todo : style.todoCompleted}>{todo.title}</h1>)}
      </div>

      <div className={style.info}>
        <label className={style.label}>Username</label>
        <div className={style.field}>{user.username}</div>

        <label className={style.label}>Name</label>
        <div className={style.field}>{user.name}</div>

        <label className={style.label}>Email</label>
        <div className={style.field}>{user.email}</div>

        <label className={style.label}>Phone</label>
        <div className={style.field}>{user.phone}</div>

        <label className={style.label}>Website</label>
        <div className={style.field}>{user.website}</div>

        <br />
        <Link className={style.link} to='../users'>Назад</Link>
      </div>

    </div>
  )
}

export default SingleUser