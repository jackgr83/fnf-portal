import React from 'react'
import earth from '../img/earth.png'
import ecomama from '../img/ecomama.PNG'

const Amsterdam = () => {
    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'><img src={earth} /></div>
                <div className='flexItem'><img src={earth} /></div>
                <div className='flexItem'><img src={earth} /></div>
                <div className='flexItem'><img src={earth} /></div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
        </div>
    )
}

export default Amsterdam
