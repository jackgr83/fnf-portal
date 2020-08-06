import React, { useState } from 'react'

const Search = ({ getLocation }) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`${text}`)
        getLocation(`${text}`)
    }

    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search the Globe..'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
                <input 
                    type='submit' 
                    style={{display:'none'}} 
                    value='Submit'
                />
            </form>
            
        </section>
    )
}

export default Search