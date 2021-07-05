import './cartline.css'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function CartLine({ cartItem, saveForLater }) {
  const { removeFromCart, addToSaveForLater, addToCart } = useContext(CartContext)
  const dec = (id) => {
    addToCart(id, -1);
  };
  const inc = (id) => {
    addToCart(id, 1);
  };
  return (
    <div className='cart-card-container'>
      <div className="cart-card">
        <img alt="cart-item" src={cartItem.imageURL} className="cartItem-img" />
        <div>
          <p className="cart-title">{cartItem.title}</p>
          <p className="cart-description">{cartItem.description}</p>
          <div className="product-pricing">
            <p className="product-price">₹{cartItem.price * cartItem.quantity}</p>
            <p className="product-mrp">{cartItem.mrp * cartItem.quantity}</p>
            <p className="product-discount">{cartItem.discount}% off</p>
          </div>
          <div className="counter">
            <button
              onClick={() => dec(cartItem.itemId)}
              disabled={cartItem.quantity === 1}
              className="counter-btn"
            >
              &#8722;
            </button>
            <p className="count">{cartItem.quantity}</p>
            <button onClick={() => inc(cartItem.itemId)} className="counter-btn">
              &#43;
            </button>
          </div>
          <div className="remove-save">
            <button onClick={() => {
              removeFromCart(cartItem.itemId)
            }}>remove</button>
            <button onClick={() => {
              addToSaveForLater(cartItem.itemId)
              removeFromCart(cartItem.itemId)
            }}>save for later</button>
          </div>
        </div>
      </div>
    </div>
  )
}
