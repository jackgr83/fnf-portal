import React, { useState, useEffect } from 'react'
import vid from '../img/Opening.mp4'
import tVid from '../img/Ecuador.mp4'
import Dotspot from '../components/ui/Dotspot'
import Dialog from "@material-ui/core/Dialog"
import { A, navigate } from 'hookrouter'
import PreviewVideo from '../components/ui/PreviewVideo'
import Header from '../components/ui/Header'
import bg from '../img/bg.jpg'


const Opening = () => {

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
            <Dialog
                onClose={closeVideo}
                aria-labelledby="simple-dialog-title"
                open={!video}
            >
                <video id="video" width="400" autoPlay onEnded={() => setVideo(true)}>
                    <source src={tVid} type="video/mp4"></source>
                </video>
            </Dialog>
            <div className="center">
            <video id="vid" width="50%" height="50%" onEnded={() => navigate('/Section1', false)}>
                <source src={vid} type="video/mp4"></source>
            </video>
            </div>

            <Dotspot position={{left: '30%', top: '50%'}} 
                     a={<A style={{color: 'white'}} href='/SantaMonica'>&#9679;</A>}
                     tip={<div>1996-2003 The Vision<br></br>sparks the ReDreaming<br></br>Movement</div>} />         
            <Dotspot position={{left: '70%', top: '50%'}} 
                     a={<A style={{color: 'white'}} href='/Otavalo'>&#9679;</A>}
                     tip={<div>2000-2005<br></br>ReDreaming<br></br>Seminars</div>} />         
            <Dotspot position={{left: '42%', top: '40%'}} 
                     a={<A style={{color: 'white'}} href='/Babel'>&#9679;</A>}
                     tip={<div>Midnight 2000<br></br>Tower of Babel</div>} />      

            <button className="SkipButton" onClick={() => navigate('/Section1', false)}>SKIP</button>   
        </div>
    )
}

export default Opening
