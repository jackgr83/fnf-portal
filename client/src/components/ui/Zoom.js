import React from 'react'
import video from '../../img/Amsterdam.mp4'

const Zoom = ({ videoEnd }) => {
    const myCallback = () => (videoEnd(true))
    return (
        <div>
            <video width="100%" height="100%" autoPlay onEnded={() => myCallback()}>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Zoom
