import { fetchPerformance } from '../Api/Api'
import { useState, useEffect } from 'react'
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'

function PerformanceRadar () {
  const [performance, setPerformance] = useState([])

  useEffect(() => {
    fetchPerformanceUser()
  }, [])

  async function fetchPerformanceUser () {
    const data = await fetchPerformance()
    setPerformance(data)
  }
  if (performance.length === 0) return (<></>)
  return (
    <div className='radar'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius={65} width='50%' height='50%' data={performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' stroke='#FFFFFF' />
          <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceRadar
