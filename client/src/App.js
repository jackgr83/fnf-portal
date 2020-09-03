import React, { useState, useEffect } from 'react';
import Amsterdam from './pages/Amsterdam'
import Brazil from './pages/Brazil'
import Ecuador from './pages/Ecuador'
import CrunchyCakes from './pages/CrunchyCakes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFoundPage from './NotFoundPage'
import { useRoutes } from 'hookrouter'
import './App.css'
import Otavalo from './pages/Otavalo';

const routes = {
  '/': () => <Home />,
  '/Amsterdam': () => <Amsterdam />,
  '/Brazil': () => <Brazil />,
  '/Ecuador': () => <Ecuador />,
  '/Otavalo': () => <Otavalo />,
  '/CrunchyCakes': () => <CrunchyCakes />,
  '/ShoppingCart': () => <Cart />
}

const App = () => {

  const routeResult = useRoutes(routes)
  return routeResult || <NotFoundPage />

  // const [videoEnded, setVideoEnded] = useState(false)
  // const [location, setLocation] = useState('')

  // const zoom = <Zoom videoEnd={(q) => setVideoEnded(q)} />
  // const globe = <Globe />
  // const page = <Ecuador />

  // return (
  //   <div className="Container">
  //     <Header />
  //     { videoEnded && location.length > 0 ? page : location.length > 0 ? zoom : globe }
  //     <br></br>
  //     { location.length == 0 ? <Search getLocation={(q) => setLocation(q)} /> : ''} 
  //   </div>
  // )
}

export default App


