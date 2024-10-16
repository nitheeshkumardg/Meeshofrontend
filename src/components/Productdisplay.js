import React, { useEffect, useState } from 'react';
import Ads from './Ads';
import '../assests/Productsitem.json'
import productData from '../assests/Productsitem.json' // Local JSON file

function Productdisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching products from local JSON
    setProducts(productData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Ads key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Productdisplay;






