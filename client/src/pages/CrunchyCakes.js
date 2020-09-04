import React, { useState } from 'react'
import cc from '../img/CrunchyCakes.gif'
import Tooltip from '@material-ui/core/Tooltip'
import vid from '../img/Ecuador.mp4'
import Dialog from "@material-ui/core/Dialog"
import Dotspot from '../components/ui/Dotspot'

const CrunchyCakes = () => {

    const [video, setVideo] = useState(false)

    const closeVideo = (e) => {
        e.preventDefault()
        setVideo(false)
    }

    return (
        <div className='center'>

            <Dotspot position={{left: '50.5%', right: '50%', top: '68.2%'}} />

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
