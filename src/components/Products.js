import React from 'react';
import "../assets/css/Products.css";
import Product1 from "../assets/images/product1.png";
import Product2 from "../assets/images/product2.png";
import Product3 from "../assets/images/product3.png";
import Product4 from "../assets/images/product4.png";
import Product5 from "../assets/images/product5.png";
import Product6 from "../assets/images/product6.png";
import Product7 from "../assets/images/product7.png";
const Products = () => {
    let products = [
        {
            name: 'Product 1',
            description: 'Product 1 Description',
            image: Product1
        },
        {
            name: 'Product 2',
            description: 'Product 2 Description',
            image: Product2
        },
        {
            name: 'Product 3',
            description: 'Product 3 Description',
            image: Product3
        },
        {
          name: 'Product 1',
          description: 'Product 1 Description',
          image: Product4
      },
      {
          name: 'Product 2',
          description: 'Product 2 Description',
          image: Product5
      },
      {
          name: 'Product 3',
          description: 'Product 3 Description',
          image: Product6
      },
      {
        name: 'Product 1',
        description: 'Product 1 Description',
        image: Product7
    },

    ]
  return (
    <div id='products' className='mato_products'>
      <h1>Our Products</h1>
      <div className='products_list'>
        {products?.map((productData) =>{
            return (
                <div key={productData.name} className='product_item'>
                    <img src={productData.image} alt={productData.name}/>
                    <div className='product_data'>
                        <h2>{productData.name}</h2>
                        <p>{productData.description}</p>
                    </div>  
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products
