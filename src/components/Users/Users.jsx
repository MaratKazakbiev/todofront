import { useEffect, useState } from 'react'
import axios from 'axios';
import React from 'react'
import style from './users.module.css'
import Loader from '../../assets/loader/Loader.jsx'
import User from '../User/User.jsx';



const Users = () => {

  const [users , setUsers] = useState([]);
  const [loader , setLoader] = useState(true);



  useEffect(()=>{

    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data))
        .catch((error)=>console.log(error))
        .finally(setLoader(false))

  },[])

  return (
      <div className={style.container}>
        {loader && <Loader />}
      
      <div className={style.users}>
        {users.map((user)=> <User key={user.id} {...user}/>)}
      </div>
 
      </div>
  )
}

export default Users