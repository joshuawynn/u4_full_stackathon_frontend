import './App.css'
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
      <header>

      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rides' element={<Rides rides={rides}/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
