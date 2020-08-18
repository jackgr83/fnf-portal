import React, { useState, useEffect } from 'react'
import { navigate } from 'hookrouter'
import Header from '../components/ui/Header'
import Globe from '../components/ui/Globe'
import Zoom from '../components/ui/Zoom'
import Search from '../components/ui/Search'

const Home = () => {

    const [videoEnded, setVideoEnded] = useState(false)
    const [location, setLocation] = useState('')

    const zoom = <Zoom videoEnd={(q) => setVideoEnded(q)} />
    const globe = <Globe />

    
    return (
        <div className="Container">
            <Header />
            { videoEnded && location.length > 0 ? navigate('/GifPage', false) : location.length > 0 ? zoom : globe }
            <br></br>
            { location.length == 0 ? <Search getLocation={(q) => setLocation(q)} /> : ''}
        </div>
        
    )
}

export default Home
