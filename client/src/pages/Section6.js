import React, { useState, useEffect } from 'react'
import ge from '../img/GuixExplanation.PNG'
import rm from '../img/90day.PNG'
import hf from '../img/founders.PNG'
import pp from '../img/proposition.PNG'
import ecomama from '../img/ecomama.PNG'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'
import ec from '../img/GuixEx.mov'
import am from '../img/4thHotspot.mov'
import op from '../img/virtual.mp4'
import jn from '../img/Oyakachi.mp4'
import {navigate} from 'hookrouter'

const Section6 = () => {

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
                    <Hotspot icon={
                        <video className="shadow" id="ecVideo" width="400" style={{cursor: 'pointer'}}
                            onMouseEnter={() => playPreview("ecVideo")}
                            onMouseLeave={() => stopPreview("ecVideo")}
                            onClick={() => playVideo(ec, "Hotspot Explanation")}
                        >
                            <source src={ec} type="video/mp4"></source>
                        </video>
                    } tip={ <div>Hotspot Explanation</div> } ></Hotspot>
                    
                </div>
                <div className='flexItem'>
                    <Hotspot icon={
                        <video className="shadow" id="amVideo" width="400" style={{cursor: 'pointer'}}
                            onMouseEnter={() => playPreview("amVideo")}
                            onMouseLeave={() => stopPreview("amVideo")}
                            onClick={() => playVideo(am, "Virtual World demo")}
                        >
                            <source src={am} type="video/mp4"></source>
                        </video>
                    } tip={ <div>Virtual World demo</div> } ></Hotspot>
                </div>
                <div className='flexItem'>
                    <Hotspot icon={
                        <video className="shadow" id="opVideo" width="400" style={{cursor: 'pointer'}}
                            onMouseEnter={() => playPreview("opVideo")}
                            onMouseLeave={() => stopPreview("opVideo")}
                            onClick={() => playVideo(op, "Virtual Communities")}
                        >
                            <source src={op} type="video/mp4"></source>
                        </video>
                    } tip={ <div>Virtual communities</div> } ></Hotspot>
                </div>
                <div className='flexItem'>
                    <Hotspot icon={
                        <video className="shadow" id="jnVideo" width="400" style={{cursor: 'pointer'}}
                            onMouseEnter={() => playPreview("jnVideo")}
                            onMouseLeave={() => stopPreview("jnVideo")}
                            onClick={() => playVideo(jn, "Oyakachi zoom")}
                        >
                            <source src={jn} type="video/mp4"></source>
                        </video>
                    } tip={ <div>Oyakachi zoom</div> } ></Hotspot>
                </div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            { videoClicked ? <PreviewVideo fForm={true} title={<div>{videoTitle}</div>} src={videoSrc} setVid={(bool) => setVideoClicked(bool)} /> : '' }
            <div style={{color: 'black'}} onClick={() => navigate('/Section7', false)}>
                <Hotspot position={{position: 'absolute', left: '90%', top: '85%', cursor: 'pointer'}}tip={<div>Section 7</div>} icon={<span style={{fontSize: '40px'}}>&#8594;</span>}></Hotspot>
            </div>
            <div style={{color: 'black'}} onClick={() => navigate('/Section5', false)}>
                <Hotspot position={{position: 'absolute', right: '90%', top: '85%', cursor: 'pointer'}}tip={<div>Section 5</div>} icon={<span style={{fontSize: '40px'}}>&#8592;</span>}></Hotspot>
            </div>
        </div>
    )
}

export default Section6