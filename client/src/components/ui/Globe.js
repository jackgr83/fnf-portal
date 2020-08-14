import React from 'react'
import video from '../../img/Amsterdam.mp4'

const Globe = () => {
    return (
        <div className="center">
            <video width="50%" height="50%">
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Globe
