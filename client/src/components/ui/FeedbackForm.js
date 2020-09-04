import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from "@material-ui/core/Dialog"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'

const FeedbackForm = ({form, setForm }) => {

    const closeForm = () => {
        setForm(false)
        // playVideo()
    }

    const onFormChange = (e) => {
        console.log(e)
    }

    const onFormSubmit = e => {
        e.preventDefault();
        closeForm()
    }

    return (
        <div>
            <Dialog
                onClose={closeForm}
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
                </DialogContent>
                <DialogActions>
                <Button onClick={onFormSubmit} color="primary">
                    Cancel
                </Button>
                <Button onClick={onFormSubmit} color="primary">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FeedbackForm
