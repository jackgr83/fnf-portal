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

const LaRocca = () => {

    const [hover, setHover] = useState(false)
    const [order, setOrder] = useState(false)

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

    const tooltip = <div className="orderModal">
                        <img src={zf} />
                        <div style={{color: 'black', height: '50px', width: '200px', position: 'absolute', left: '30%', top: '15%'}}>
                            This will be a short paragraph describing the Zinfandel wine. 
                            The rest of this paragraph will just be dummy text to fill in the modal. 
                            The fair world organization was founded by Andy Cooksey in insert year here.
                            I am sure this wine tastes good.
                        </div>
                        <div style={{float: 'right', marginTop: '90px', marginRight: '20px'}}>
                            <Button onClick={() => handleOrderClick()}>Click to Order</Button>
                        </div>
                    </div>

    return (
        <div>
            <Tooltip title={tooltip} interactive>
                <div
                    className={ hover ? 'dotHov' : 'dot' }
                    style={{position: 'absolute', left: '34.4%', top: '58%', cursor: 'pointer'}}
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
            >
                <DialogTitle>
                    2008 Zinfandel
                    <IconButton aria-label="close" style={{ position: 'absolute', right: '3%', top: '2%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Button>
                        Add to Cart
                    </Button>
                </DialogContent>
            </Dialog> 
        </div>
    )
}

export default LaRocca
