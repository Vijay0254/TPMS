import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Title from './Components/Title'
import Home from './Components/Home'

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
      const lastData = data.values[data.values.length-1]
      const value = lastData[1]
      const pressureValue = Math.round(value.slice(0,5))           //setting pressure
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
    <div>
      <Header toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} />
      <Title />
      <Home toggleMenu={toggleMenu} percentage={percentage} pressure={pressure} temp={temp} topMeanLoad={topMeanLoad} bottomMeanLoad={bottomMeanLoad} speed={speed} topTKPH={topTKPH} bottomTKPH={bottomTKPH} />
    </div>
  )
}

export default App