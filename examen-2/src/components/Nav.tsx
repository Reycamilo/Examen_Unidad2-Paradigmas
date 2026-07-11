import { NavLink } from 'react-router-dom'

function linkClass({ isActive }: { isActive: boolean }) {
  return `px-4 py-2 rounded font-medium ${
    isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
  }`
}

function Nav() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex gap-2 justify-center flex-wrap">
      <NavLink to="/" end className={linkClass}>
        Formulario
      </NavLink>
      <NavLink to="/proyeccion-mensual" className={linkClass}>
        Proyección mensual
      </NavLink>
      <NavLink to="/proyeccion-anual" className={linkClass}>
        Proyección anual
      </NavLink>
    </nav>
  )
}

export default Nav
