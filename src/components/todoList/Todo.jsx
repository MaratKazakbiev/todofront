import { Link } from 'react-router-dom';

import React from 'react'
import style from '../styles/todo.module.css';

const Todo = (todo) => {

  const { title , completed , id } = todo;

  return (
    <div className={style.container}>
      <div className={completed ? style.todoCompleted : style.todoNotCompleted }>
          <h1><Link to={`${id}`} className={style.link}>{title}</Link></h1>
      </div>

      {completed 
        ? 
          <button className={style.buttonCompleted}>
            <img className={style.check} src="../../src/assets/recycle-bin.png" alt="" srcset="" />
          </button> 
        :
          <button className={style.buttonNotCompleted}>
            <img className={style.check} src="../../src/assets/check-mark.png" alt="" srcset="" /> 
          </button>
      }
    </div>
  )
}

export default Todo