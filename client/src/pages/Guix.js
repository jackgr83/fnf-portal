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

    const cart = <Cart />
    const baseStyle = {opacity: "80%", position: "absolute", left: "37%", top: "50%"}
    const hoverStyle = {fontSize: "30px", opacity: "80%", position: "absolute", left: "37%", top: "50%"}
    const clickStyle = {visibility: "hidden"}

    const content = (
        <p style={{ padding: 0, margin: 0 }}>
          Here is some content
          <br />
          <br />
          More content
          <br />
          <br />
          More content
          <br />
          <br />
          More content
          <br />
          <br />
          More content
          <br />
          <br />
          More content
          <br />
          <br />
          More content
          <br />
          <br />
          This how we began
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
