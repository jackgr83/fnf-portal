import React, { useState, useEffect } from 'react'
import Opening from './pages/Opening'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import Section4 from './pages/Section4'
import Section5 from './pages/Section5'
import Section6 from './pages/Section6'
import Section7 from './pages/Section7'
import NotFoundPage from './NotFoundPage'
import { useRoutes } from 'hookrouter'
import './App.css'
import SantaMonica from './pages/SantaMonica'
import Babel from './pages/Babel'
import Ecuador from './pages/Ecuador'
import CrunchyCakes from './pages/CrunchyCakes'
import Otavalo from './pages/Otavalo'
import LaRocca from './pages/LaRocca'
import Cart from './pages/Cart'

const routes = {
  '/': () => <Opening />,
  '/Section1': () => <Section1 />,
  '/SantaMonica': () => <SantaMonica />,
  '/Babel': () => <Babel />,
  '/Ecuador': () => <Ecuador />,
  '/CrunchyCakes': () => <CrunchyCakes />,
  '/LaRocca': () => <LaRocca />,
  '/Otavalo': () => <Otavalo />,
  '/Cart': () => <Cart />,
  '/Section2': () => <Section2 />,
  '/Section3': () => <Section3 />,
  '/Section4': () => <Section4 />,
  '/Section5': () => <Section5 />,
  '/Section6': () => <Section6 />,
  '/Section7': () => <Section7 />
}

const App = () => {

  const routeResult = useRoutes(routes)
  return routeResult || <NotFoundPage />
  
}

export default App


