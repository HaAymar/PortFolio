import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='p'>
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href='http://lama.dev' target= '_blank' rel='noreferrence'>
          <img src="" alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Product