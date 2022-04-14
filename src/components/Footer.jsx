import relaxation from '../assets/relaxation.png'
import natation from '../assets/natation.png'
import cyclisme from '../assets/cyclisme.png'
import musculation from '../assets/musculation.png'
/**
 * Un élèment Footer HTML agrémentées
 * des logos des différentes activités.
 * @component
 */
function Footer () {
  return (
    <footer>
      <nav>
        <div className='footer'><img src={relaxation} alt='relaxation' /></div>
        <div className='footer'><img src={natation} alt='natation' /></div>
        <div className='footer'><img src={cyclisme} alt='cyclisme' /></div>
        <div className='footer'><img src={musculation} alt='musculation' /></div>
      </nav>
      <p> Copiryght, SportSee 2020 </p>
    </footer>
  )
}

export default Footer
