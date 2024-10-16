import React, { useReducer, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/userReducer";
import Navbar1 from "./Navbar1";
import Footer from "./Footer1";
import { Link } from 'react-router-dom';


const Sellerlogin = () => {
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
       "http://localhost:7777/api/seller//sellerLogin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/Vendor/products");
      // console.log(res.data.user);

      dispatch(login(res.data.user));

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
        style={{ background: "white" }}
      >
        <div className="col-md-6 mt-5 " style={{ background: "white" }}>
        <div className="text-center">
               <img src="https://images.meeshosupplyassets.com/meesho-logo-pink.svg" class="rounded" alt="Image" style={{marginLeft:240,marginBottom:40}} />
              </div>
          <div className="card  ">
            <div className="card-body">
            <div className="text-center">
               <h1 style={{ fontSize: "2rem" }}>Login to your supplier panel</h1>
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
                  to="/Vendor"
                  type="submit"
                  className="btn  w-100"
                  style={{
                    backgroundColor: "#d8b4fe",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  Login
                </button>
              </form>
              <p className="text-center text-gray-600 mt-4">
                    New to Meesho?{' '}
                <Link to="/sellerregister" className="text-blue-500 hover:underline">
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

export default Sellerlogin;
