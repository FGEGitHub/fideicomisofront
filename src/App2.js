import React, { useEffect, useState } from "react";
import TaskForm from "./componentes/TaskForm";

import Index2prueba from "./componentes/Index2prueba";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import loginService from './services/login'


function App() {

  const [cuil_cuit, setCuil_cuit] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)




  const handleLogin = async (event) => {

    event.preventDefault()

    try {
        const user = await loginService.login({
            cuil_cuit,
            password
          })
      console.log(user)
      //console.log(user)
      setUser(user)
      setCuil_cuit('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }

  }



  return (

    <BrowserRouter>
  
      <form onSubmit={handleLogin}>
        <div>
          <input
            type='text'
            value={cuil_cuit}
            name='Cuil_cuit'
            onChange={({ target }) => setCuil_cuit(target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button>Login</button>
      </form>
      <div>

      </div>


      <Container>

        <Routes>
          <Route Index2prueba path="/asd" element={<Index2prueba />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );

}
export default App;
