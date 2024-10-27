import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Pressure_history from './Components/nav/Pressure_history'
import PastAlerts from './Components/nav/PastAlerts'
import Temperature_History from './Components/nav/Temperature_History'
import Load_History from './Components/nav/Load_History'
import Help from './Components/nav/Help'
import Heat_History from './Components/nav/Heat_History'
import Speed_History from './Components/nav/Speed_History'

const App = () => {
  const [toggleMenu,settoggleMenu] = useState(false)
  const [percentage,setpercentage] = useState(0)
  const [pressure,setpressure] = useState(0)
  const [temp,settemp] = useState(0)
  const [topMeanLoad,settopMeanLoad] = useState(0)
  const [bottomMeanLoad,setbottomMeanLoad] = useState(0)
  const [speed,setspeed] = useState(0)
  const [topTKPH,settopTKPH] = useState(0)
  const [bottomTKPH,setbottomTKPH] = useState(0)

  //pressure history
  const [aPressure,setaPressure] = useState(0)
  const [bPressure,setbPressure] = useState(0)
  const [cPressure,setcPressure] = useState(0)
  const [dPressure,setdPressure] = useState(0)

  //pressure history
  const [aTemp,setaTemp] = useState(0)
  const [bTemp,setbTemp] = useState(0)
  const [cTemp,setcTemp] = useState(0)
  const [dTemp,setdTemp] = useState(0)

  // time or date for graph
  const [aTime,setaTime] = useState("")
  const [bTime,setbTime] = useState("")
  const [cTime,setcTime] = useState("")
  const [dTime,setdTime] = useState("")
  
  // meanload - 50-250tons
  // speed - 10-35km/hr
  
  useEffect(() =>{
    setInterval(() => {
      const speedValue = 20
      setspeed(speedValue)
      const meanLoad = Math.floor(Math.random()*200 + 50)
      const singleTyreTopLoad = ((meanLoad * 40) / 100) / 2
      const singleTyreBottomLoad = ((meanLoad * 60) / 100) / 4
      settopMeanLoad(singleTyreTopLoad)
      setbottomMeanLoad(singleTyreBottomLoad)
      settopTKPH(Math.floor(singleTyreTopLoad * speedValue))
      setbottomTKPH(Math.floor(singleTyreBottomLoad * speedValue))
    }, 5000);
  },[])

  //API data
  const API_KEY = "AIzaSyBzg9H0cclc_qacxvtUsZGgkCfD-Uu_6E4"
  const RANGE = "tpmsdata"
  const SPREADSHEETID = "1OcQ5n-DG_6Gpt6exVGyPmTBwACwZTnu8DF8ypQL8Q0E"
  const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEETID}/values/${RANGE}?key=${API_KEY}`

  //API calling
  async function api(){
    try{
      const response = await fetch(URL)
      if(!response.ok)
      {
        console.log("ERROR IN FETCH")
      }
      const data = await response.json()
      //these three data for graph
      const lastData = data.values[data.values.length-1]
      const value = lastData[1]
      const pressureValue = Math.round(value.slice(0,5))           //setting pressure
      
      //these are last seven values of pressure used for graph purpose
      setaPressure(data.values[data.values.length-1][1].slice(0,5))
      setbPressure(data.values[data.values.length-2][1].slice(0,5))
      setcPressure(data.values[data.values.length-3][1].slice(0,5))
      setdPressure(data.values[data.values.length-4][1].slice(0,5))

      //these are last seven values of Temperature used for graph purpose
      setaTemp(data.values[data.values.length-1][1].slice(11,16))
      setbTemp(data.values[data.values.length-2][1].slice(11,16))
      setcTemp(data.values[data.values.length-3][1].slice(11,16))
      setdTemp(data.values[data.values.length-4][1].slice(11,16))

      //time or date for graph
      setaTime(data.values[data.values.length-1][0].slice(11,19))
      setbTime(data.values[data.values.length-2][0].slice(11,19))
      setcTime(data.values[data.values.length-3][0].slice(11,19))
      setdTime(data.values[data.values.length-4][0].slice(11,19))

      const tempValue = value.slice(11,16)                         //setting temperature
      const pressureInPercentage = (pressureValue / 20) * 100      //setting percentage for pressure
      // console.log(lastData)
      setpressure(pressureValue)
      settemp(tempValue)
      setpercentage(pressureInPercentage)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{
    // api()
    setInterval(api,1000)    //calling api data for every 1sec
  },[])

  return (
    <>
      <Header toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} />
      <Routes>
        <Route path='/' element={<Home toggleMenu={toggleMenu} percentage={percentage} pressure={pressure} temp={temp} topMeanLoad={topMeanLoad} bottomMeanLoad={bottomMeanLoad} speed={speed} topTKPH={topTKPH} bottomTKPH={bottomTKPH} />} />
        <Route path='/pressurehistory' element={<Pressure_history toggleMenu={toggleMenu} aPressure={aPressure} bPressure={bPressure} cPressure={cPressure} dPressure={dPressure} aTime={aTime} bTime={bTime} cTime={cTime} dTime={dTime} />} />
        <Route path='/temphistory' element={<Temperature_History toggleMenu={toggleMenu} aTemp={aTemp} bTemp={bTemp} cTemp={cTemp} dTemp={dTemp} aTime={aTime} bTime={bTime} cTime={cTime} dTime={dTime} />} />
        <Route path='/pastalerts' element={<PastAlerts />} />
        <Route path='/loadhistory' element={<Load_History />} />
        <Route path='/help' element={<Help />} />
        <Route path='/heathistory' element={<Heat_History />} />
        <Route path='/speedhistory' element={<Speed_History />} />
      </Routes>
    </>
  )
}

export default App