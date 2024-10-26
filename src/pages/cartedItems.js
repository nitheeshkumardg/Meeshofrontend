import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar1 from '../components/Navbar1'; 
import Navbar2 from '../components/Navbar2'; 
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token'); 
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
: 'http://localhost:7777/uploads/placeholder.png' 
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


















        
      


