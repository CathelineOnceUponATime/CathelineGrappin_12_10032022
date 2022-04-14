/**
 * @param {String} icone l'url de l'icone
 * @param {Number} nbGramme le nombre de grammes ou de calories
 * @param {String} type le type d'information
 * @component
 */
import PropTypes from 'prop-types'

function Information ({ icone, nbGramme, type }) {
  return (
    <div className='information'>
      <div className={`information--user--${type.toLowerCase()}`}>
        <img src={icone} alt={type} />
      </div>
      <div>
        {type === 'Calories' ? <p className='info-gramme'> {nbGramme}kCal </p> : <p className='info-gramme'> {nbGramme}g </p>}
        <p className='info-type'> {type} </p>
      </div>
    </div>
  )
}

Information.propTypes = {
  icone: PropTypes.string.isRequired,
  nbGramme: PropTypes.number,
  type: PropTypes.string.isRequired
}

export default Information
