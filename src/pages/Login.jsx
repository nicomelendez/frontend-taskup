import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h2 className='text-sky-600 font-black text-5xl text-center capitalize'>Inicia sesión y administra tus <span className='text-slate-700'>proyectos</span></h2>
      <form className='my-10 bg-white shadow rounded-lg p-10 '>
        <div className='my-5 '>
          <label htmlFor="email" className="text-gray-600 block text-xl font-bold">Email</label>
          <input id='email' type='email' placeholder='Email' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5 '>
          <label htmlFor="password" className="text-gray-600 block text-xl font-bold">Contraseña</label>
          <input id='password' type='password' placeholder='Contraseña' className='w-full mt-3 outline-sky-600 p-3 border rounded-xl bg-gray-50' />
        </div>
        <input typeof='sumbit' defaultValue='Iniciar sesión' className='w-full text-center py-3 text-white uppercase rounded font-bold bg-sky-700 mb-5 hover:bg-sky-500 hover:cursor-pointer transition-colors' />
      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link className="block text-center my-5 text-slate-500 text-sm" to='/registrar'>¿No tienes una cuenta? Regístrate</Link>
        <Link className="block text-center my-5 text-slate-500 text-sm" to='/olvide-password'>Olvide mi contraseña</Link>
      </nav>
    </>
  )
}
