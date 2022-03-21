import { fetchAverageSessionScore } from '../../Api'
import { useState, useEffect } from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'

function Score () {
  const [scoreUser, setScoreUser] = useState([])

  useEffect(() => {
    fetchScoreUser()
  }, [])

  async function fetchScoreUser () {
    const info = await fetchAverageSessionScore()
    setScoreUser(info)
  }

  console.log('information :' + scoreUser.data?.sessions?.[0].day)
  return (
    <div className='score'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart width='50%' height='50%'>
          <Pie data={scoreUser} dataKey='sessionLength' outerRadius={100} innerRadius={90} fill='#E60000' />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score
