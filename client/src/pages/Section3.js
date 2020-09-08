import React, { useState, useEffect } from 'react'
import { navigate } from 'hookrouter'
import Header from '../components/ui/Header'
import Globe from '../components/ui/Globe'
import Zoom from '../components/ui/Zoom'
import Search from '../components/ui/Search'

const Section3 = () => {

    const [videoEnded, setVideoEnded] = useState(false)
    const [location, setLocation] = useState('')
    const [micrositeUrl, setMicrositeUrl] = useState('')
    const [goClick, goClicked] = useState(false)

    const zoom = <Zoom videoEnd={(q) => setVideoEnded(q)} location={location} />
    const globe = <Globe />

    useEffect(() => { 
        document.body.style.backgroundColor = '#000'
        return () => {document.body.style.backgroundColor = 'white'} 
    })
    
    return (
        <div className="Container">
            <Header />
            <Search goClicked={(bool) => goClicked(bool)} setLocation={(q) => setLocation(q)} setMicrositeUrl={(q) => setMicrositeUrl(q)} />
            <br></br>
            { videoEnded && goClick ? navigate(`/${location}`, false) : goClick ? zoom : globe }
            {/* Navigate to Microsite Url below */}
            {/* { videoEnded && goClick ? window.open(micrositeUrl) : goClick ? zoom : globe } */}
        </div>
        
    )
}

export default Section3
