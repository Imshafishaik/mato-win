import React from 'react';
import "../assets/css/Products.css";
import matowinlogo from "../assets/images/matowinlogo.jpeg";
import Infra1 from "../assets/images/infra1.jpeg";
import Infra2 from "../assets/images/infra2.jpeg";
import Infra3 from "../assets/images/infra3.jpeg";
import Infra4 from "../assets/images/infra4.jpeg";
import Infra5 from "../assets/images/infra5.jpeg";
import Infra6 from "../assets/images/infra6.jpeg";
import Infra7 from "../assets/images/infra7.jpeg";
import Infra8 from "../assets/images/infra8.jpg";
import Infra9 from "../assets/images/infra9.jpg";
import Infra10 from "../assets/images/infra10.jpeg";
import Infra11 from "../assets/images/infra11.jpg";
import Infra12 from "../assets/images/infra12.jpg";

const Infrastructure = () => {
    let products = [
        {
            name: 'Product 1',
            description: 'Product 1 Description',
            image: Infra1
        },
        {
            name: 'Product 2',
            description: 'Product 2 Description',
            image: Infra2
        },
        {
            name: 'Product 3',
            description: 'Product 3 Description',
            image: Infra3
        },
        {
          name: 'Product 1',
          description: 'Product 1 Description',
          image: Infra4
      },
      {
          name: 'Product 2',
          description: 'Product 2 Description',
          image: Infra5
      },
      {
          name: 'Product 3',
          description: 'Product 3 Description',
          image: Infra6
      },
      {
        name: 'Product 1',
        description: 'Product 1 Description',
        image: Infra7
    },
    {
        name: 'Product 2',
        description: 'Product 2 Description',
        image: Infra8
    },
    {
        name: 'Product 2',
        description: 'Product 2 Description',
        image: Infra9
    },
    {
        name: 'Product 2',
        description: 'Product 2 Description',
        image: Infra10
    },
    {
        name: 'Product 2',
        description: 'Product 2 Description',
        image: Infra11
    },
    {
        name: 'Product 2',
        description: 'Product 2 Description',
        image: Infra12
    },
    ]
  return (
    <div id='infra' className='mato_products'>
      <h1>Our Infrastructure</h1>
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

export default Infrastructure
