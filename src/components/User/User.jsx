import React from 'react'
import style from './user.module.css'
import { Link, json } from 'react-router-dom';


const User = (user) => {

    const {name , id} = user;

  return (
    <div className={style.container}>

        <div className={style.user}>
            <h1><Link to={`${id}`} className={style.link}>{name}</Link></h1>
        </div>

    </div>

  )
}

export default User