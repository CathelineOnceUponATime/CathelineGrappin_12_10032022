import { fetchInformation, fetchInformationUserInfo } from '../Api/Api'
import { useState, useEffect } from 'react'
import calorie from '../assets/calorie.svg'
import proteine from '../assets/proteine.svg'
import glucide from '../assets/glucide.svg'
import lipide from '../assets/lipide.svg'
import Information from '../components/Information'
import Activity from '../components/Activity'
import PerformanceRadar from '../components/PerformanceRadar'
import Objectif from '../components/Objectif'
import PerformanceScore from '../components/PerformanceScore'
import Error from '../components/Error'

/**
 * la page d'accueil principale
 * si un problème de connexion à la base de données
 * est detecté dans ce cas le composant 'Error' est affiché.
 * Sinon tous les graphiques sont affichés.
 * @component
 */
function Accueil () {
  const [information, setInformation] = useState([])
  const [informationUser, setInformationUser] = useState([])
  let connexionBdd = false

  useEffect(() => {
    fetchInformationUser()
  }, [connexionBdd])

  async function fetchInformationUser () {
    const info = await fetchInformation()
    setInformation(info)
    const infoUser = await fetchInformationUserInfo()
    setInformationUser(infoUser)
  }

  if (informationUser?.firstName !== undefined) {
    connexionBdd = true
  } else {
    connexionBdd = false
  }

  return (
    connexionBdd
      ? (
        <div className='accueil'>
          <h1> Bonjour <span className='nom'> {informationUser?.firstName} </span> </h1>
          <h2> Félicitations ! Vous avez explosé vos objectifs hier 👏 </h2>
          <div className='separation-stat'>
            <div className='stat'>
              <div className='activity-graph'>
                <Activity />
              </div>
              <div className='graph-objectif'>
                <Objectif />
                <PerformanceRadar />
                <PerformanceScore />
              </div>
            </div>
            <div className='information-stat'>
              <Information icone={calorie} nbGramme={information?.calorieCount} type='Calories' />
              <Information icone={proteine} nbGramme={information?.proteinCount} type='Proteines' />
              <Information icone={glucide} nbGramme={information?.carbohydrateCount} type='Glucides' />
              <Information icone={lipide} nbGramme={information?.lipidCount} type='Lipides' />
            </div>
          </div>
        </div>
        )
      : (<Error />)
  )
}

export default Accueil
