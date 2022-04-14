import { fetchInformationScore } from '../Api/Api'
import { CustomLegendScore } from './Custom'
import { useState, useEffect } from 'react'
import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts'
/**
 * un graphique représentant un objectif
 * plus ou moins rempli en %.
 * @component
 */
function PerformanceScore () {
  const [scoreUser, setScoreUser] = useState([])

  useEffect(() => {
    fetchScoreUser()
  }, [])

  async function fetchScoreUser () {
    const info = await fetchInformationScore()
    setScoreUser(info)
  }

  return (
    <div className='scoreTruc'>
      <h3> Score </h3>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={scoreUser}>
          <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
          <Legend content={<CustomLegendScore />} width='50%' wrapperStyle={{ top: '20%', right: '17.5%', textAlign: 'center', border: 'none', borderRadius: '50%', lineHeight: '18px', backgroundColor: 'white', padding: '15px' }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceScore
