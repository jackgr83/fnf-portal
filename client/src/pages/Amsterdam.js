import React, { useState } from 'react'
import earth from '../img/earth.png'
import ecomama from '../img/ecomama.PNG'
import vid from '../img/Ecuador.mp4'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from "@material-ui/core/Dialog"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'

const Amsterdam = () => {

    const [video, setVideo] = useState(true)
    const [form, setForm] = useState(false)

    const closeVideo = (e) => {
        e.preventDefault()
        setVideo(false)
    }

    const openForm = () => {
        setVideo(false)
        setForm(true)
    }

    const toggleForm = () => {
        setForm(!form)
        setVideo(true)
    }

    const onFormChange = (e) => {
        console.log(e)
    }

    const onFormSubmit = e => {
        e.preventDefault();

        // const newItem = {
        //     name: this.state.name
        // }

        // Add item via addItem action
        // this.props.addItem(newItem);

        // Close modal
        toggleForm()
    }

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
            {/* { form && (<Modal
                    isOpen={form}
                    toggle={toggleForm}
                >
                    <ModalHeader toggle={toggleForm}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={onFormSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={onFormChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>)} */}
            <Dialog
                onClose={closeVideo}
                aria-labelledby="simple-dialog-title"
                open={video}
            >
                <video width="400" controls autoPlay onPause={() => openForm()} onEnded={() => setVideo(false)}>
                    <source src={vid} type="video/mp4"></source>
                </video>
            </Dialog> 
            { form && (<Dialog
                onClose={toggleForm}
                aria-labelledby="simple-dialog-title"
                open={form}
            >
                <DialogTitle id="form-dialog-title">Feedback Form</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please give us feedback on the site.
                </DialogContentText>
                Email: <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                Name: <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                Address: <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={onFormSubmit} color="primary">
                    Cancel
                </Button>
                <Button onClick={onFormSubmit} color="primary">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>)}
        </div>
    )
}

export default Amsterdam
