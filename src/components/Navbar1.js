import React, { useState,useEffect } from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuIcon from '@mui/icons-material/Menu'; 
import { useSelector,useDispatch } from 'react-redux';
import {  logout } from "../reducers/userReducer";
import { fetchCartItems } from '../reducers/cartReducer';
import { clearCart } from '../reducers/cartReducer';




function Navbar1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin, userDetails } = useSelector((state) => state.user);
  console.log(isLogin, userDetails);
  function logoutHandler() {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(clearCart());
    navigate("/Login");
  }

  const cartCounter = useSelector((state) => state.cart.cartCounter);
  console.log(cartCounter);
  

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
  return (
    <>
  <nav className="bg-gray-100 py-4">
    <div className="container mx-auto flex justify-between items-center">
      
      <Link to="/">
        <img
          src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
          alt="Display"
          className="w-24 h-auto"
        />
      </Link>

      
      <button
        className="block lg:hidden text-gray-700 focus:outline-none"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        aria-label="Toggle navigation"
      >
        <MenuIcon /> 
      </button>

      
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex justify-between items-center space-x-6 w-full`}
      >
       
        <form className="flex-grow mx-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            type="search"
            placeholder="Try Saree, Kurti or Search by Product Code"
            aria-label="Search"
          />
        </form>

        
        <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 z-50">
          
          <li className="relative group border-r border-gray-600 pr-4">
             <button className="text-black">Download App</button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 space-y-2">
           <li>
          <Link
            className="flex items-center px-4 py-2 hover:bg-gray-200"
            to="https://play.google.com/store/apps/details?id=com.meesho.supply"
           >
           
           <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
           alt="Play Store"
           className="w-6 h-6 mr-2"
           />
            For Android
           </Link>
          </li>
         <li>
        <Link
           className="flex items-center px-4 py-2 hover:bg-gray-200"
          to="https://apps.apple.com/in/app/meesho/id1457958492"
         >
          
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Store"
          className="w-6 h-6 mr-2"
         />
         For IOS
         </Link>
        </li>
       </ul>
     </li>




          
          <li className="border-r border-gray-600 pr-4">
            <Link className="text-black hover:text-gray-600" to="#">
              Become a Supplier
            </Link>
          </li>

          
          <li className="border-r border-gray-600 pr-4">
            <Link
              className="text-black hover:text-gray-600"
              to="https://www.meesho.io/news"
            >
              News Room
            </Link>
          </li>

          
          <li className="relative group">
            <IconButton color="primary">
              <Person2OutlinedIcon />
            </IconButton>
            <button className="text-black">Profile</button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 space-y-2">
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-200" to="/Login">
                  Customer
                </Link>
              </li>
              {isLogin && (
                <button className="btn" onClick={logoutHandler}>
                  Logout
                </button>
              )}
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-gray-200"
                  to="/sellerLogin"
                >
                  Seller
                </Link>
              </li>
            </ul>
          </li>

          
          <li className="flex items-center">
            <IconButton color="primary">
              <AddShoppingCartIcon />
            </IconButton>
            <Link className="ml-1 text-black hover:text-gray-600" to="/cart">
              Cart ({cartCounter})
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Outlet />
  </nav>
</>

  );
}

export default Navbar1;







