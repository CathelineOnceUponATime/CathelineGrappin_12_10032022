import logo from '../assets/logo.png'

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
