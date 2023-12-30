import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'
import AppRoutes from './components/routes/AppRoutes'

function App() {

  // const [todos , setTodos] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === '/'){
      navigate('/dashboard/todos')
    }
},[])

return (

  <>
    <AppRoutes />
  </>

  )
}

export default App
