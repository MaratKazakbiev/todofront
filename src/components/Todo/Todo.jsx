import { NavLink } from 'react-router-dom';

import React from 'react'
import style from './todo.module.css';

const Todo = ({ title , completed , id }) => {

  return (
    <div className={style.container}>
      <div className={completed ? style.todoCompleted : style.todoNotCompleted }>
          <h1><NavLink to={`${id}`} className={style.link}>{title}</NavLink></h1>
      </div>

      {completed 
        ? 
          <button className={style.buttonCompleted}>
            <img className={style.check} src="../../src/assets/recycle-bin.png" alt=""/>
          </button> 
        :
          <button className={style.buttonNotCompleted}>
            <img className={style.check} src="../../src/assets/check-mark.png" alt=""/> 
          </button>
      }
    </div>
  )
}

export default Todo