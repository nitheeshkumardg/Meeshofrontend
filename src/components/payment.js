

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentComponent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentStatus, setPaymentStatus] = useState('');
  const [billingDetails, setBillingDetails] = useState({
    cardHolderName: '',
    address: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: billingDetails.cardHolderName,
        address: {
          line1: billingDetails.address,
        },
      },
    });

    if (error) {
      setPaymentStatus(`Error: ${error.message}`);
    } else {
      setPaymentStatus(`Success! PaymentMethod ID: ${paymentMethod.id}`);
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        "::placeholder": {
          color: "#a0aec0", 
        },
      },
      invalid: {
        color: "#fa755a", 
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="bg-blue-500 text-white rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg">
              <img
                src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg" // Replace with the actual card image
                alt="Card"
                className="rounded-lg w-64 h-32 object-cover"
              />
            </div>
          </div>
        </div>

        
        <div className="bg-gray-100 rounded-lg shadow-md p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label htmlFor="cardholder" className="block text-sm font-medium text-gray-700">
                Card Holder
              </label>
              <input
                type="text"
                id="cardholder"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500 text-black"
                placeholder="Name"
                value={billingDetails.cardHolderName}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, cardHolderName: e.target.value })
                }
                required
              />
            </div>

            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Billing Address
              </label>
              <textarea
                id="address"
                rows="3"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500 text-black"
                placeholder="Address"
                value={billingDetails.address}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, address: e.target.value })
                }
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Details</label>
              <div className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500">
                <CardElement options={CARD_ELEMENT_OPTIONS} />
              </div>
            </div>

           
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
              disabled={!stripe}
            >
              Proceed to Pay
            </button>
          </form>

          {paymentStatus && (
            <div className="mt-4 text-center text-sm text-blue-600">
              {paymentStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
