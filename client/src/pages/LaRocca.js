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
import axios from 'axios'
import { navigate } from 'hookrouter'

const LaRocca = () => {

    const [hover, setHover] = useState(false)
    const [order, setOrder] = useState(false)
    const [value, setValue] = useState('one')
    const [add, setAdd] = useState(true)

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
    
    const addToCart = (event) => {
        const callAxios = async (item) => {
            await axios
             .get("/api/items")
             .then((response) => {
                if (response.data.find(x => x.name == item)) {
                    alert('item already added to cart')
                } else {
                    axios
                    .post("/api/items", {
                        name: item
                    })
                    closeOrder()
                }
             })
        }

        callAxios(event.target.value)
    }

    const tooltip = <div className="orderModal">
                        <img src={zf} />
                        <div></div>
                        <div style={{color: 'black', height: '160px', width: '200px', marginTop: '-150px', marginLeft: '85px'}}>
                            <b>2008 Zinfandel</b><br></br>
                            This will be a short paragraph describing the Zinfandel wine. 
                            The rest of this paragraph will just be dummy text to fill in the modal. 
                            The fair world organization was founded by Andy Cooksey in insert year here.
                        </div>
                        <div style={{marginTop: '-70px', marginLeft: '150px'}}>
                            <Button style={{fontSize: '12px', cursor: 'pointer'}} onClick={() => handleOrderClick()}>Click to Order</Button>
                        </div>
                    </div>

    return (
        <div>
            <Tooltip title={tooltip} interactive>
                <div
                    className={ hover ? 'rDotHov' : 'rDot' }
                    style={{position: 'absolute', left: '14%', top: '58%', cursor: 'default' }}
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
                    <IconButton aria-label="close" style={{ position: 'absolute', right: '3%', top: '2%', cursor: 'default' }} onClick={closeOrder}>
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
                                <FormControlLabel style={{cursor: 'default'}} value="one" control={<Radio style={{cursor: 'default'}} />} label="One time purchase" />
                                <FormControlLabel style={{cursor: 'default'}} value="sub" control={<Radio style={{cursor: 'default'}} />} label="Subscribe and save 20%!" />
                            </RadioGroup>
                        </FormControl>
                        <div style={{color: 'green', fontSize: '12px', cursor: 'pointer'}}>See details</div>
                    </DialogContentText>
                    <Button style={{marginLeft: '100px', cursor: 'pointer'}} value="Zinfandel 2008" onClick={addToCart}>
                        Add to Cart
                    </Button>
                    <Button style={{fontSize: '12px', marginLeft: '25px', cursor: 'pointer'}} onClick={() => navigate('/', false)}>
                        Return to Homepage
                    </Button>
                </DialogContent>
            </Dialog> 
        </div>
    )
}

export default LaRocca
