import { fetchActivity } from '../Api/Api'
import { useState, useEffect } from 'react'
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts'

function Activity () {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetchActivityUser()
  }, [])

  async function fetchActivityUser () {
    const info = await fetchActivity()
    setActivity(info)
  }
  return (
    <div className='activity'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart width='50%' height='50%' data={activity}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='day' />
          <XAxis dataKey='calories' type='number' />
          <YAxis dataKey='kilogram' type='number' orientation='right' tickCount={20} />
          <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
          <Tooltip cursor={{ strokeWidth: 2 }} />
          <Legend verticalAlign='top' align='right' />
          <Bar name='Poids (kg)' dataKey='kilogram' barSize={7} fill='#282D30' />
          <Bar name='Calories brûlées (kCal)' dataKey='calories' barSize={7} yAxisId='calorie' fill='#E60000' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity
