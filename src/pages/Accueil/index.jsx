import { fetchInformation } from '../../Api'
import { useState, useEffect } from 'react'
import calorie from '../../assets/calorie.svg'
import proteine from '../../assets/proteine.svg'
import glucide from '../../assets/glucide.svg'
import lipide from '../../assets/lipide.svg'
import Information from '../../components/Information'
import Activity from '../../components/Activity'
import Radar from '../../components/Radar'

function Accueil () {
  const [information, setInformation] = useState([])

  useEffect(() => {
    fetchInformationUser()
  }, [])
  async function fetchInformationUser () {
    const info = await fetchInformation(18)
    setInformation(info)
  }

  console.log('information :' + information?.data?.userInfos?.firstName)
  return (
    <div className='accueil'>
      <h1> Bonjour <span className='nom'> {information?.data?.userInfos?.firstName} </span> </h1>
      <h2> Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
      <div className='separation-stat'>
        <div>
          <div>
            <Activity />
          </div>
          <div>
            machin
            <Radar />
          </div>
        </div>
        <div className='information-stat'>
          <Information icone={calorie} nbGramme={information?.data?.keyData?.calorieCount} type='Calories' />
          <Information icone={proteine} nbGramme={information?.data?.keyData?.proteinCount} type='Proteines' />
          <Information icone={glucide} nbGramme={information?.data?.keyData?.carbohydrateCount} type='Glucides' />
          <Information icone={lipide} nbGramme={information?.data?.keyData?.lipidCount} type='Lipides' />
        </div>
      </div>
    </div>
  )
}

export default Accueil
