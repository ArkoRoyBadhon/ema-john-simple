import React, {useEffect, useState} from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=> {
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
        .catch(error => console.log('error found', error));
    },[])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h3>This is for products: {products.length}</h3> */}
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;