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
import ec from '../../img/Ecuador.mp4'
import am from '../../img/Amsterdam.mp4'
import op from '../../img/Opening.mp4'
import jn from '../../img/jonathan.mp4'

const PreviewVideo = ({ title, fForm, dotspot, ended, src, setVid }) => {

    const [video, setVideo] = useState(true)
    const [form, setForm] = useState(false)

    const closeVideo = (e) => {
        e.preventDefault()
        setVideo(false)
        if (setVid) {
            setVid(false)
        }
    }

    const closeDialogs = () => {
        setVideo(false)
        if (setVid) {
            setVid(false)
        }
        setForm(false)
        if(ended){ended(true)}
    }

    const openForm = () => {
        // setVideo(false)
        setForm(true)
    }

    return (
        <div>
            <Dialog fullScreen
                onClose={closeVideo}
                aria-labelledby="simple-dialog-title"
                open={video}
            >
                <DialogTitle>
                    { title ? title : "Preview Video" }
                    <IconButton aria-label="close" style={{ position: 'absolute', right: '3%', top: '2%' }} onClick={closeDialogs}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <video id="video" width="100%" height="100%" controls autoPlay onPause={() => openForm()} onEnded={() => closeDialogs()}>
                        <source src={src} type="video/mp4"></source>
                    </video>
                    { dotspot ? dotspot : '' }
                    {/* <Dotspot position={{left: '80%', top: '60%'}} a={<A style={{color: 'white'}} href='/Otavalo'>&#9679;</A>} />     */}
                </DialogContent>
            </Dialog> 
            { fForm ? <FeedbackForm form={form} setForm={(bool) => setForm(bool)} /> : '' }
        </div>
    )
}

export default PreviewVideo
