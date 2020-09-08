import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import earth from '../../img/earth.png'
import { A } from 'hookrouter'

const Hotspot = ({ icon, position, tip }) => {

    const [hover, setHover] = useState(false)
    const [video, setVideo] = useState(false)

    // const dotHov = {display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '50.5%', right: '50%', top: '68.2%', color: 'white', fontSize: '55px', cursor: 'pointer', textShadow: '0 0 20px white'}
    // const dot = {display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '50.5%', right: '50%', top: '68.2%', color: 'white', fontSize: '55px', cursor: 'pointer', textShadow: '0 0 10px white'}

    const tooltip = <div className="tooltip">
                        { tip }
                    </div>

    return (
            <Tooltip title={tooltip} interactive>
                <div
                    style={ position }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {icon}
                </div>
            </Tooltip>
    )
}

export default Hotspot
