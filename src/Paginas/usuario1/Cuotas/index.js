

import React, { useEffect, useState, Fragment } from "react";
import Navbar from '../../../components/usuario1/Navbar1'

import useUser from '../../../hooks/useUser'
import Cuotas from '../../../components/usuario1/cuotas/CuotasNiv1'

import { useNavigate } from "react-router-dom";




export default function Transferencias() {
  const [usuarioo, setUsuarioo] = useState([''])
  const usuario = useUser().userContext
  //setUsuarioo(usuario)


  const navigate = useNavigate();
  const [logueado, setLogueado] = useState(false)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      if (!user) {
        window.localStorage.removeItem('loggedNoteAppUser')
        navigate('/login')

      } else {

        setLogueado(true)
      }

      //servicioUsuario.setToken(user.token)  


    }

  }, [])

  return (
    <>
      <div>  {logueado ? <div>

        <Navbar />


        <Cuotas
          user={1}
          user2={usuarioo}


        />
      </div> : <div></div>} </div>

    </>
  );

}