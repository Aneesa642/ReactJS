import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddProduct from './AddProduct';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('UserData');
        navigate('/login');
    };

    const addProduct = (product) => {
        const isDuplicate = products.some(p => p.name === product.name)
        if (!isDuplicate) {
            setProducts([...products, product]);
        };
    };

    return (
        <div>
            <h2>
                <button onClick={handleLogout}>Logout</button>
                <AddProduct addProduct={addProduct} />
                <SearchBar search={search} setSearch={setSearch}/>
                <ProductList products={products} search={search} />
            </h2>
        </div>
    )
}

export default Home