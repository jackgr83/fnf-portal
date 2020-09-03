import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Cart = () => {

    const onDeleteClick = (id) => {
        console.log(id)
        axios
            .delete(`api/items/delete/${id}`)
    }

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const result = await axios(`api/items`)
                setItems(result.data)
            } catch (err) {
                console.log('error fetching data')
            }
        }
        fetchItems()
    })

    return (
        <div>
            These are the items currently in your shopping cart:
        <div>
            {items.map(({ _id, name }) => (
                <div key={_id}>
                    <ul>
                        <li> 
                            <button
                            style={{color: 'red'}}
                            onClick={() => onDeleteClick(_id)}
                            >Remove</button>
                            {name}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Cart
