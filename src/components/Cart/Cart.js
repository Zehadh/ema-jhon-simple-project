import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;

    let total = 0.00;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
    }

    let shipping = 0.00;
    if(total > 0 && total < 50){
        shipping = 12.99;
    }
    else if(total > 50 && total <100){
        shipping = 5.99;
    }

    const tax = (total /10).toFixed(2);

    let grandTotal = total + shipping + Number(tax) ;

    const FormatNumber = num =>{
        const rate = num.toFixed(2);
        return Number(rate);
    }
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h4>Items Selected : {cart.length}</h4>
            <p><small>Items : ${FormatNumber(total)} </small></p>
            <p><small>Shipping Cost : ${shipping} </small></p>
            <p><small>Tax : ${tax} </small></p>
            <h3>Total : ${FormatNumber(grandTotal)} </h3>
            <button class="review-button">Review Your Order</button>
        </div>
    );
};

export default Cart;