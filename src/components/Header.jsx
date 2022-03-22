import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Header () {
  return (
    <header>
      <nav>
        <img src={logo} alt='logo' />
        <NavLink to='/'> Accueil </NavLink>
        <NavLink to='/'> Profil </NavLink>
        <NavLink to='/'> Réglage </NavLink>
        <NavLink className='communaute' to='/'> Communauté </NavLink>
      </nav>
    </header>
  )
}

export default Header
