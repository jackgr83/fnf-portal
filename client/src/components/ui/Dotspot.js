import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'

const Dotspot = () => {

    const [hover, setHover] = useState(false)
    const [video, setVideo] = useState(false)

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
        <div>
            <Tooltip title={tooltip} interactive>
                <div
                    className={ hover ? 'dotHov' : 'dot' }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    &#9679;
                </div>
            </Tooltip>
        </div>
    )
}

export default Dotspot
