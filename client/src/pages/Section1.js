import React, { useState, useEffect } from 'react'
import earth from '../img/earth.png'
import ge from '../img/GuixExplanation.PNG'
import rm from '../img/90day.PNG'
import hf from '../img/founders.PNG'
import pp from '../img/proposition.PNG'
import ecomama from '../img/ecomama.PNG'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'

const Section1 = () => {

    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'><Hotspot icon={<img src={rm} />} tip={ <div>Our 90 Day Roadmap</div> } ></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={ge} />} tip={ <div>Guix Explanation</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={hf} />} tip={ <div>History and Founders</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={pp} />} tip={ <div>Our Proposition</div> }></Hotspot></div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            <PreviewVideo fForm={true} title={<div>Our Proposition</div>} />
        </div>
    )
}

export default Section1
