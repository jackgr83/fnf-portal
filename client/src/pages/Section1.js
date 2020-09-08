import React, { useState } from 'react'
import earth from '../img/earth.png'
import ge from '../img/GuixExplanation.PNG'
import ecomama from '../img/ecomama.PNG'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'

const Section1 = () => {

    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'><Hotspot icon={<img src={ge} />} tip={ <div>Guix Explanation</div> } ></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={earth} />} tip={ <div>History and Founders</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={earth} />} tip={ <div>Our Proposition</div> }></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={earth} />}></Hotspot></div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            <PreviewVideo fForm={true} title={<div>Proposition</div>} />
        </div>
    )
}

export default Section1
