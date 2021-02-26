import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className="div">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h3>{name}</h3>
                <p><small>By : {seller}</small></p>
                <p>Price : ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="cart-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;