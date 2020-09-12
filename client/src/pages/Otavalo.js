import React, { useEffect } from 'react'
import otavaloGif from '../img/otavalo.gif'
import Rollover from '../components/ui/Rollover'


const Otavalo = () => {

    // useEffect(() => { 
    //     document.body.style.backgroundImage = `url(${otavaloGif})`
    //     return () => {document.body.style.backgroundImage = ''} 
    // })

    return (
        <div>
            <Rollover style={{position: 'absolute', left: '34.4%', top: '58%', cursor: 'pointer'}} />

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
