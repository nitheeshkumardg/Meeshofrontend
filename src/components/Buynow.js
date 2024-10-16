import React from 'react'
import setCurrentProduct from '../actions/setCurrentProduct'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Buynow({product}) {
    let dispatch=useDispatch() 
    let handleCurrentProduct=()=>{
        dispatch(setCurrentProduct(product))
     }
  
      
  return (
    <div>
      
     <Link to={{pathname:'/details/'}} onClick={handleCurrentProduct}  className="bg-pink-400 text-white font-semibold py-2 px-4 border border-pink-200 rounded hover:bg-pink-200 transition duration-200 ease-in-out flex items-center space-x-2">Buy Now</Link>
                 
    </div>
    
  )
}

export default Buynow
