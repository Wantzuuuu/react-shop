import React from 'react'

import { Link } from 'react-router-dom'

import "../../style/css/productcard.css"

export default function ProductCard(props) {
  const {title , price , id ,image} = props.product || {}
  return (
    <div>
        <Link className="link-block" to={`/product/detail/${id}`}>
        <div className="product-card">
            <div className="product-img-box">
                
                <div className="product-img bg-cover" 
                style={{backgroundImage:`url(${image})`}}>
                </div>
            </div>
            <div className="product-content">
                <h4 className="product-title">{title}</h4>
                <p className="product-price">${price}</p>
            </div>
        </div>
        </Link>
    </div>
  )
}
