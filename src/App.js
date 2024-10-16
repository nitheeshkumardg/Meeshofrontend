import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom';
import './App.css';
import WomenEthnic from './pages/WomenEthnic';
import WomenWestern from './pages/WomenWestern';
import Men from './pages/Men';
import Kids from './pages/Kids';
import HomeandKitchen from './pages/HomeandKitchen';
import BeautyandHealth from './pages/BeautyandHealth';
import JewelleryandAccessories from './pages/JewelleryandAccessories';
import BagsandFootwear from './pages/BagsandFootwear';
import Electronics from './pages/Electronics';
import Login from './components/Login';
import ProductForm from './components/ProductForm';
import Home from './pages/Home';
import  Details  from './pages/Details';
import CartDetails from './pages/cartedItems';
import Register from './components/Register';
import SellerRegister from './components/sellerRegister';
import Sellerlogin from './components/sellerLogin'
import Sellerproductdisplay from './components/Sellerproductdisplay';
import Paymentpage from './pages/Paymentpage'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q67t5FjBO2aKAV3yDfzBS9Vvpjqm4tiuXI0xHdjNI2YYNvAW8IgcUcNj4inwGA6tDp7FUKzAL7agx2RlPbXmyYI00qRRf8vNS');
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
  
      <Route path='/'>
      <Route path='/' element={<Home/>}/>
      <Route path= '/WomenEthnic' element={<WomenEthnic/>}/>
      <Route path= '/WomenWestern' element={<WomenWestern/>}/>
      <Route path= '/Men' element={<Men/>}/>
      <Route path= '/Kids' element={<Kids/>}/>
      <Route path= '/HomeandKitchen' element={<HomeandKitchen/>}/>
      <Route path= '/BeautyandHealth' element={<BeautyandHealth/>}/>
      <Route path= '/JewelleryandAccessories' element={<JewelleryandAccessories/>}/>
      <Route path= '/BagsandFootwear' element={<BagsandFootwear/>}/>
      <Route path= '/Electronics' element={<Electronics/>}/>
      <Route path= '/Login' element={<Login/>}/>
      <Route path= '/Vendor' element={<ProductForm/>}/>
      <Route path= '/register' element={<Register/>}/>
      <Route path="/details/" element={<Details/>} />
      <Route path="/cart" element={<CartDetails/>} />
      <Route path="/sellerRegister" element={<SellerRegister/>} />
      <Route path="/sellerLogin" element={<Sellerlogin/>} />
      <Route path="/Vendor/products" element={<Sellerproductdisplay/>} />
      <Route path="/payment" element={<Elements stripe={stripePromise}><Paymentpage /> </Elements> } />
        
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
