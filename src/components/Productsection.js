// import React from 'react'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { useDispatch } from 'react-redux';
// import { addtoCart } from '../actions/cartActions';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'
// import Ads from './Ads';
// import Productdisplay from './Productdisplay';
// import Footer from '../components/Footer1'
// import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";


// function Productsection(product) {
//   const dispatch=useDispatch()
  
//   const navigate = useNavigate();
//   const { isLogin, userDetails } = useSelector((state) => state.user);
// const handleCart=()=>{
//   if (!isLogin) {
//     // Redirect to login page if not logged in
//     Swal.fire({
//       title: "Please Login",
//       text: "You need to be logged in to add items to the cart!",
//       icon: "warning"
//     });
//     navigate("/Login"); // Redirect to login page
//   } else {
//     // Add to cart if user is logged in
//     dispatch(addtoCart(product));
//     Swal.fire({
//       title: "Congratulation!",
//       text: "One Item Added To Cart!",
//       icon: "success"
//     });
//   }
    
// }






//   return (
//    <>
//       {/* <Link component="button" variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={handleCart} className='btn-btn-secondary' >
//         Add to Cart
//       </Link>
//       <Link variant="contained" endIcon={<ArrowForwardIosIcon />} to='/cart' className='btn-btn-primary'>
//         Buy Now
//       </Link> */}
//       <div className="flex space-x-4">
      
//       <Link
//         component="button"
//         onClick={handleCart}
//         className="bg-pink-200 text-black font-semibold py-2 px-4 border border-pink-400 rounded hover:bg-pink-300 transition duration-200 ease-in-out flex items-center space-x-2"
//       >
//         <AddShoppingCartIcon />
//         <span>Add to Cart</span>
//       </Link>

//       {/* Buy Now Button */}
//       <Link
//         to="/cart"
//         className="bg-pink-400 text-white font-semibold py-2 px-4 border border-pink-600 rounded hover:bg-pink-500 transition duration-200 ease-in-out flex items-center space-x-2"
//       >
//         <span>Buy Now</span>
//         <ArrowForwardIosIcon />
//       </Link>
//     </div>

//  <div className="mt-4 mb-4">
//   <h1 className="text-3xl font-bold text-left ml-4">People also viewed</h1>
// </div>


// <div>
//   <Productdisplay product={product}/>
// </div>
// <Footer/>

//       </>
//   )
// }

// export default Productsection



// import React from 'react';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { useDispatch } from 'react-redux';
// import axios from 'axios'; // Ensure axios is imported
// import { setCartItems } from '../actions/cartActions'; // Assuming you have setCartItems action
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import Productdisplay from './Productdisplay';
// import Footer from '../components/Footer1';
// import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";

// function Productsection({ product }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLogin } = useSelector((state) => state.user);

//   // Function to add product to cart by sending a request to the backend
//   const addToCart = async (productId, quantity, price) => {
//     try {
//       const response = await axios.post('/api/cart/add', {
//         productId,
//         quantity,
//         price,
//       }, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       // Update Redux state with the returned cart items
//       dispatch(setCartItems(response.data.items)); // Assuming the cart items are returned in the response
//     } catch (error) {
//       console.error('Failed to add item to cart', error);
//     }
//   };

//   const handleCart = () => {
//     if (!isLogin) {
//       // Redirect to login page if not logged in
//       Swal.fire({
//         title: "Please Login",
//         text: "You need to be logged in to add items to the cart!",
//         icon: "warning"
//       });
//       navigate("/Login"); // Redirect to login page
//     } else {
//       // Add product to cart if the user is logged in
//       addToCart(product._id, 1, product.price); // Pass the product details to addToCart
//       Swal.fire({
//         title: "Congratulations!",
//         text: "One item added to cart!",
//         icon: "success"
//       });
//     }
//   };

//   return (
//     <>
//       <div className="flex space-x-4">
//         {/* Add to Cart Button */}
//         <Link
//           component="button"
//           onClick={handleCart}
//           className="bg-pink-200 text-black font-semibold py-2 px-4 border border-pink-400 rounded hover:bg-pink-300 transition duration-200 ease-in-out flex items-center space-x-2"
//         >
//           <AddShoppingCartIcon />
//           <span>Add to Cart</span>
//         </Link>

//         {/* Buy Now Button */}
//         <Link
//           to="/cart"
//           className="bg-pink-400 text-white font-semibold py-2 px-4 border border-pink-600 rounded hover:bg-pink-500 transition duration-200 ease-in-out flex items-center space-x-2"
//         >
//           <span>Buy Now</span>
//           <ArrowForwardIosIcon />
//         </Link>
//       </div>

//       <div className="mt-4 mb-4">
//         <h1 className="text-3xl font-bold text-left ml-4">People also viewed</h1>
//       </div>

//       <div>
//         <Productdisplay product={product} />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Productsection;




import React,{ useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Productdisplay from './Productdisplay';
import Footer from '../components/Footer1';
import { addToCart } from '../reducers/cartReducer';
import { fetchCartItems } from '../reducers/cartReducer';
import axios from 'axios';
import {addItemToCart} from '../reducers/cartReducer'

function Productsection({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.user);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    if (!isLogin) {
      // If user is not logged in, show a SweetAlert and navigate to login page
      Swal.fire('Error', 'You must log in to add items to the cart.', 'error');
      navigate('/Login');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const image = product.image && product.image.startsWith('http')
      ? product.image
      : `http://localhost:7777/uploads/${product.image}`;
      const response=await axios.post(
        'http://localhost:7777/api/cart/cart/add',
        { productId: product._id, title: product.title, price: product.price, quantity:1,image: image,   },
       
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addItemToCart(response.data.cartItem));
      Swal.fire('Success', 'Item added to cart!', 'success');
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire('Error', 'You must log in to add items to the cart.', 'error');
        // Optionally redirect to login page
      } else {
        Swal.fire('Error', 'Unable to add item to the cart.', 'error');
      }
      console.error('Error adding to cart:', error);
    }
  };
  ;

  return (
    <>
    
      <div className="flex space-x-4">
        <Link
          component="button"
          onClick={handleAddToCart}
          className="bg-pink-200 text-black font-semibold py-2 px-4 border border-pink-400 rounded hover:bg-pink-300 transition duration-200 ease-in-out flex items-center space-x-2"
        >
          <AddShoppingCartIcon />
          <span>Add to Cart</span>
        </Link>

        {/* Buy Now Button */}
        <Link
          to="/cart"
          className="bg-pink-400 text-white font-semibold py-2 px-4 border border-pink-600 rounded hover:bg-pink-500 transition duration-200 ease-in-out flex items-center space-x-2"
        >
          <span>Buy Now</span>
          <ArrowForwardIosIcon />
        </Link>
      </div>

      <div className="mt-4 mb-4">
        <h1 className="text-3xl font-bold text-left ml-4">People also viewed</h1>
      </div>

      <div>
        <Productdisplay product={product} />
      </div>

      <Footer />
    </>
  );
}

export default Productsection;


