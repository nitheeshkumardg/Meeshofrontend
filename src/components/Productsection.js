
import React,{ useState,useEffect} from 'react';
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
   
  useEffect(() => {
    dispatch(fetchCartItems()); 
  }, [dispatch]);
  const handleAddToCart = async () => {
    if (!isLogin) {
     
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


