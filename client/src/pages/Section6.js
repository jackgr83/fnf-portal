import React, { useState, useEffect } from 'react'
import { A, navigate } from 'hookrouter'
import Header from '../components/ui/Header'
import bg from '../img/bg.jpg'
import regd from '../img/regd.mp4'
import Hotspot from '../components/ui/Hotspot'
import Dotspot from '../components/ui/Dotspot'



const Section6 = () => {

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [video, setVideo] = useState(false)

    const closeVideo = (e) => {
        e.preventDefault()
        setVideo(true)
    }

    useEffect(() => { 
        document.body.style.backgroundImage = `url(${bg})`
        if ( video ) {
            document.getElementById("vid").play()
        }
        return () => {document.body.style.backgroundImage = ''} 
    })

    return (
        <div className="Container">
            <Header />
            <div className="center">
                <video id="vid" width="50%" height="50%" autoPlay onEnded={() => navigate('/Section7', false)}>
                    <source src={regd} type="video/mp4"></source>
                </video>
            </div>

            <Dotspot position={{left: '30%', top: '50%'}} 
                     a={<A style={{color: 'white'}} href=''>&#9679;</A>}
                     tip={<div>View the Pawan Whitepaper document</div>}
                     black={true} />         
            <Dotspot position={{left: '70%', top: '50%'}} 
                     a={<A style={{color: 'white'}} href=''>&#9679;</A>}
                     tip={<div>View the Offering Memorandum</div>}
                     black={true} /> 

            <div style={{color: 'white'}} onClick={() => navigate('/Section5', false)}>
                <Hotspot position={{position: 'absolute', right: '90%', top: '85%', cursor: 'pointer'}}tip={<div>Section 5</div>} icon={<span style={{fontSize: '40px'}}>&#8678;</span>}></Hotspot>
            </div>
        </div>

    )
}

export default Section6