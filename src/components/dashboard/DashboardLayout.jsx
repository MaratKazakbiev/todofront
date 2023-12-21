import React from 'react'
import {Outlet} from 'react-router-dom'

import Menu from './Menu'
import style from '../styles/dashboardlayout.module.css'

const DashboardLayout = () => {

  return (
    <div className={style.container}>
      <>
        <Menu />
        <Outlet />
      </>
    </div>
  )
}

export default DashboardLayout