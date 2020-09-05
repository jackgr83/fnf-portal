import React, { useState } from 'react'
import earth from '../img/earth.png'
import ecomama from '../img/ecomama.PNG'
import vid from '../img/Ecuador.mp4'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from "@material-ui/core/Dialog"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import FeedbackForm from '../components/ui/FeedbackForm'
import PreviewVideo from '../components/ui/PreviewVideo'
import Hotspot from '../components/ui/Hotspot'

const Amsterdam = () => {

    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'><Hotspot icon={<img src={earth} />}></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={earth} />}></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={earth} />}></Hotspot></div>
                <div className='flexItem'><Hotspot icon={<img src={earth} />}></Hotspot></div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            <PreviewVideo />
        </div>
    )
}

export default Amsterdam
