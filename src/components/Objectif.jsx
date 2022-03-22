import { fetchAverageSession } from '../Api/Api'
import { useState, useEffect } from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, Legend } from 'recharts'

function Objectif () {
  const [objectifUser, setObjectifUser] = useState([])

  useEffect(() => {
    fetchObjectifUser()
  }, [])

  async function fetchObjectifUser () {
    const info = await fetchAverageSession()
    setObjectifUser(info)
  }

  console.log('information truc :' + objectifUser?.[6]?.day)
  return (
    <div className='objectif'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width='50%' height='50%' data={objectifUser}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ backgroundColor: '#FF0000' }}
        >
          <XAxis dataKey='day' stroke='#FFFFFF' />
          <Tooltip label='day' />
          <Legend />
          <Line type='monotone' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Objectif
