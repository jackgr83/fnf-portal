import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import earth from '../../img/earth.png'

const Dotspot = ({ position, a, tip }) => {

    const [hover, setHover] = useState(false)
    const [video, setVideo] = useState(false)


    const tooltip = <div className="tooltip">
                        { tip }
                        {/* <a 
                            style={{color: 'white', textDecoration: 'underline'}} 
                            href='http://dropbox.com' target="_blank">
                            Here is some content
                        </a>
                        <br></br>
                        <br></br>
                        <button onClick={() => setVideo(true)}>video</button> */}
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
