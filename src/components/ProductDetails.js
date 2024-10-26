import React from 'react'
import './details.css'
import Rating from '@mui/material/Rating';




import Productsection from './Productsection';






let ProductDetails=({product}) =>{
  return (
    <>
    <div>
      <section id="product-info">

<div className="item-image-parent" >
    <div className="item-list-vertical">
        <div className="thumb-box">
            <img src={product.image && product.image.startsWith('http') 
    ? product.image 
    : `http://localhost:7777/uploads/${product.image}`
  } alt="thumbnail"  />
        </div>
       

    </div>
    <div className="item-image-main" >
        <img src={product.image && product.image.startsWith('http') 
    ? product.image 
    : `http://localhost:7777/uploads/${product.image}`
  } alt="default" style={{height:450}} />
    </div>
   
</div>


<div className="item-info-parent">
   
    <div className="main-info">
        <h4>{product.title}</h4>
        <div className="star-rating">
            <span>
            <Rating name="half-rating" defaultValue={0.5} precision={0.5} />
            </span>            
        </div>
        <p>Price: <span id="price">₹ {product.price}</span></p>
    </div>
    
    <div className="select-items">
        
        <div className="change-color">
            <label><b>Colour:</b> Black</label><br/>
            <div className="thumb-box">
                <img src={product.image && product.image.startsWith('http') 
    ? product.image 
    : `http://localhost:7777/uploads/${product.image}`
  } alt="thumbnail" />
            </div>
            <div className="thumb-box">
                <img src={product.image && product.image.startsWith('http') 
    ? product.image 
    : `http://localhost:7777/uploads/${product.image}`
  } alt="thumbnail" />
            </div>
        </div>
        
        <div className="change-size">
            <label><b>Size:</b></label><br/>
            <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
            </select>
        </div>

        <div className="description">
            <p>{product.description}</p>
           
        </div>
    </div>
    
</div>
</section>

    </div>
    <div style={{ marginLeft: '200px' , marginTop:'25px'}}>
    
    <Productsection product={product}/>

       </div>

    </>
  )
}

export default ProductDetails
