import React, { useEffect, useState } from 'react'
import axios from 'axios'

import style from './todoList.module.css'
import Todo from '../Todo/Todo.jsx'
import Loader from '../../assets/loader/Loader.jsx'


const TodoList = () => {

  const [todos , setTodos] = useState([]);
  const [isLoading , setisLoading] = useState(false);
  const [error , setError] = useState('');
  
  const [search , setSearch] = useState('');
  const [filteredTodos, setFilteredTodos]= useState([...todos]);
  const [selectedSort, setSelectedSort] = useState(null);


  const fetchTodos = () =>{
    setisLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) =>{
        setTodos(res.data) 
        setFilteredTodos(res.data)
        setisLoading(false);
      }) 
      .catch((error)=>setError(error))
  }

  useEffect(()=>{
    fetchTodos();
  },[]);

  useEffect(()=>{
    if (Number(selectedSort == 1)){
      sortHandler();
    } else if (Number(selectedSort == 2)){
      reverseSortHandler();
    }
  },[selectedSort])

  const sortHandler = () => {
    setFilteredTodos(prevState => prevState.sort((a,b)=> b.title.localeCompare(a.title)))
  };

  const reverseSortHandler = () => {
    setFilteredTodos(prevState => prevState.sort((a,b)=> a.title.localeCompare(b.title)))
  };

  return (

    <div  className={style.container}>

      <div>
        <input 
          value={search} 
          placeholder='Search' 
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select id="selectBox" 
        onChange={(e)=> setSelectedSort(e.target.value)}
        defaultValue={'DEFAULT'}
        >
          <option disabled value='DEFAULT'>Select sort</option>
          <option value="1">From A to Z</option>
          <option value="2">From Z to A</option>
        </select>
      </div>

      <div className={style.todos}>
        {isLoading && <Loader style={{margin:'auto'}}/>}
        {error && <div>{error}</div>}
        {filteredTodos
        .filter((t)=>t.title.toLowerCase().includes(search.toLowerCase()))
        .map((todo) => <Todo key={todo.id} {...todo} />)}
      </div>
    </div>

  )
}

export default TodoList