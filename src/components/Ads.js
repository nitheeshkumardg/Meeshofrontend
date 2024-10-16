import React from 'react';
import Buynow from './Buynow';

function Ads({ id, image, title, price, rating, freeDelivery }) {
  return (
    <div className="card p-4 m-2 shadow-lg rounded-lg" key={id}>
      <img
        src={image}
        className="w-full h-48 object-cover rounded-t-lg"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title text-xl font-bold mb-2">{title}</h5>
        <h5 className="price text-lg">₹{price} onwards</h5>
        {rating && (
          <div className="rating text-yellow-500 font-bold">
            Rating: {rating.rate} ({rating.count} reviews)
          </div>
        )}
        {freeDelivery && (
          <div className="text-green-500 font-bold">Free Delivery</div>
        )}
        <Buynow product={{ id, image, title, price }} />
      </div>
    </div>
  );
}

export default Ads;


    
    
    
    
    
    
   
   
  

      
    


