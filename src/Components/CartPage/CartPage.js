import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartLine from '../CartLine/CartLine'
import './cart-page.css'

export default function CartPage() {
  const { cart, saveForLater, addToCart, removeFromSaveForLater } = useContext(CartContext)
  return (
    <>
      <h1>Cart</h1>
      <div className='cart-container'>
        <div className='cart-list'>
          {cart.map(cartItem => {
            return <CartLine cartItem={cartItem} key={cartItem.itemId} />
          })}
        </div>
        <h1>save later</h1>
        <div className="save-for-later">
          {saveForLater.map(savedItem => {
            return (
              <div className="saved-card-container">
                <img alt="cart-item" src={savedItem.imageURL} className="cartItem-img" />
                <div >
                  <p className="cart-title">{savedItem.title}</p>
                  <p className="cart-description">{savedItem.description}</p>
                  <div className="product-pricing">
                    <p className="product-price">₹{savedItem.price}</p>
                    <p className="product-mrp">{savedItem.mrp}</p>
                    <p className="product-discount">{savedItem.discount}% off</p>
                  </div>
                  <button onClick={() => {
                    addToCart(savedItem.itemId)
                    removeFromSaveForLater(savedItem.itemId)
                  }}>move to cart</button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}
