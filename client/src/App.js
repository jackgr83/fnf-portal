import React, { useState, useEffect } from 'react';
// import Header from './components/ui/Header'
// import Search from './components/ui/Search'
// import Globe from './components/ui/Globe'
// import Zoom from './components/ui/Zoom'
import Guix from './components/ui/Guix'
import Cart from './components/ui/Cart'
import Home from './pages/Home'
import NotFoundPage from './NotFoundPage'
import {useRoutes} from 'hookrouter'
import './App.css'

const routes = {
  '/': () => <Home />,
  '/GifPage': () => <Guix />,
  '/ShoppingCart': () => <Cart />
}

const App = () => {

  const routeResult = useRoutes(routes)
  return routeResult || <NotFoundPage />

  // const [videoEnded, setVideoEnded] = useState(false)
  // const [location, setLocation] = useState('')

  // const zoom = <Zoom videoEnd={(q) => setVideoEnded(q)} />
  // const globe = <Globe />
  // const page = <Guix />

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


