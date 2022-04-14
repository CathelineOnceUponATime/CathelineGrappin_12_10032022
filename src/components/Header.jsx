import logo from '../assets/logo.png'
/**
 * Un élèment Header HTML incluant une barre de navigation
 * et le logo SportSee.
 * @component
 */
function Header () {
  return (
    <header>
      <nav>
        <img src={logo} alt='logo' />
        <span> Accueil </span>
        <span> Profil </span>
        <span> Réglage </span>
        <span className='communaute'> Communauté </span>
      </nav>
    </header>
  )
}

export default Header
