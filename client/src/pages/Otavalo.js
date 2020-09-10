import React, { useEffect } from 'react'
import otavaloGif from '../img/otavalo.gif'
import Hotspot from '../components/ui/Hotspot'
import transparent from '../img/transparent.png'
import { A } from 'hookrouter'


const Otavalo = () => {

    // useEffect(() => { 
    //     document.body.style.backgroundImage = `url(${otavaloGif})`
    //     return () => {document.body.style.backgroundImage = ''} 
    // })

    return (
        <div>
            <Hotspot position={{ position: 'absolute', left: '34.4%', top: '58%', cursor: 'pointer' }} 
                     icon={<A href='/CrunchyCakes'>
                                <img 
                                    style={{ visibility: 'hidden', width: '75px', height: '30px' }} 
                                    src={transparent} 
                                />
                           </A>
                           } 
            />
            <img 
                height='100%' 
                width='100%'
                src={otavaloGif} 
                alt='' 
            />
        </div>
    )
}

export default Otavalo
