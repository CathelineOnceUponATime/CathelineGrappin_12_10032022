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
    <div className='scoreWrap'>
      <h3> Score </h3>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={scoreUser}>
          <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
          <Legend content={<CustomLegendScore />} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceScore
