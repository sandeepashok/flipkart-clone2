import './product-page.css'
import React, { useContext } from 'react'
import { ProductContext } from '../../Context/productsContext'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductPage() {

  const { productList } = useContext(ProductContext)
  return (
    <div className='product-page-container'>
      <div className="product-list">
        {productList.map(product => {
          return <ProductCard product={product} key={product.itemId} />
        })}
      </div>
    </div>
  )
}
