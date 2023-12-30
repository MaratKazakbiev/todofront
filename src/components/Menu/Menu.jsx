import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './menu.module.css'

const Menu = () => {
  return (
    <nav className={style.menu}>
        <NavLink 
        className={({ isActive }) => isActive ? style.activeLink : style.link} 
        to='todos' 
        style={{borderRadius: '10px 0 0 0'}}>
            Задачи
        </NavLink>

        <NavLink className={({ isActive }) => isActive ? style.activeLink : style.link} 
        to='users' 
        style={{borderRadius: '0 10px 0 0'}}>
            Пользователи
        </NavLink>
    </nav>
  )
}

export default Menu