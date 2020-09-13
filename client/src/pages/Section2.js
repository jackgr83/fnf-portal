import React, { useState, useEffect } from 'react'
import ge from '../img/GuixExplanation.PNG'
import rm from '../img/90day.PNG'
import hf from '../img/founders.PNG'
import pp from '../img/proposition.PNG'
import ecomama from '../img/ecomama.PNG'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'
import ec from '../img/Ecuador.mp4'
import am from '../img/Amsterdam.mp4'
import op from '../img/Opening.mp4'
import jn from '../img/jonathan.mp4'

const Section2 = () => {

    const [videoSrc, setVideoSrc] = useState({})
    const [videoClicked, setVideoClicked] = useState(false)
    const [videoTitle, setVideoTitle] = useState('')

    const playPreview = (id) => {
        var video = document.getElementById(id)
        video.currentTime=0
        video.play()
        setInterval(() => {
            if (video.currentTime>1){
                video.pause()
                video.currentTime=0
            }
        },1000)
    }

    const stopPreview = (id) => {
        var video = document.getElementById(id)
        video.pause()
        video.currentTime=0
    }

    const playVideo = (id, title) => {
        setVideoSrc(id)
        setVideoTitle(title)
        setVideoClicked(true)
    }

    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'>
                    <video id="ecVideo" width="400" style={{cursor: 'pointer'}}
                        onMouseEnter={() => playPreview("ecVideo")}
                        onMouseLeave={() => stopPreview("ecVideo")}
                        onClick={() => playVideo(ec, "Ecuador")}
                    >
                        <source src={ec} type="video/mp4"></source>
                    </video>
                </div>
                <div className='flexItem'>
                    <video id="amVideo" width="400" style={{cursor: 'pointer'}}
                        onMouseEnter={() => playPreview("amVideo")}
                        onMouseLeave={() => stopPreview("amVideo")}
                        onClick={() => playVideo(am, "Amsterdam")}
                    >
                        <source src={am} type="video/mp4"></source>
                    </video>
                </div>
                <div className='flexItem'>
                    <video id="opVideo" width="400" style={{cursor: 'pointer'}}
                        onMouseEnter={() => playPreview("opVideo")}
                        onMouseLeave={() => stopPreview("opVideo")}
                        onClick={() => playVideo(op, "Opening")}
                    >
                        <source src={op} type="video/mp4"></source>
                    </video>
                </div>
                <div className='flexItem'>
                    <video id="jnVideo" width="400" style={{cursor: 'pointer'}}
                        onMouseEnter={() => playPreview("jnVideo")}
                        onMouseLeave={() => stopPreview("jnVideo")}
                        onClick={() => playVideo(jn, "Jonathan")}
                    >
                        <source src={jn} type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            { videoClicked ? <PreviewVideo fForm={true} title={<div>{videoTitle}</div>} src={videoSrc} setVid={(bool) => setVideoClicked(bool)} /> : '' }
        </div>
    )
}

export default Section2
