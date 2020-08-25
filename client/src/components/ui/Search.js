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
                <select 
                    type='text' 
                    className='form-control' 
                    placeholder='Choose A Place'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Panama">Panama</option>
                </select>
                <select 
                    type='text' 
                    className='form-control' 
                    placeholder='Choose A Product'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="Bread">Bread</option>
                    <option value="Cheese">Cheese</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Wine">Wine</option>
                </select>

                <input 
                    type='submit' 
                    // style={{display:'none'}} 
                    value='Submit'
                />
            </form>
            
        </section>
    )
}

export default Search