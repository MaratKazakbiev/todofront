import React from 'react'
import { useState } from 'react'

import style from '../styles/todoList.module.css'
import Todo from './Todo'
import Loader from '../../assets/loader/Loader.jsx'


const TodoList = ({todos , users}) => {

  const [search , setSearch] = useState('');
  const [filteredTodos, setFilteredTodos]= useState([...todos]);

  const sortHandler = () => {
    if (filteredTodos.length > 1) {
      const sorted = filteredTodos.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      setFilteredTodos([...sorted]);
    }
  };

  const reverseSortHandler = () => {
    if (filteredTodos.length > 1) {
      const sorted = filteredTodos.sort(function (a, b) {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
      });
      setFilteredTodos([...sorted]);

    }
  };

  const sortSwitcher = () =>{
    let selectBox = document.getElementById("selectBox");
    let value = selectBox.options[selectBox.selectedIndex].value;
    
    if (value == 1){
      sortHandler();
    }
    
    if (value == 2){
      reverseSortHandler();
    }
    
  }

  const searchHandler = (e) => {
    setSearch(e.target.value);

    if (search.length > 0)
    {

      setFilteredTodos(filteredTodos => filteredTodos.filter((todo) => todo.title.toLowerCase().includes(search)))

    }
    else if (search.length == 0){
      
      setFilteredTodos([...todos]);
    }
  };


  return (

    <div  className={style.container}>

      <div>
        <input value={search} placeholder='Search' onChange={searchHandler}></input>

        <select id="selectBox" onChange={sortSwitcher}>
          <option disabled selected value>Select sort</option>
          <option value="1">From A to Z</option>
          <option value="2">From Z to A</option>
        </select>
      </div>

      <div className={style.todos}>
        {todos.length == 0 && <Loader style={{margin:'auto'}}/>}

        {filteredTodos.map((todo) => <Todo key={todo.id} {...todo} />)}
      </div>
    </div>

  )
}

export default TodoList