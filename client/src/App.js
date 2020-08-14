import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import Globe from './components/ui/Globe'
import Zoom from './components/ui/Zoom'
import Guix from './components/ui/Guix'
import './App.css'

const App = () => {

  const [videoEnded, setVideoEnded] = useState(false)
  const [location, setLocation] = useState('')

  const zoom = <Zoom videoEnd={(q) => setVideoEnded(q)} />
  const globe = <Globe />
  const page = <Guix />

  return (
    <div className="Container">
      <Header />
      <Search getLocation={(q) => setLocation(q)} />
      { videoEnded && location.length > 0 ? page : location.length > 0 ? zoom : globe }
    </div>
  )
}

export default App


