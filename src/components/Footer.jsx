import relaxation from '../assets/relaxation.png'
import natation from '../assets/natation.png'
import cyclisme from '../assets/cyclisme.png'
import musculation from '../assets/musculation.png'
import { NavLink } from 'react-router-dom'

function Footer () {
  return (
    <footer>
      <nav>
        <NavLink to='/'><img src={relaxation} alt='relaxation' /></NavLink>
        <NavLink to='/'><img src={natation} alt='natation' /></NavLink>
        <NavLink to='/'><img src={cyclisme} alt='cyclisme' /></NavLink>
        <NavLink to='/'><img src={musculation} alt='musculation' /></NavLink>
      </nav>
      <p> Copiryght, SportSee 2020 </p>
    </footer>
  )
}

export default Footer
