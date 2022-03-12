import { fetchActivity } from '../../Api'
import { useState, useEffect } from 'react'
import { BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Bar } from 'recharts'

function Activity () {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetchActivityUser()
  }, [])

  async function fetchActivityUser () {
    const info = await fetchActivity(18)
    setActivity(info)
  }

  console.log('information :' + activity.data?.sessions?.[0].day)
  return (
    <div className='activity'>
      <BarChart width={730} height={250} data={activity.data?.sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis />
        <YAxis type='number' dataKey='kilogram' />
        <Tooltip />
        <Legend />
        <Bar dataKey='kilogram' fill='#8884d8' />
        <Bar dataKey='calories' fill='#82ca9d' />
      </BarChart>
    </div>
  )
}

export default Activity
