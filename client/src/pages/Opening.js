import React, { useState, useEffect } from 'react'
import vid from '../img/Opening.mp4'
import Dotspot from '../components/ui/Dotspot'
import { A } from 'hookrouter'
import PreviewVideo from '../components/ui/PreviewVideo'
import Header from '../components/ui/Header'
import bg from '../img/bg.jpg'


const Opening = () => {

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [video, setVideo] = useState(false)

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
            <PreviewVideo title={"Title Video"} ended={(bool) => setVideo(bool) } />
            <div className="center">
            <video id="vid" width="50%" height="50%">
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

            {/* <div
                    className={ hover1 ? 'dotHov' : 'dot'}
                    style={{left: '30%', top: '50%'}}
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}
                >
                    <A style={{color: 'white'}} href='/SantaMonica'>&#9679;</A>
            </div>
            <div
                    className={ hover2 ? 'dotHov' : 'dot'}
                    style={{left: '70%', top: '50%'}}
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}
                >
                    <A style={{color: 'white'}} href='/Otavalo'>&#9679;</A>
            </div>    
            <div
                    className={ hover3 ? 'dotHov' : 'dot'}
                    style={{left: '42%', top: '40%'}}
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                >
                    <A style={{color: 'white'}} href='/Babel'>&#9679;</A>
            </div>     */}
        </div>
    )
}

export default Opening
