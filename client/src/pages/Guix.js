import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter'
import Ecuador from '../img/Ecuador.png'
import TextPopup from '../components/ui/TextPopup/TextPopup'
import Cart from './Cart'

const Guix = () => {

    const [hovered, setHovered] = useState(false)
    const [textPopup, chTextPopup] = useState(false)

    const showTextPopup = () => {
        chTextPopup(true)
    }
    const hideTextPopup = () => {
        chTextPopup(false)
    }

    const baseStyle = {opacity: "80%", position: "absolute", left: "37%", top: "50%"}
    const hoverStyle = {fontSize: "30px", opacity: "80%", position: "absolute", left: "37%", top: "50%"}

    const content = (
        <p style={{ color: "black", padding: 0, margin: 0 }}>
          Items:
          <br />
          <br />
          <div>
            <label>
                <input type="checkbox" checked="false" />Wine
            </label>
          </div>
          <br />
          <br />
          <div>
            <label>
                <input type="checkbox" checked="false" />Cheese
            </label>
          </div>
          <br />
          <br />
          <div>
            <label>
                <input type="checkbox" checked="false" />Bread
            </label>
          </div>
          <br />
          <br />
            <button onClick={() => navigate('/ShoppingCart', false)}>
                Add to Cart
            </button>
        </p>
      );
      const heading = "Ordering Menu";

    return (
        <div>
            {textPopup ? (
                <TextPopup content={content} cross={hideTextPopup} heading={heading} />
            ) : null}
            <button 
                style={ hovered ? hoverStyle : baseStyle }
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={showTextPopup}
            >
                ORDER
            </button>
            <img 
                height='100%' 
                width='100%' 
                src={Ecuador} 
                alt='' 
            />
        </div>
    )
}

export default Guix
