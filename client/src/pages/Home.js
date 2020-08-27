import React, { useState, useEffect } from 'react'
import { navigate } from 'hookrouter'
import Header from '../components/ui/Header'
import Globe from '../components/ui/Globe'
import Zoom from '../components/ui/Zoom'
import Search from '../components/ui/Search'

const Home = () => {

    const [videoEnded, setVideoEnded] = useState(false)
    const [location, setLocation] = useState('')
    const [goClick, goClicked] = useState(false)

    const zoom = <Zoom videoEnd={(q) => setVideoEnded(q)} />
    const globe = <Globe />
    
    return (
        <div className="Container">
            <Header />
            <Search goClicked={(bool) => goClicked(bool)} setLocation={(q) => setLocation(q)} />
            <br></br>
            { videoEnded && goClick ? navigate(`/${location}`, false) : goClick ? zoom : globe }
        </div>
        
    )
}

export default Home
