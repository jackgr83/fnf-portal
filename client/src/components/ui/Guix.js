import React, { useState, useEffect } from 'react';
import Ecuador from '../../img/Ecuador.png'
import Cart from './Cart'

const Guix = () => {

    const [isClicked, setIsClicked] = useState(false)

    const onClick = () => {
        setIsClicked(true)
    }

    const cart = <Cart />

    return (
        <div>
            { isClicked ? cart : <img 
                height='100%' 
                width='100%' 
                src={Ecuador} 
                alt=''
                onClick={onClick} 
            />
            }
        </div>
    )
}

export default Guix
