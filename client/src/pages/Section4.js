import React, { useState, useEffect } from 'react'
import ge from '../img/GuixExplanation.PNG'
import rm from '../img/90day.PNG'
import hf from '../img/founders.PNG'
import pp from '../img/proposition.PNG'
import ecomama from '../img/ecomama.PNG'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'
import jn from '../img/jonathan.mp4'
import Header from '../components/ui/Header'
import bg from '../img/bg.jpg'
import Dotspot from '../components/ui/Dotspot'
import { A } from 'hookrouter'

const Section4 = () => {

    useEffect(() => { 
        document.body.style.backgroundImage = `url(${bg})`
        return () => {document.body.style.backgroundImage = ''} 
    })

    return (
        <div>
            <Header />
            <div className="center">
                <video id="vid" width="50%" height="50%" autoPlay controls>
                    <source src={jn} type="video/mp4"></source>
                </video>
            </div>

            <Dotspot position={{left: '30%', top: '50%'}} 
                     a={<A style={{color: 'white'}} href='/SantaMonica'>&#9679;</A>}
                     tip={<div>SCX - Constructing 1st Value Chains</div>}
                     black={true} />         
            <Dotspot position={{left: '70%', top: '50%'}} 
                     a={<A style={{color: 'white'}} href='/Otavalo'>&#9679;</A>}
                     tip={<div>EcoMama Brand Certification</div>} 
                     black={true} />         
            <Dotspot position={{left: '42%', top: '40%'}} 
                     a={<A style={{color: 'white'}} href='/Babel'>&#9679;</A>}
                     tip={<div>Ecomama Product Group - Products and Services</div>}
                     black={true} />  
            <Dotspot position={{left: '60%', top: '30%'}} 
                     a={<A style={{color: 'white'}} href='/Babel'>&#9679;</A>}
                     tip={<div>Organizing Direct Distribution - Proof of Concepts</div>}
                     black={true} />  
            {/* <div className='flexContainer'>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={rm} />} tip={ <div>Our 90 Day Roadmap</div> } ></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={ge} />} tip={ <div>Guix Explanation</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={hf} />} tip={ <div>History and Founders</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={pp} />} tip={ <div>Our Proposition</div> }></Hotspot></div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            <PreviewVideo fForm={true} title={<div>Our Proposition</div>} /> */}
        </div>
    )
}

export default Section4