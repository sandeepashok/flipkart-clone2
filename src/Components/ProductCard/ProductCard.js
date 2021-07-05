import './product-card.css'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext)

  const cartItems = cart && cart.find((cartItem) => {
    return cartItem.itemId === product.itemId;
  });

  return (
    <div className='product-card-container'>
      <div className="product-card">
        <img alt="product-item" src={product.imageURL} className="product-img" />
        <p className="product-brand">{product.brand}</p>
        <p className="product-title">{product.title}</p>
        <div className="product-pricing">
          <p className="product-price">₹{product.price}</p>
          <p className="product-mrp">{product.mrp}</p>
          <p className="product-discount">{product.discount}% off</p>
        </div>
        <button className="add-to-cart" disabled={cartItems} onClick={() => {
          addToCart(product.itemId, 1);
        }}>{cartItems ? "Added to cart" : "Add to cart"}</button>
      </div>
    </div>
  )
}
