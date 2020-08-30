import React, { useState } from 'react'
import Select from 'react-select'
import Button from 'react-bootstrap/Button'

const Search = ({ goClicked, setLocation, setMicrositeUrl }) => {

    const [place, setPlace] = useState('')
    const [food, setFood] = useState('')

    const handleClick = () => {
        goClicked(true)
        setLocation(`${place}`)
        setMicrositeUrl('http://' + `${place}` + '.world')
    }

    const fOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'wine', label: 'Wine' },
        { value: 'cheese', label: 'Cheese' }
    ]

    const pOptions = [
        { value: 'Amsterdam', label: 'Amsterdam' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Denmark', label: 'Denmark' },
        { value: 'Ecuador', label: 'Ecuador' },
        { value: 'Finland', label: 'Finland' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Norway', label: 'Norway' },
        { value: 'Spain', label: 'Spain' }
    ]

    return (
        <div className='center'>
        <section className='search'>
            <span style={{color: 'white'}}>Select a place: </span>
            <Select onChange={(evt) => setPlace(evt.value)} options={pOptions} />
            <Button 
                onClick={() => handleClick()}>Go
            </Button>
        </section>
        </div>
    )
}

export default Search