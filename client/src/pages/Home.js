import React, { useState, useEffect } from 'react'
import {useRoutes, useRedirect} from 'hookrouter'
import Header from '../components/ui/Header'
import Globe from '../components/ui/Globe'
import Search from '../components/ui/Search'

const Home = () => {

    // const [videoEnded, setVideoEnded] = useState(false)
    // const [location, setLocation] = useState('')

    
    
    



    return (
        <div className="Container" onClick={() => handleClick()}>
            <Header />
            <Globe />
            <br></br>
            <Search />
        </div>
        
    )
}

export default Home
