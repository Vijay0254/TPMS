import React, { useEffect } from 'react'
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from 'recharts'

const Temperature_History = ({ toggleMenu, aTemp , bTemp , cTemp , dTemp , aTime , bTime , cTime , dTime }) => {
    
    const item = [
        {
          "label": dTime,
          "Temperature": dTemp,
        },
        {
          "label": cTime,
          "Temperature": cTemp,
        },
        {
          "label": bTime,
          "Temperature": bTemp,
        },
        {
          "label": aTime,
          "Temperature": aTemp,
        },
      ]

      //using above we split in 6 tyre...In future we need to add 5 more tyres
      const items = [
        {
          id: 1,
          tyre: "Front Left Tyre",
          name: item  //Front Left
        },
        {
          id: 2,
          tyre: "Middle Left Tyre",
          name: item  //Middle Left
        },
        {
          id: 3,
          tyre: "Rear Left Tyre",
          name: item  //Rear Left
        },
        {
          id: 4,
          tyre: "Front Right Tyre",
          name: item  //Front Right
        },
        {
          id: 5,
          tyre: "Middle Right Tyre",
          name: item  //Middle Right
        },
        {
          id: 6,
          tyre: "Rear Right Tyre",
          name: item  //Rear Right
        }
      ]

  return (
  <>
    {!toggleMenu && <section className='grid pr-5 md:pt-10 grid-cols-1 md:grid-cols-3 gap-y-10 pb-20'>
      {items.map((element) =>(
        <div className='md:w-[500px] text-center pt-10'>
        <h1 className='text-2xl pl-5 font-bold text-white'>{element.tyre}</h1>
        <ResponsiveContainer height={300}>
          <LineChart width={450} height={300} data={element.name} margin={{top: 30}}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="Temperature" stroke='white' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      ))}
    </section>}
  </>
  )
}


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-white p-2 text-xs rounded-md">
        <p>{label}</p>
        <p>Temperature: <span className='text-green-500'>{payload[0].value}°C</span></p>
      </div>
    );
  }
}

export default Temperature_History