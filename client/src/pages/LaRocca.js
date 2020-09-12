import React, { useState, useEffect } from 'react'
import lr from '../img/larocca.jpg'
import Tooltip from '@material-ui/core/Tooltip'
import {Button} from 'reactstrap'
import zf from '../img/Zinfandel.jpg'
import Dialog from "@material-ui/core/Dialog"
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { DialogContentText, Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core'

const LaRocca = () => {

    const [hover, setHover] = useState(false)
    const [order, setOrder] = useState(false)
    const [value, setValue] = useState('one')

    useEffect(() => { 
        document.body.style.backgroundImage = `url(${lr})`
        return () => {document.body.style.backgroundImage = ''} 
    })

    const handleOrderClick = () => {
        setOrder(true)
    }

    const closeOrder = () => {
        setOrder(false)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    } 

    const tooltip = <div className="orderModal">
                        <img src={zf} />
                        <div style={{color: 'black', height: '50px', width: '200px', position: 'absolute', left: '30%', top: '15%'}}>
                            This will be a short paragraph describing the Zinfandel wine. 
                            The rest of this paragraph will just be dummy text to fill in the modal. 
                            The fair world organization was founded by Andy Cooksey in insert year here.
                            I am sure this wine tastes good.
                        </div>
                        <div style={{float: 'right', marginTop: '90px', marginRight: '20px'}}>
                            <Button style={{fontSize: '12px'}} onClick={() => handleOrderClick()}>Click to Order</Button>
                        </div>
                    </div>

    return (
        <div>
            <Tooltip title={tooltip} interactive>
                <div
                    className={ hover ? 'rDotHov' : 'rDot' }
                    style={{position: 'absolute', left: '14%', top: '58%', cursor: 'pointer'}}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div style={{color: 'red'}}>&#9679;</div>
                </div>
            </Tooltip>
            <Dialog
                onClose={closeOrder}
                aria-labelledby="simple-dialog-title"
                open={order}
                maxWidth='xs'
                fullWidth='true'
            >
                <DialogTitle>
                    2008 Zinfandel
                    <IconButton aria-label="close" style={{ position: 'absolute', right: '3%', top: '2%' }} onClick={closeOrder}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <img style={{float: 'left', marginRight: '15px'}} src={zf} />
                    <DialogContentText>
                        <div style={{color: 'green', fontWeight: 'bold'}}>$30.00</div>
                        <div>Subscribe and Save!</div>
                        <FormControl component="fieldset">
                            <RadioGroup value={value} onChange={handleChange}>
                                <FormControlLabel value="one" control={<Radio />} label="One time purchase" />
                                <FormControlLabel value="sub" control={<Radio />} label="Subscribe and save 20%!" />
                            </RadioGroup>
                        </FormControl>
                        <div style={{color: 'green', fontSize: '12px'}}>See details</div>
                    </DialogContentText>
                    <Button style={{marginLeft: '100px'}}>
                        Add to Cart
                    </Button>
                </DialogContent>
            </Dialog> 
        </div>
    )
}

export default LaRocca
