import React from 'react'
import video from '../../img/Amsterdam.mp4'

const Zoom = () => {
    return (
        <div>
            <video width="100%" height="100%" autoPlay>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Zoom
