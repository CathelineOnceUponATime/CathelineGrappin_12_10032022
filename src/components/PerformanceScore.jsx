import { fetchInformationScore } from '../Api/Api'
import { CustomLegendScore } from '../assets/Custom'
import { useState, useEffect } from 'react'
import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts'

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
        <RadialBarChart cx='50%' cy='50%' innerRadius={90} barSize={10} outerRadius={120} data={scoreUser}>
          <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
          <Legend content={<CustomLegendScore />} width='50%' wrapperStyle={{ top: '30%', right: '25%', textAlign: 'center', border: 'none', borderRadius: 3, lineHeight: '18px', color: '#000000' }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceScore
