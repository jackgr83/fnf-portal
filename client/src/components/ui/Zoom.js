import React from 'react'
import video from '../../img/Amsterdam.mp4'

const Zoom = ({ videoEnd }) => {
    const myCallback = () => (videoEnd(true))
    return (
        <div className="center">
            <video width="50%" height="50%" autoPlay onEnded={() => myCallback()}>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Zoom
