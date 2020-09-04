import React, { useState } from 'react'
import cc from '../img/CrunchyCakes.gif'
import Tooltip from '@material-ui/core/Tooltip'
import vid from '../img/Ecuador.mp4'
import Dialog from "@material-ui/core/Dialog"
import Dotspot from '../components/ui/Dotspot'

const CrunchyCakes = () => {

    // const [hover, setHover] = useState(false)
    const [video, setVideo] = useState(false)

    // const tooltip = <div className="tooltip">
    //                     <a 
    //                         style={{color: 'white', textDecoration: 'underline'}} 
    //                         href='http://dropbox.com' target="_blank">
    //                         Here is some content
    //                     </a>
    //                     <br></br>
    //                     <br></br>
    //                     <button onClick={() => setVideo(true)}>video</button>
    //                 </div>
    
    // function closeVideoModal(e) {
    //     e.preventDefault();
    //     setVideoModalOpen(false);
    //   }
    const closeVideo = (e) => {
        e.preventDefault()
        setVideo(false)
    }

    return (
        <div className='center'>
            {/* <Tooltip title={tooltip} interactive>
                <div
                    className={ hover ? 'dotHov' : 'dot' }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    &#9679;
                </div>
            </Tooltip> */}

            <Dotspot />

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
