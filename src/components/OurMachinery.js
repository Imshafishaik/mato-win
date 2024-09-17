import React from 'react'
import "../assets/css/Products.css";
import Room1 from "../assets/images/room1.jpeg";
import Room2 from "../assets/images/room2.jpeg";
import Room3 from "../assets/images/room3.jpeg";
import Room4 from "../assets/images/room4.jpeg";
import Room5 from "../assets/images/room5.jpeg";
import Room6 from "../assets/images/room6.jpeg";
import Room7 from "../assets/images/room7.jpeg";
import Room8 from "../assets/images/room8.jpeg";
import Room9 from "../assets/images/room9.jpeg";
import Room10 from "../assets/images/room10.jpeg";
import Room11 from "../assets/images/room11.jpeg";
import Room12 from "../assets/images/room12.jpeg";
import Room13 from "../assets/images/room13.jpeg";

const OurMachinery = () => {

    let Rooms = [
        {
            name: 'Room 1',
            description: 'Room 1 Description',
            image: Room1
        },
        {
            name: 'Room 2',
            description: 'Room 2 Description',
            image: Room2
        },
        {
            name: 'Room 3',
            description: 'Room 3 Description',
            image: Room3
        },
        {
          name: 'Room 1',
          description: 'Room 1 Description',
          image: Room4
      },
    //   {
    //       name: 'Room 2',
    //       description: 'Room 2 Description',
    //       image: Room5
    //   },
    //   {
    //       name: 'Room 3',
    //       description: 'Room 3 Description',
    //       image: Room6
    //   },
    //   {
    //     name: 'Room 1',
    //     description: 'Room 1 Description',
    //     image: Room7
    // },
    // {
    //     name: 'Room 1',
    //     description: 'Room 1 Description',
    //     image: Room8
    // },
    // {
    //     name: 'Room 1',
    //     description: 'Room 1 Description',
    //     image: Room9
    // },
    // {
    //     name: 'Room 1',
    //     description: 'Room 1 Description',
    //     image: Room10
    // },
    // {
    //     name: 'Room 1',
    //     description: 'Room 1 Description',
    //     image: Room11
    // },
    // {
    //     name: 'Room 1',
    //     description: 'Room 1 Description',
    //     image: Room12
    // }

    ]

  return (
    <div id='machinery' className='mato_products'>
      <h1>Our Machinery</h1>
      <div className='products_list'>
        {Rooms?.map((productData) =>{
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

export default OurMachinery
