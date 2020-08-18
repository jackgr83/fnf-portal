import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter'
import Ecuador from '../img/Ecuador.png'
import Cart from './Cart'

const Guix = () => {

    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)
    const [hovered3, setHovered3] = useState(false)
    const [hovered4, setHovered4] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    // const onClick = () => {
    //     setIsClicked(true)
    // }

    const cart = <Cart />
    const baseStyle = {color: "red", position: "absolute", left: "25%", top: "50%"}
    const hoverStyle = {fontSize: "30px", color: "red", position: "absolute", left: "25%", top: "50%"}
    const clickStyle = {visibility: "hidden"}

    return (
        <div>
            <div 
                style={ hovered1 && !isClicked ? hoverStyle : !hovered1 && !isClicked ? baseStyle : clickStyle }
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
                onClick={() => navigate('/ShoppingCart', false)}
            >
                &#128308;
            </div>
            <div 
                style={ hovered2 && !isClicked ? hoverStyle : !hovered2 && !isClicked ? baseStyle : clickStyle }
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
                onClick={() => navigate('/ShoppingCart', false)}
            >
                &#128308;
            </div>
            <div 
                style={ hovered3 && !isClicked ? hoverStyle : !hovered3 && !isClicked ? baseStyle : clickStyle }
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
                onClick={() => navigate('/ShoppingCart', false)}
            >
                &#128308;
            </div>
            <div 
                style={ hovered4 && !isClicked ? hoverStyle : !hovered4 && !isClicked ? baseStyle : clickStyle }
                onMouseEnter={() => setHovered4(true)}
                onMouseLeave={() => setHovered4(false)}
                onClick={() => navigate('/ShoppingCart', false)}
            >
                &#128308;
            </div>
            { isClicked ? cart : <img 
                height='100%' 
                width='100%' 
                src={Ecuador} 
                alt='' 
            />
            }
        </div>
    )
}

export default Guix
