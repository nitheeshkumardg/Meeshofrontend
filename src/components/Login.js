// import React from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar1 from './Navbar1';

// function Login() {

//     const [phonenumber, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleLogin = (e) => {
//       e.preventDefault();
      
//       console.log('Login submitted:', { phonenumber, password });
//     };
//   return (
//     <>
//     <Navbar1/>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        

//         <div className="text-center">
//           <img src="https://images.meesho.com/images/marketing/1661417516766.webp" class="rounded" alt="Image" width={300} height={200} />
//        </div>



//         <form onSubmit={handleLogin}>
//           <div className="mb-4 text-center">
//           <h5 className="text-2xl font-bold text-center mb-6">Sign Up to view your profile</h5>
//             <label className="block text-gray-700 mb-2" htmlFor="number">
//               Phone Number
//             </label>
//             <input
             
//               id="number"
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={phonenumber}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6 text-center">
//             <label className="block text-gray-700 mb-2" htmlFor="password" style={{marginRight:30}}>
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
 
//           <div className='btn btn-primary ' style={{display: "flex", justifyContent: "center", alignItems: "center",width:200, marginLeft:50}}>
//             Continue
//             </div> 

//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-blue-500 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
  
//     </>
//   )
// }

// export default Login


import React, { useReducer, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/userReducer";
import Navbar1 from "./Navbar1";
import Footer from "./Footer1";
import { Link } from 'react-router-dom';
import { fetchCartItems } from "../reducers/cartReducer";


const Login = () => {
  //user Login infomation
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:7777/api/auth/Login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");
      // console.log(res.data.user);

      dispatch(login(res.data.user));
      dispatch(fetchCartItems());

      setMessage("Login successful!");

      if (res?.data?.token) {
        // Store the token or other data
        localStorage.setItem("token", res?.data?.token);
      } else {
        navigate("/Login");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed!");
    }
  };

  return (
    <>
    <Navbar1/>
    <div
      className="container mt-5  "
      style={{ background: "#fdefe7", height: "100vh", width: "100vw" }}
    >
    
      <div
        className="row justify-content-center "
        style={{ background: "#fdefe7" }}
      >
        <div className="col-md-6 mt-5 " style={{ background: "#fdefe7" }}>
          <div className="card  ">
            <div className="card-body">
              <div className="text-center">
               <img src="https://images.meesho.com/images/marketing/1661417516766.webp" class="rounded" alt="Image" width={600} height={150} />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn  w-100"
                  style={{
                    backgroundColor: "#ff3f6c",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  Login
                </button>
              </form>
              <p className="text-center text-gray-600 mt-4">
                  Don't have an account?{' '}
                <Link to="/register" className="text-blue-500 hover:underline">
                       Sign up
                 </Link>
              </p>

              {/* Success and error messages */}
              {message && (
                <p className="mt-3 text-center text-success">{message}</p>
              )}
              {error && <p className="mt-3 text-center text-danger">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;