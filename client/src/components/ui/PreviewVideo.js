import React, { useState } from 'react'
import vid from '../../img/Ecuador.mp4'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from "@material-ui/core/Dialog"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import FeedbackForm from './FeedbackForm'
import Dotspot from './Dotspot'
import { A } from 'hookrouter'

const PreviewVideo = () => {

    const [video, setVideo] = useState(true)
    const [form, setForm] = useState(false)

    const closeVideo = (e) => {
        e.preventDefault()
        setVideo(false)
    }

    const closeDialogs = () => {
        setVideo(false)
        setForm(false)
    }

    const openForm = () => {
        // setVideo(false)
        setForm(true)
    }

    return (
        <div>
            <Dialog
                onClose={closeVideo}
                aria-labelledby="simple-dialog-title"
                open={video}
            >
                <DialogTitle>
                    Preview Video
                    <IconButton aria-label="close" style={{ marginLeft: '230px' }} onClick={closeDialogs}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <video id="video" width="400" controls autoPlay onPause={() => openForm()} onEnded={() => closeDialogs()}>
                        <source src={vid} type="video/mp4"></source>
                    </video>
                    <Dotspot position={{left: '80%', top: '60%'}} a={<A style={{color: 'white'}} href='/Otavalo'>&#9679;</A>} />    
                </DialogContent>
            </Dialog> 
            <FeedbackForm form={form} setForm={(bool) => setForm(bool)} />
        </div>
    )
}

export default PreviewVideo
