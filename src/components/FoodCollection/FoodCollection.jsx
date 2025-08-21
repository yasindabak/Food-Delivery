import React, { useContext, useState } from 'react'
import './FoodCollection.css'
import { categoryItem } from '../../assets/assets'
import { FoodContext } from '../../context/FoodContext'

const FoodCollection = () => {

  const {products, addToCart} =useContext(FoodContext)


  const [category, setcategory]= useState("All")
  return (
    <div>
      <div className="food_container">
      <div className='header_section'>
        <h1>Discover Our Menu</h1>
        <hr className='divider' />
      </div>
      <div className='display_container'>
        <div className='category_section'>
          <h1>Explore Our Categories</h1>
          <ul className="category_list">
            {
              categoryItem.map((item, index) => (
                <li key={index}
                onClick={()=>setcategory((prev)=>(prev === item.category_title ? "All" : item.category_title))}
                className={category === item.category_title ? "active" : ""}
                >
                  {item.category_title}
                </li>
              ) )
            }
          </ul>
        </div>
        <div className='grid_display'>
          {
            products.length > 0 ? (
              products.filter((product)=> category === "All" || category === product.category).map((product)=>(
                <div key={product._id} className='product_card'>
                  <div className='product-image'>
                    <img src={product.image} alt="" />

                  </div>
                  <h3>{product.name}</h3>
                  <div className='price-add'>
                    <p>${product.price}</p>
                    <button onClick={()=> addToCart(product._id)} className='add-to-cart'>Add to Cart</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No Products is available</p>
            )
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default FoodCollection