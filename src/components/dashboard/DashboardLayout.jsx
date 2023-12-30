import React from 'react'
import {Outlet} from 'react-router-dom'

import Menu from '../Menu/Menu'
import style from './dashboardlayout.module.css'

const DashboardLayout = () => {

  return (
    <div className={style.container}>
      <>
        <header>
          <Menu />
        </header>

        <main>
        <Outlet />
        </main>
      </>
    </div>
  )
}

export default DashboardLayout