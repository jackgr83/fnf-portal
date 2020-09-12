import React, { useState, useEffect } from 'react'
import cc from '../img/CrunchyCakes.gif'
import { A } from 'hookrouter'
import vid from '../img/Ecuador.mp4'
import Dialog from "@material-ui/core/Dialog"
import Dotspot from '../components/ui/Dotspot'

const CrunchyCakes = () => {

    const [video, setVideo] = useState(false)

    const closeVideo = (e) => {
        e.preventDefault()
        setVideo(false)
    }

    useEffect(() => { 
        document.body.style.backgroundColor = '#000'
        return () => {document.body.style.backgroundColor = 'white'} 
    })

    return (
        <div className='center'>

            <Dotspot position={{left: '50.5%', right: '50%', top: '68.2%'}} tip={ <div>Click to order crunchy rice cakes!</div> } a={<A style={{color: 'white'}} href='/LaRoccaing'>&#9679;</A>} />

            <img 
                height='50%' 
                width='50%' 
                src={cc} 
                alt='' 
            />
            
            <Dialog
                onClose={closeVideo}
                aria-labelledby="simple-dialog-title"
                open={video}
            >
                <video width="400" controls>
                    <source src={vid} type="video/mp4"></source>
                </video>
            </Dialog>
                
        </div>
    )
}

export default CrunchyCakes
