import React, { useState, useEffect } from 'react'
import ge from '../img/GuixExplanation.PNG'
import rm from '../img/90day.PNG'
import hf from '../img/founders.PNG'
import pp from '../img/proposition.PNG'
import ecomama from '../img/ecomama.PNG'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'
import ec from '../img/infographic.mp4'
import am from '../img/you.mov'
import op from '../img/guix.mp4'
import jn from '../img/intro.mov'
import { navigate } from 'hookrouter'
import s1 from '../img/intro_thumbnail.jpg'
import s2 from '../img/founders_thumbnail.jpg'
import s3 from '../img/global-economy_thumbnail.jpg'

const Section1 = () => {

    const [videoSrc, setVideoSrc] = useState({})
    const [videoClicked, setVideoClicked] = useState(false)
    const [videoTitle, setVideoTitle] = useState('')
    const [thumbnail1, setThumbnail1] = useState(true)
    const [thumbnail2, setThumbnail2] = useState(true)
    const [thumbnail3, setThumbnail3] = useState(true)
    const [thumbnail4, setThumbnail4] = useState(true)

    const playPreview = (id) => {
        if(id == 'ecVideo'){setThumbnail1(false)} else if
        (id == 'amVideo'){setThumbnail2(false)} else if 
        (id == 'opVideo'){setThumbnail3(false)} else if
        (id == 'jnVideo'){setThumbnail4(false)}
        
        var video = document.getElementById(id)
        video.currentTime=0
        video.play()
        setInterval(() => {
            if (video.currentTime>1){
                video.pause()
                if(id == 'ecVideo'){setThumbnail1(true)} else if
                (id == 'amVideo'){setThumbnail2(true); } else if 
                (id == 'opVideo'){setThumbnail3(true)} else if
                (id == 'jnVideo'){setThumbnail4(true)}
                video.currentTime=0
            }
        },1000)
    }

    const stopPreview = (id) => {
        if(id == 'ecVideo'){setThumbnail1(true)} else if
        (id == 'amVideo'){setThumbnail2(true)} else if 
        (id == 'opVideo'){setThumbnail3(true)} else if
        (id == 'jnVideo'){setThumbnail4(true)}

        var video = document.getElementById(id)
        video.pause()
        video.currentTime=0
    }

    const playVideo = (id, title) => {
        setVideoSrc(id)
        setVideoTitle(title)
        setVideoClicked(true)
    }

    useEffect(() => {
        if (!thumbnail1){
            document.getElementById('ecVideo').style.display = 'block'
        } else if (thumbnail1) {
            document.getElementById('ecVideo').style.display = 'none'
        }
        if (!thumbnail2){
            document.getElementById('amVideo').style.display = 'block'
        } else if (thumbnail2) {
            document.getElementById('amVideo').style.display = 'none'
        }
        if (!thumbnail3){
            document.getElementById('opVideo').style.display = 'block'
        } else if (thumbnail3) {
            document.getElementById('opVideo').style.display = 'none'
        }
        if (!thumbnail4){
            document.getElementById('jnVideo').style.display = 'block'
        } else if (thumbnail4) {
            document.getElementById('jnVideo').style.display = 'none'
        }
    })

    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'>
                    { thumbnail1 && <img className="shadow" width="400" src={s1}
                                       onMouseEnter={() => playPreview("ecVideo")}
                                    //    onMouseLeave={() => setPrev1Paused(false)}
                                    ></img> } 
                    <Hotspot icon={
                        <video className="shadowV" id="ecVideo" width="400" style={{cursor: 'pointer'}}
                            // onMouseEnter={() => playPreview("ecVideo")}
                            onMouseLeave={() => stopPreview("ecVideo")}
                            onClick={() => playVideo(ec, "Hotspot Explanation")}
                        >
                            <source src={ec} type="video/mp4"></source>
                        </video>
                    } tip={ <div>Hotspot Explanation</div> } ></Hotspot> 
                    
                </div>
                <div className='flexItem'>
                { thumbnail2 && <img className="shadow" width="400" src={s2}
                                       onMouseEnter={() => playPreview("amVideo")}
                                    //    onMouseLeave={() => stopPreview("ecVideo")}
                                    ></img> } 
                    <Hotspot icon={
                        <video className="shadowV" id="amVideo" width="400" style={{cursor: 'pointer'}}
                            onMouseEnter={() => playPreview("amVideo")}
                            onMouseLeave={() => stopPreview("amVideo")}
                            onClick={() => playVideo(am, "Virtual World demo")}
                        >
                            <source src={am} type="video/mp4"></source>
                        </video>
                    } tip={ <div>Virtual World demo</div> } ></Hotspot>
                </div>
                <div className='flexItem'>
                { thumbnail3 && <img className="shadow" width="400" src={s3}
                                       onMouseEnter={() => playPreview("opVideo")}
                                    //    onMouseLeave={() => stopPreview("ecVideo")}
                                    ></img> } 
                    <Hotspot icon={
                        <video className="shadowV" id="opVideo" width="400" style={{cursor: 'pointer'}}
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
            <div style={{color: 'black'}} onClick={() => navigate('/Section2', false)}>
                <Hotspot position={{position: 'absolute', left: '90%', top: '85%', cursor: 'pointer'}}tip={<div>Section 2</div>} icon={<span style={{fontSize: '40px'}}>&#8680;</span>}></Hotspot>
            </div>
            <div style={{color: 'black'}} onClick={() => navigate('/', false)}>
                <Hotspot position={{position: 'absolute', right: '90%', top: '85%', cursor: 'pointer'}}tip={<div>Opening</div>} icon={<span style={{fontSize: '40px'}}>&#8678;</span>}></Hotspot>
            </div>
        </div>
    )
}

export default Section1
