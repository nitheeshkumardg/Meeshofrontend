import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentComponent from '../components/payment';


const stripePromise = loadStripe('pk_test_51Q67t5FjBO2aKAV3yDfzBS9Vvpjqm4tiuXI0xHdjNI2YYNvAW8IgcUcNj4inwGA6tDp7FUKzAL7agx2RlPbXmyYI00qRRf8vNS');

const Paymentpage = () => (
  <Elements stripe={stripePromise}>
    <PaymentComponent />
  </Elements>
);

export default Paymentpage;
