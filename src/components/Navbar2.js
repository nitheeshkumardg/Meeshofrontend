import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar2() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>

          
          <div className="hidden lg:flex justify-around w-full">
            <ul className="flex justify-around w-full">

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Women Ethnic
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Sarees</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Kurtis</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Kurta Sets</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Suits & Dress Material</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Other Ethnic</Link></li>
                </ul>
              </li>

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Women Western
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Topwear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Bottomwear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Innerwear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Sleepwear</Link></li>
                  
                </ul>
              </li>

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Men
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Top Wear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Bottom Wear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Accessories</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Footwear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Ethnic Wear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Inner & Sleep Wear</Link></li>
                </ul>
              </li>

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Kids
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Boys & Girls 2+ Years</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Infant 0-2 Years</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Toys & Accessories</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Baby Care</Link></li>
                </ul>
              </li>

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Home & Kitchen
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Home Furnishing</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Home Decor</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Kitchen & Dining</Link></li>
                  
                </ul>
              </li>

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Beauty & Health
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Make up</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Wellness</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Skincare</Link></li>
                 
                </ul>
              </li>

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Jewellery & Accessories
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Jewellery</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Women Accessory</Link></li>
                </ul>
              </li>

              
              <li className="relative group">
                <Link className="text-gray-600 hover:text-gray-900" to="#">
                  Bags & Footwear
                </Link>
                <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Women Bags</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Bags</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Footwear</Link></li>
                  <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Women Footwear</Link></li>
                </ul>
              </li>
              <li className="relative group">
                   <Link className="text-gray-600 hover:text-gray-900" to="#">
                     Electronics
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Mobile & Accessories</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Consumer Electronics</Link></li>
                   </ul>
                 </li>
            </ul>
          </div>

          
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
            <ul className="space-y-4 text-gray-600">
              <li><Link to="#">Women Ethnic</Link></li>
              <li><Link to="#">Women Western</Link></li>
              <li><Link to="#">Men</Link></li>
              <li><Link to="#">Kids</Link></li>
              <li><Link to="#">Home & Kitchen</Link></li>
              <li><Link to="#">Beauty & Health</Link></li>
              <li><Link to="#">Jewellery & Accessories</Link></li>
              <li><Link to="#">Bags & Footwear</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar2;


