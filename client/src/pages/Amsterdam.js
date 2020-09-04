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

const Amsterdam = () => {

    const [video, setVideo] = useState(true)
    const [form, setForm] = useState(false)

    const tooltip = <div className="tooltip">
                        <a 
                            style={{color: 'white', textDecoration: 'underline'}} 
                            href='http://dropbox.com' target="_blank">
                            Here is some content
                        </a>
                        <br></br>
                        <br></br>
                        <button onClick={() => setVideo(true)}>video</button>
                    </div>

    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'><Tooltip title={tooltip} interactive><img src={earth} /></Tooltip></div>
                <div className='flexItem'><Tooltip title={tooltip} interactive><img src={earth} /></Tooltip></div>
                <div className='flexItem'><Tooltip title={tooltip} interactive><img src={earth} /></Tooltip></div>
                <div className='flexItem'><Tooltip title={tooltip} interactive><img src={earth} /></Tooltip></div>
            </div>
            <div style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', textAlign: 'center', margin: '-50px 0px 0px -75px' }}>
                <img src={ecomama} />
            </div>
            <PreviewVideo />
        </div>
    )
}

export default Amsterdam
