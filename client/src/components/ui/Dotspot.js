import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import earth from '../../img/earth.png'

const Dotspot = ({ position, a }) => {

    const [hover, setHover] = useState(false)
    const [video, setVideo] = useState(false)

    // const dotHov = {display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '50.5%', right: '50%', top: '68.2%', color: 'white', fontSize: '55px', cursor: 'pointer', textShadow: '0 0 20px white'}
    // const dot = {display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '50.5%', right: '50%', top: '68.2%', color: 'white', fontSize: '55px', cursor: 'pointer', textShadow: '0 0 10px white'}

    const tooltip = <div className="tooltip">
                        <a 
                            style={{color: 'white', textDecoration: 'underline'}} 
                            href='http://dropbox.com' target="_blank">
                            Here is some content
                        </a>
                        <br></br>
                        <br></br>
                        <button onClick={() => setVideo(true)}>video</button>
                    </div>

    return (
            <Tooltip title={tooltip} interactive>
                <div
                    className={ hover ? 'dotHov' : 'dot'}
                    style={ position }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    { a ? a : <div>&#9679;</div> } 
                </div>
            </Tooltip>
    )
}

export default Dotspot
