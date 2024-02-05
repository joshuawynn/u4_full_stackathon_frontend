import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Rides from './components/Rides'
import Client from './services/api.js'

function App() {

  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      let res = await Client.get('/rides')
      setRides(res.data)
    }
    getRides();
  }, [])


  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rides' element={<Rides rides={rides}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
