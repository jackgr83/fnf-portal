import React from 'react'
import Hotspot from './Hotspot'
import transparent from '../../img/transparent.png'
import { A } from 'hookrouter'

const Rollover = ({ style }) => {
    return (
        <div>
            <Hotspot position={ style } 
                     icon={<A href='/CrunchyCakes'><div>
                                <img 
                                    style={{ visibility: 'hidden', width: '75px', height: '30px' }} 
                                    src={transparent} 
                                /></div>
                           </A>
                           }
                     tip={<div>Click to zoom in</div>} 
            />
        </div>
    )
}

export default Rollover
