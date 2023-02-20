import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import crearUsuario from "../services/usuario/crearUsuario";

export default function Registrar() {

  const [alerta, setAlerta] = useState({})

  const limpiarCampos = (e) =>{
    e.preventDefault();
    const {nombre, email, password, passwordRepetida} = e.target
    nombre.value = ''
    email.value = ''
    password.value = ''
    passwordRepetida.value = ''
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setAlerta({})
    const {password, passwordRepetida} = e.target

    if(password.value !== passwordRepetida.value){
      setAlerta({
        mensaje:'Las contraseñas deben ser iguales',
        error:true
      })

      return false
    }

    if(password.value.length < 6){
      setAlerta({
        mensaje:'La contraseña es muy corta, agrega minimo 6 caracteres',
        error:true
      })

      return false
    }

    const oUsuario = Object.fromEntries(new window.FormData(e.target));
    const peticion = await crearUsuario(oUsuario)

    if(peticion.status === 'error'){
      setAlerta({
        mensaje: peticion.message,
        error:true
      })
      limpiarCampos(e)
      return false;
    }
    
    setAlerta({
      mensaje: peticion.message,
      error: false
    })
    limpiarCampos(e)
  }

  const { mensaje } = alerta
  return (
    <>
      <h2 className='text-sky-600 font-black text-5xl text-center capitalize'>Crea tu cuenta y administra tus <span className='text-slate-700'>proyectos</span></h2>

      {mensaje && <Alerta alerta={alerta} />}
      <form onSubmit={handleSubmit} className='my-10 bg-white shadow rounded-lg p-10 '>
        <div className='my-5 '>
          <label htmlFor="nombre" className="text-gray-600 block text-xl font-bold">Nombre</label>
          <input id='nombre' required name='nombre' type='text' placeholder='Nombre completo' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5 '>
          <label htmlFor="email" className="text-gray-600 block text-xl font-bold">Email</label>
          <input id='email' required type='email' name='email' placeholder='Email' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5 '>
          <label htmlFor="password" className="text-gray-600 block text-xl font-bold">Contraseña</label>
          <input id='password' required type='password' name='password' placeholder='Contraseña' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5 '>
          <label htmlFor="passwordRepetir" className="text-gray-600 block text-xl font-bold">Repetir contraseña</label>
          <input id='passwordRepetir' required type='password' name='passwordRepetida' placeholder='Repetir contraseña' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>

        <button type='submit' value='Crear cuenta' className='w-full text-center py-3 text-white uppercase rounded font-bold bg-sky-700 mb-5 hover:bg-sky-500 hover:cursor-pointer transition-colors'>Crear cuenta</button>
      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link className="block text-center my-5 text-slate-500 text-sm" to='/'>¿Tienes una cuenta? Inicia sesión</Link>
        <Link className="block text-center my-5 text-slate-500 text-sm" to='/olvide-password'>Olvide mi contraseña</Link>
      </nav>
    </>
  )
}
