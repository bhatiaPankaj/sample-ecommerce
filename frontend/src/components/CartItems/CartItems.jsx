import React, { useContext } from 'react'
import "./CartItems.css";
import ShopContext from '../../context/data/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png'
import all_product from '../../assets/all_product';

function CartItems() {

    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext);
    console.log(cartItems);
    return (
      <div className="cartItems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartItems-format cartitems-format-main">
                  <img src={e.image} className="carticon-product-icon" alt="" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartItems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    className="carticon-remove-icon"
                    onClick={() => removeFromCart(e.id)}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}

        <div className="cartItems-down">
          <div className="cartItems-total">
            <h1>Cart totals</h1>
            <div>
              <div className="cartItems-totalItems">
                <p>Subtotals</p>
                <p>${0}</p>
              </div>
              <hr />
              <div className="cartItems-totalItems">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartItems-totalItems">
                <h3>Total</h3>
                <h3>${0}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-items-promocode">
            <p>Enter the promo code</p>
            <div className='cart-items-promobox'>
                <input type="text" placeholder='PROMO CODE' name="" id="" />
                <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartItems