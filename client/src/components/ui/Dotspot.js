import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'

const Dotspot = ({ position, a, tip, black }) => {

    const [hover, setHover] = useState(false)
    const [video, setVideo] = useState(false)


    const tooltip = <div className="tooltip">
                        { tip }
                    </div>

    return (
            <Tooltip title={tooltip} interactive>
                <div
                    className={ !black && hover ? 'dotHov' : !black && !hover ? 'dot' : black && hover ? 'bDotHov' : black && !hover ? 'bDot' : '' }
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
