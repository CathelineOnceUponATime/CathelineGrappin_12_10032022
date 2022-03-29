/**
 * 
 * @param {String} icone l'url de l'icone
 * @param {Number}  nbGramme
 * @returns 
 */
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

export default Information
