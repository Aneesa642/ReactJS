import React, { useState } from 'react'

const AddProduct = () => {
    const [product, setProduct] = useState();
    const [price, setPrice] = useState();

    return (
        <form>
            <div>
                <label>Product Name - </label>
                <input
                    type='text'
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required />
            </div>
            <div>
                <label>Price -</label>
                <input
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required />
            </div>
            <button type='submit'>ADD</button>
        </form>
    )
}

export default AddProduct