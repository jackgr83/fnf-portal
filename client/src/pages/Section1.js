import React, { useState, useEffect } from 'react'
import ge from '../img/GuixExplanation.PNG'
import rm from '../img/90day.PNG'
import hf from '../img/founders.PNG'
import pp from '../img/proposition.PNG'
import ecomama from '../img/ecomama.PNG'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'
import prev1 from '../img/prev1.mp4'

const Section1 = () => {

    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={rm} />} tip={ <div>Our 90 Day Roadmap</div> } ></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={ge} />} tip={ <div>Guix Explanation</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={hf} />} tip={ <div>History and Founders</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img className="shadow" src={pp} />} tip={ <div>Our Proposition</div> }></Hotspot></div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            <PreviewVideo fForm={true} title={<div>Our Proposition</div>} src={prev1} />
        </div>
    )
}

export default Section1
