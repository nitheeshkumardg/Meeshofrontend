import React from 'react'
import { useSelector } from 'react-redux'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import ProductDetails from '../components/ProductDetails'
import productData from '../assests/Productsitem'

let Details=() =>{
    let product=useSelector((state)=>state.currentProduct.product)

    
     
        
      
    



  return (
    <>
    <div >
    <Navbar1/>
    <Navbar2/>
    </div>
    <div style={{ marginTop: '30px' }} >
    
      <ProductDetails product={product}/>

    </div>
    
    
    </>
  )
}

export default Details
