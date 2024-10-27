import React, { useEffect } from 'react'
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from 'recharts'

const Pressure_history = ({ toggleMenu, aPressure , bPressure , cPressure , dPressure , aTime , bTime , cTime , dTime }) => {
    
    const item = [
        {
          "label": dTime,
          "Pressure": dPressure,
        },
        {
          "label": cTime,
          "Pressure": cPressure,
        },
        {
          "label": bTime,
          "Pressure": bPressure,
        },
        {
          "label": aTime,
          "Pressure": aPressure,
        },
      ]
  return (
  <>
    {!toggleMenu && <section className='grid pr-5 md:pt-10 grid-cols-1 md:grid-cols-3 gap-y-10 pb-20'>
      {/* FRONT-LEFT-TYRE */}
      <div className='md:w-[500px] text-center pt-10'>
        <h1 className='text-2xl pl-5 font-bold text-white'>Front Left Tyre</h1>
        <ResponsiveContainer height={300}>
          <LineChart width={450} height={300} data={item} margin={{top: 30}}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="Pressure" stroke='white' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* MIDDLE-LEFT-TYRE */}
      <div className='md:w-[500px] text-center pt-10'>
        <h1 className='text-2xl pl-5 font-bold text-white'>Middle Left Tyre</h1>
        <ResponsiveContainer className="md:w-[450px] w-[350px]" height={300}>
          <LineChart width={450} height={300} data={item} margin={{top: 30}}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="Pressure" stroke='white' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* REAR-LEFT-TYRE */}
      <div className='md:w-[500px] text-center pt-10'>
        <h1 className='text-2xl pl-5 font-bold text-white'>Rear Left Tyre</h1>
        <ResponsiveContainer className="md:w-[450px] w-[350px]" height={300}>
          <LineChart width={450} height={300} data={item} margin={{top: 30}}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="Pressure" stroke='white' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* FRONT-RIGHT-TYRE */}
      <div className='md:w-[500px] text-center pt-10'>
        <h1 className='text-2xl pl-5 font-bold text-white'>Front Right Tyre</h1>
        <ResponsiveContainer className="md:w-[450px] w-[350px]" height={300}>
          <LineChart width={450} height={300} data={item} margin={{top: 30}}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="Pressure" stroke='white' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* MIDDLE-RIGHT-TYRE */}
      <div className='md:w-[500px] text-center pt-10'>
        <h1 className='text-2xl pl-5 font-bold text-white'>Middle Right Tyre</h1>
        <ResponsiveContainer className="md:w-[450px] w-[350px]" height={300}>
          <LineChart width={450} height={300} data={item} margin={{top: 30}}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="Pressure" stroke='white' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* REAR-RIGHT-TYRE */}
      <div className='md:w-[500px] text-center pt-10'>
        <h1 className='text-2xl pl-5 font-bold text-white'>Rear Right Tyre</h1>
        <ResponsiveContainer className="md:w-[450px] w-[350px]" height={300}>
          <LineChart width={450} height={300} data={item} margin={{top: 30}}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="Pressure" stroke='white' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>}
  </>
  )
}
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-white p-2 text-xs rounded-md">
        <p>{label}</p>
        <p>Pressure: <span className='text-green-500'>{payload[0].value}psi</span></p>
      </div>
    );
  }
}

export default Pressure_history