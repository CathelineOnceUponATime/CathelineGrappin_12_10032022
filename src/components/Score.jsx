import { fetchInformation } from '../Api/Api'
import { useState, useEffect } from 'react'
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

function Score () {
  const [scoreUser, setScoreUser] = useState([])

  useEffect(() => {
    fetchScoreUser()
  }, [])

  async function fetchScoreUser () {
    const info = await fetchInformation()
    setScoreUser(info)
  }

  console.log('information :' + scoreUser?.data?.score)
  return (
    <div className='scoreTruc'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart cx='50%' cy='50%' innerRadius='10%' outerRadius='80%' barSize={10} data={scoreUser?.data}>
          <RadialBar dataKey='score' fill='#E60000' />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score
