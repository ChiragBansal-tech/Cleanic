import React, { useState, useEffect } from 'react';
import './servicesList.css'   

const services = [
    {
        id: '1',
        name: "Deep Cleaning",
        price: 100,
        imgUrl: 'Item-1.webp',
        duration: '1 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '2',
        name: "Furniture Cleaning",
        price: 150,
        imgUrl: 'Item-2.webp',
        duration: '1.5 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '3',
        name: "Kitchen Cleaning",
        price: 200,
        imgUrl: 'Item-3.webp',
        duration: '3 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '4',
        name: "Move In/Out",
        price: 300,
        imgUrl: 'Item-4.webp',
        duration: '5 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '5',
        name: "Laundry",
        price: 5,
        imgUrl: 'Item-5.webp',
        duration: '10 Min/Piece',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '6',
        name: "Window Cleaning",
        price: 100,
        imgUrl: 'Item-6.webp',
        duration: '1 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '7',
        name: "Office Cleaning",
        price: 300,
        imgUrl: 'Item-7.webp',
        duration: '6 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    }
];

export default function ServiceList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (service) => {
    const existingService = cart.find(item => item.name === service.name);
    if (existingService) {
      setCart(cart.map(item =>
        item.name === service.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
    alert(`${service.name} has been added to your cart.`);
  };

  const showServiceDetails = (service) => {
  };

  return (
    <div className="service-list">
      {services.map((service, index) => (
        <div key={service.id} className="item">
          <div><img className='images' src={service.imgUrl} alt={service.name}/></div>
          <div className='box-block'>
            <h3>{service.name}</h3>
            <h4>Price: ${service.price}</h4>
            <p>Description: {service.description}</p>
            <a href="#" className="read-more" onClick={() => showServiceDetails(service)}>Read More</a>
            <div className='box-bloxk-2'>
              <button className="atc" onClick={() => addToCart(service)}>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
