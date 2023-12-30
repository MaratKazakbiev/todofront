import React from 'react';
import { Link, json, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import style from './singleTodo.module.css';


const SingleTodo = () => {
  const [todo , setTodo] = useState([]);
  const [user , setUser] = useState([]);
  const params = useParams()

  async function fetchData() {
    let firstResponse = await axios(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    let todo = await firstResponse.data;
    setTodo(todo);

    let secondResponse = await axios(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
    let user = await secondResponse.data;
    setUser(user);
  }

  useEffect(() => {
    fetchData();
  },[]); 


  return (
    <div className={style.container}>

        <div className={style.field}>
            <label className={style.label}>Title</label>
            <h1 className={style.title}>{todo.title}</h1>
        </div>
        
        <div className={style.field}>
            <label className={style.label}>Completed</label>
            <h1 className={style.info}>{todo.completed ? 'Yes' : 'No' }</h1>
        </div>

        <div className={style.field}>
            <label className={style.label}>Author</label>
            <h1 className={style.info}>{user.name}</h1>
        </div>

        <div className={style.field}>
            <label className={style.label}>Email</label>
            <h1 className={style.info}>{user.email}</h1>
        </div>

        <button className={style.btn}><Link to='../todos'>Назад</Link></button>

    </div>
  )
}

export default SingleTodo