import React from 'react'
import video from '../../img/Amsterdam.mp4'

const Globe = () => {
    return (
        <div>
            <video width="100%" height="100%">
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Globe
