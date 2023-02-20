import { Link } from "react-router-dom";

export default function Registrar() {
  return (
    <>
      <h2 className='text-sky-600 font-black text-5xl text-center capitalize'>Crea tu cuenta y administra tus <span className='text-slate-700'>proyectos</span></h2>
      <form className='my-10 bg-white shadow rounded-lg p-10 '>
        <div className='my-5 '>
          <label htmlFor="nombre" className="text-gray-600 block text-xl font-bold">Nombre</label>
          <input id='nombre' type='text' placeholder='Nombre completo' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5 '>
          <label htmlFor="email" className="text-gray-600 block text-xl font-bold">Email</label>
          <input id='email' type='email' placeholder='Email' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5 '>
          <label htmlFor="password" className="text-gray-600 block text-xl font-bold">Contraseña</label>
          <input id='password' type='password' placeholder='Contraseña' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5 '>
          <label htmlFor="passwordRepetir" className="text-gray-600 block text-xl font-bold">Repetir contraseña</label>
          <input id='passwordRepetir' type='password' placeholder='Repetir contraseña' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <input typeof='sumbit' defaultValue='Crear cuenta' className='w-full text-center py-3 text-white uppercase rounded font-bold bg-sky-700 mb-5 hover:bg-sky-500 hover:cursor-pointer transition-colors' />
      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link className="block text-center my-5 text-slate-500 text-sm" to='/'>¿Tienes una cuenta? Inicia sesión</Link>
        <Link className="block text-center my-5 text-slate-500 text-sm" to='/olvide-password'>Olvide mi contraseña</Link>
      </nav>
    </>
  )
}
