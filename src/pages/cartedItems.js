// import React, { useState, useEffect } from 'react';
// import Navbar1 from '../components/Navbar1';
// import Navbar2 from '../components/Navbar2';
// import { Link } from 'react-router-dom';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import Swal from 'sweetalert2';

// function CartDetails() {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCounter, setCartCounter] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [extraCost, setExtraCost] = useState(50); 
//   const [taxes, setTaxes] = useState(0);
//   const [grandTotal, setGrandTotal] = useState(0);

//   useEffect(() => {
//     // Fetch data from localStorage
//     const storedCart = localStorage.getItem('cartState');
    
//     if (storedCart) {
//       const parsedCart = JSON.parse(storedCart);
//       setCartItems(parsedCart.cartItems || []);
//       setCartCounter(parsedCart.cartCounter || 0);
//       setTotalPrice(parsedCart.totalPrice || 0);
//       setTaxes(parsedCart.taxes || 0);
//       setGrandTotal(parsedCart.grandTotal || 0);
//     }
//   }, []);

//   const removefromCart = (product) => {
//     const updatedCartItems = cartItems.filter(item => item.product.id !== product.id);
//     const updatedCartCounter = cartCounter - product.quantity;
//     const updatedTotalPrice = totalPrice - (product.product.price * product.quantity);
    
//     setCartItems(updatedCartItems);
//     setCartCounter(updatedCartCounter);
//     setTotalPrice(updatedTotalPrice);
//     setTaxes(updatedTotalPrice * 0.18); // Calculate taxes
//     setGrandTotal(updatedTotalPrice + extraCost + (updatedTotalPrice * 0.18));

//     // Update localStorage
//     localStorage.setItem('cartState', JSON.stringify({
//       cartItems: updatedCartItems,
//       cartCounter: updatedCartCounter,
//       totalPrice: updatedTotalPrice,
//       taxes: updatedTotalPrice * 0.18,
//       grandTotal: updatedTotalPrice + extraCost + (updatedTotalPrice * 0.18)
//     }));

//     Swal.fire({
//       title: "Item Removed",
//       text: "The item has been removed from your cart!",
//       icon: "success"
//     });
//   };
//   // setCartItems([...updatedCartItems]);
//   return (
//     <>
//       <Navbar1 />
//       <Navbar2 />
      
//       <div className='container bg-white mt-5'>
//         {cartItems.length ? 
//           <div className='row mt-5'>
//             <h3 className='border-bottom py-2 mb-3 mt-5'>Shopping Cart</h3>
//             <div className="col-md-8 shadow">
//               <div className="row border-bottom py-3">
//                 <div className='col-md-9'> Item </div>
//                 <div className='col-md-1'> Cost </div>
//                 <div className='col-md-1'> Qty </div>
//                 <div className='col-md-1'> Total </div>
//               </div>
//               <div className="container border-right">
//                 {cartItems.map(item => (
//                   <div className="row borderp-2 py-4" key={item.product.id}>
//                     <div className='col-md-9 d-flex'>
//                       <img src={item.product.image} alt={item.product.title} style={{width:"40px", height:"40px"}}/>
//                       <h6 className='ps-3'>{item.product.title}</h6>
//                     </div>
//                     <div className='col-md-1'>
//                       <p className='text-end'>{item.product.price}</p>
//                     </div>
//                     <div className='col-md-1'>
//                       <p className='text-end'>{item.quantity}</p>
//                     </div>
//                     <div className='col-md-1'>
//                       <p className='text-end'>{(item.product.price * item.quantity).toFixed(2)}</p>
//                     </div>
//                     <button onClick={() => removefromCart(item)}>Remove</button>
//                   </div>
//                 ))}
//                 <hr></hr>
//                 <div className="row mb-2 py-3 pe-3">
//                   <div className='offset-md-9 col-md-1'>
//                     <h5 className='text-end'>Total</h5>
//                   </div>
//                   <div className='col-md-1'>
//                     <h5 className='text-end'>{cartCounter}</h5>
//                   </div>
//                   <div className='col-md-1'>
//                     <h5 className='text-center'>{totalPrice.toFixed(2)}</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='col-md-4'>
//               <div className='shadow p-2 mx-2 pb-5'>
//                 <div className='d-flex justify-content-between px-2'>
//                   <p> Sub Total </p> <p>{totalPrice.toFixed(2)}</p>
//                 </div>
//                 <div className='d-flex justify-content-between px-2'>
//                   <p> Delivery Charges </p> <p> {extraCost.toFixed(2)} </p>
//                 </div>
//                 <div className='d-flex justify-content-between px-2'>
//                   <p> Tax </p> <p> {taxes.toFixed(2)} </p>
//                 </div>
//                 <div className='d-flex justify-content-between px-2'>
//                   <p> Total </p> <p>  {grandTotal.toFixed(2)}</p>
//                 </div>
//                 <Link className='float-end btn btn-success' to='/payment'> Proceed to Payment</Link>
//               </div>
//             </div>
//           </div>
//           :
//           <h1 className='text-center mt-5 pt-5'>No Items in your Cart</h1>
//         }
//       </div>
//     </>
//   );
// }

// export default CartDetails;



// import React from 'react'
// import { useSelector } from 'react-redux'
// import Navbar1 from '../components/Navbar1';
// import Navbar2 from '../components/Navbar2';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import Swal from 'sweetalert2'


// function CartDetails(product) {
//     const cartItems = useSelector(state => state.cart.cartItems);
//     const cartCounter = useSelector(state => state.cart.cartCounter);
//     const totalPrice = useSelector(state => state.cart.totalPrice);
//     const extraCost = useSelector(state => state.cart.extraCost);
//     const taxes = useSelector(state => state.cart.taxes);
//     const grandTotal = useSelector(state => state.cart.grandTotal);
// const dispatch=useDispatch()
// const removefromCart=()=>{
//     dispatch(removefromCart(product))
//     Swal.fire({
//       title: "Congratulation!",
//       text: "One Item Removed To Cart!",
//       icon: "success"
//     });
    
// }




//   return (
//     <>
//     <Navbar1/>
//     <Navbar2/>
   
//     <div className='container bg-white mt-5'>
//     {cartItems.length? 
//                     <div className='row mt-5'>
//                                 <h3 className='border-bottom py-2 mb-3 mt-5'>Shopping Cart</h3>
//                                 <div className="col-md-8 shadow">
//                                     <div className="row border-bottom py-3">
//                                         <div className='col-md-9'> Item
//                                         </div>
                                        
//                                         <div className='col-md-1'> Cost
//                                         </div>
//                                         <div className='col-md-1'> Qty
//                                         </div>
//                                         <div className='col-md-1'> Total
//                                         </div>
//                                     </div>
//                                 <div className="container border-right">
                                
//                                     {cartItems.map(item => (
                                        
//                                         <div className="row borderp-2 py-4" key={item.product.id}>
//                                                 <div className='col-md-9 d-flex'>

//                                                     <img src={item.product.image} alt={item.product.title} style={{width:"40px", height:"40px"}}/>
//                                                     <h6 className='ps-3'>{item.product.title}</h6>
//                                                 </div>

//                                                 <div className='col-md-1'>
//                                                     <p className='text-end'>{item.product.price}</p>
//                                                 </div>
//                                                 <div className='col-md-1'>
//                                                     <p className='text-end'>{item.quantity}</p>
//                                                 </div>
//                                                 <div className='col-md-1'>
//                                                     <p className='text-end'>{item.total_item_price.toFixed(2)}</p>
//                                                 </div>
//                                         </div>
//                                     ))}
//                                     <hr></hr>
//                                     <div className="row mb-2 py-3 pe-3">
//                                         <div className='offset-md-9 col-md-1'>
//                                             <h5 className='text-end'>Total</h5>
//                                         </div>
//                                         <div className='col-md-1'>
//                                             <h5 className='text-end'>{cartCounter}</h5>
//                                         </div>
//                                         <div className='col-md-1'>
//                                             <h5 className='text-center'>{totalPrice.toFixed(2)}</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                         </div>
//                         <div className='col-md-4'>
//                             <div className='shadow p-2 mx-2 pb-5'>
//                                 <div className='d-flex justify-content-between px-2'>
//                                     <p> Sub Total </p> <p>{totalPrice.toFixed(2)}</p>
//                                 </div>
//                                 <div className='d-flex justify-content-between px-2'>
//                                 <p> Delivery Charges </p> <p> {extraCost.toFixed(2)} </p>
//                                 </div>
//                                 <div className='d-flex justify-content-between px-2'>
//                                 <p> Tax </p> <p> {taxes.toFixed(2)} </p>
//                                 </div>
//                                 <div className='d-flex justify-content-between px-2'>
//                                 <p> Total </p> <p>  {grandTotal.toFixed(2)}</p>
//                                 </div>
//                                 <Link className='float-end btn btn-success' to='/payment'> Proceed to Payment</Link>
//                             </div>
//                         </div>
//                     </div>
//                     :
//                     <h1 className='text-center mt-5 pt-5'>No Items in your Cart</h1>}
//             </div>
//             <div>
//             <Link
//         component="button"
//         onClick={removefromCart}
//         className="bg-pink-200 text-black font-semibold py-2 px-4 border border-pink-400 rounded hover:bg-pink-300 transition duration-200 ease-in-out flex items-center space-x-2"
//       >
//         <AddShoppingCartIcon />
//         <span>Remove From Cart</span>
//       </Link>
        
//             </div>
//         </>
//     );
// }
// export default CartDetails;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCartItems } from '../reducers/cartReducer';
// import { toast } from 'react-toastify';
// import Navbar1 from '../components/Navbar1';

// const CartDetails = () => {
//   const dispatch = useDispatch();
//   const { items, total, loading, error } = useSelector((state) => state.cart);
//   // const userInfo = useSelector((state) => state.userInfo);
//   // console.log(userInfo)

//   useEffect(() => {
    
//       dispatch(fetchCartItems());
   
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading your cart...</div>;
//   }

//   if (error) {
//     toast.error("Failed to load cart");
//     return <div>Error loading cart</div>;
//   }

//   return (
//     <>
//     <Navbar1/>
//     <div>
//       <h2>Your Cart</h2>
//       {items.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           {items.map((item) => (
//             <div key={item.productId._id}>
//               <p>{item.productId.name} - Quantity: {item.quantity}</p>
//               <p>Price: ${item.productId.price}</p>
//             </div>
//           ))}
//           <h3>Total: ${total}</h3>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default CartDetails;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Navbar1 from '../components/Navbar1'

// const CartPage = () => {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch the cart items when the component loads
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const token = localStorage.getItem('token'); // assuming you're storing JWT token in localStorage
//         const response = await axios.get('http://localhost:7777/api/cart', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setCart(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, []);

//   const handleRemove = async (productId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:7777/api/cart/cart/remove', { productId }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       Swal.fire('Removed!', 'The item has been removed from your cart.', 'success');
//       setCart(prevCart => ({
//         ...prevCart,
//         items: prevCart.items.filter(item => item.productId !== productId)
//       }));
//     } catch (error) {
//       console.error('Error removing item:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading cart...</div>;
//   }

//   return (
//     <>
//     <Navbar1/>
//     <div>
//       <h2>Your Cart</h2>
//       {cart && cart.items.length > 0 ? (
//         <div>
//           {cart.items.map(item => (
//             <div key={item.productId} className="cart-item">
//               <p>Title: {item.title}</p>
//               <p>Price: ₹{item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//               <button onClick={() => handleRemove(item.productId)}>Remove</button>
//             </div>
//           ))}
//           <div className="cart-summary">
//             <p>Subtotal: ₹{cart.subtotal}</p>
//             <p>Tax (18%): ₹{cart.tax}</p>
//             <p>Extra Cost: ₹{cart.extraCost}</p>
//             <h4>Grand Total: ₹{cart.grandTotal}</h4>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default CartPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar1 from '../components/Navbar1'; 
import Navbar2 from '../components/Navbar2'; 
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the cart items when the component loads
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token'); // assuming you're storing JWT token in localStorage
        const response = await axios.get('http://localhost:7777/api/cart', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCart(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:7777/api/cart/cart/remove', { productId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      Swal.fire('Removed!', 'The item has been removed from your cart.', 'success');
      setCart(prevCart => ({
        ...prevCart,
        items: prevCart.items.filter(item => item.productId !== productId)
      }));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      
      <div className='container bg-white mt-5'>
        {cart && cart.items.length ? (
          <div className='row mt-5'>
            <h3 className='border-bottom py-2 mb-3 mt-5'>Shopping Cart</h3>
            <div className="col-md-8 shadow">
              <div className="row border-bottom py-3">
                <div className='col-md-9'>Item</div>
                <div className='col-md-1'>Cost</div>
                <div className='col-md-1'>Qty</div>
                <div className='col-md-1'>Total</div>
              </div>
              <div className="container border-right">
                {cart.items.map(item => (
                  <div className="row border p-2 py-4" key={item.productId}>
                    <div className='col-md-9 d-flex'>
                    <img src={item.image && item.image.startsWith('http') ? item.image : item.image  ? `http://localhost:7777/uploads/${item.image}` // If it's a filename, prepend the correct path
: 'http://localhost:7777/uploads/placeholder.png' // Default placeholder image if none exists
      } alt={item.title} style={{width:"40px", height:"40px"}} />
                      <h6 className='ps-3'>{item.title}</h6>
                    </div>
                    <div className='col-md-1'>
                      <p className='text-end'>₹{item.price}</p>
                    </div>
                    <div className='col-md-1'>
                      <p className='text-end'>{item.quantity}</p>
                    </div>
                    <div className='col-md-1'>
                      <p className='text-end'>₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      className="bg-white text-black font-semibold py-2 px-4 border border-pink-400 rounded hover:bg-gray-100 transition duration-200 ease-in-out flex items-center space-x-2"

                      onClick={() => handleRemove(item.productId)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <hr />
                <div className="row mb-2 py-3 pe-3">
                  <div className='offset-md-9 col-md-1'>
                    <h5 className='text-end'>Grand Total</h5>
                  </div>
                  <div className='col-md-1'>
                    <h5 className='text-end'>{cart.items.length}</h5>
                  </div>
                  <div className='col-md-1'>
                    <h5 className='text-center'>₹{cart.grandTotal.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='shadow p-2 mx-2 pb-5'>
                <div className='d-flex justify-content-between px-2'>
                  <p>Sub Total</p> <p>₹{cart.subtotal.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between px-2'>
                  <p>Delivery Charges</p> <p>₹{cart.extraCost.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between px-2'>
                  <p>Tax</p> <p>₹{cart.tax.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between px-2'>
                  <p>Grand Total</p> <p>₹{cart.grandTotal.toFixed(2)}</p>
                </div>
                <Link className='float-end btn btn-success' to='/payment'>
                  Proceed to Payment
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <h1 className='text-center mt-5 pt-5'>No Items in your Cart</h1>
        )}
      </div>
    </>
  );
};

export default CartPage;


















        
      


