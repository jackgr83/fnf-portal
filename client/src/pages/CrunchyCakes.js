import React, { useState } from 'react';
import cc from '../img/CrunchyCakes.gif'
import Tooltip from '@material-ui/core/Tooltip'

const CrunchyCakes = () => {

    const [hover, setHover] = useState(false)

    const tooltip = <a style={{color: 'white', textDecoration: 'underline'}} href='http://dropbox.com' target="_blank">Here is some content</a>

    return (
        <div className='center'>
            <Tooltip title={tooltip} interactive>
                <div
                    className={ hover ? 'dotHov' : 'dot' }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    &#9679;
                </div>
            </Tooltip>

            <img 
                height='50%' 
                width='50%' 
                src={cc} 
                alt='' 
            />
        </div>
    )
}

export default CrunchyCakes
