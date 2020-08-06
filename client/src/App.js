import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import Globe from './components/ui/Globe'
import Zoom from './components/ui/Zoom'

const App = () => {

  const [isSearched, setIsSearched] = useState(false)
  const [location, setLocation] = useState('')

  const zoom = <Zoom />
  const globe = <Globe />

  return (
    <div className="Container">
      <Header />
      <Search getLocation={(q) => setLocation(q)} />
      { location.length > 0 ? zoom : globe }
    </div>
  )
}

export default App


