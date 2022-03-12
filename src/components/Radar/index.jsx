import { fetchPerformance } from '../../Api'
import { useState, useEffect } from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart } from 'recharts'

function Radar () {
  const [performance, setPerformance] = useState([])

  useEffect(() => {
    fetchPerformanceUser()
  }, [])

  async function fetchPerformanceUser () {
    const info = await fetchPerformance(18)
    setPerformance(info)
  }

  console.log('information :' + performance.data?.data?.[0].value)
  return (
    <div className='radar'>
      <RadarChart outerRadius={90} width={730} height={250} data={performance.data?.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='kind' />
        <PolarRadiusAxis angle={30} domain={[0, 240]} />
        <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
      </RadarChart>
    </div>
  )
}

export default Radar
