import React from 'react';
import "../assets/css/Products.css";
import matowinlogo from "../assets/images/matowinlogo.jpeg";
import Product1 from "../assets/images/product1.jpeg";
import Product2 from "../assets/images/product2.jpeg";
import Product3 from "../assets/images/product3.jpeg";
import Product4 from "../assets/images/product4.jpeg";
import Product5 from "../assets/images/product5.jpeg";
import Product6 from "../assets/images/product6.jpeg";
import Product7 from "../assets/images/product7.jpeg";
import Product8 from "../assets/images/np1.jpeg";
import Product9 from "../assets/images/np2.jpeg";
import Product10 from "../assets/images/np3.jpeg";
import Product11 from "../assets/images/np4.jpeg";
import Product12 from "../assets/images/np5.jpeg";
import Product13 from "../assets/images/np6.jpeg";
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
    {
        name: 'Product 1',
        description: 'Product 1 Description',
        image: Product8
    },
    {
        name: 'Product 1',
        description: 'Product 1 Description',
        image: Product9
    },
    {
        name: 'Product 1',
        description: 'Product 1 Description',
        image: Product10
    },
    {
        name: 'Product 1',
        description: 'Product 1 Description',
        image: Product11
    },
    {
        name: 'Product 1',
        description: 'Product 1 Description',
        image: Product12
    }

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
