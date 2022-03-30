import { fetchAverageSession } from '../Api/Api'
import { CustomTooltipObjectif } from '../assets/Custom'
import { useState, useEffect } from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'

function Objectif () {
  const [objectifUser, setObjectifUser] = useState([])

  useEffect(() => {
    fetchObjectifUser()
  }, [])

  async function fetchObjectifUser () {
    const info = await fetchAverageSession()
    setObjectifUser(info)
  }

  console.log('information objectif :' + objectifUser[0]?.sessionLength)
  return (
    <div className='objectif'>
      <h3> Durée moyenne des sessions </h3>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          className='objectif-line'
          width='50%' height='50%' data={objectifUser}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ backgroundColor: '#FF0000' }}
        >
          <XAxis dataKey='day' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} />
          <YAxis padding={{ top: 100 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
          <Tooltip content={<CustomTooltipObjectif />} />
          <Legend />
          <Line type='natural' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Objectif
