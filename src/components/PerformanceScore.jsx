import { fetchInformationScore } from '../Api/Api'
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
  function renderLegend (props) {
    const { payload } = props
    return (
      <div>
        <p className='Score_pourcent'>
          {payload?.[0]?.payload?.todayScore}%
        </p>
        <p className='Score_legend'> de votre objectif</p>
      </div>
    )
  }
  console.log('information nfvfb :' + scoreUser?.todayScore)
  return (
    <div className='scoreTruc'>
      <h3> Score </h3>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart cx='50%' cy='50%' innerRadius='60%' outerRadius='80%' barSize={50} data={scoreUser}>
          <RadialBar cornerRadius='50%' clockWise dataKey='todayScore' fill='#E60000' startAngle={180} endAngle={190} />
          <Legend content={renderLegend} width='50%' wrapperStyle={{ top: '37.5%', right: '25%', textAlign: 'center', border: 'none', borderRadius: 3, lineHeight: '18px', color: '#000000' }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceScore
