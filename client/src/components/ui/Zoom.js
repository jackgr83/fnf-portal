import React from 'react'
import amsterdam from '../../img/Amsterdam.mp4'
import ecuador from '../../img/Ecuador.mp4'

const Zoom = ({ videoEnd, location }) => {
    
    const myCallback = () => (videoEnd(true))
    const Amsterdam = <source src={amsterdam} type="video/mp4"></source>
    const Ecuador = <source src={ecuador} type="video/mp4"></source>

    return (
        <div className="center">
            <video width="50%" height="50%" autoPlay onEnded={() => myCallback()}>
                { location == 'Amsterdam' ? Amsterdam : 
                  location == 'Ecuador' ? Ecuador : 
                  ''                
                }
            </video>
        </div>
    )
}

export default Zoom
