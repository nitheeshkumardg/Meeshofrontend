import React, {  useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
import Navbar1 from "./Navbar1";
import Footer from "./Footer1";
import { Link } from 'react-router-dom';
import { fetchCartItems } from "../reducers/cartReducer";


const Login = () => {
 
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
      

      dispatch(login(res.data.user));
      dispatch(fetchCartItems());

      setMessage("Login successful!");

      if (res?.data?.token) {
       
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
                 <div className="d-flex justify-content-between mt-3">
                    <a href="/forgot-password" className="text-blue-600 hover:underline">
                      Forgot Password?
                    </a>
                    <div>
                      <span className="text-gray-600">Don't have an account? </span>
                      <Link to="/register" className="text-blue-500 hover:underline">
                        Sign up
                      </Link>
                      </div>
                      </div>
              </form>
              {message && (<p className="mt-3 text-center text-success">{message}</p>)}
              {error && <p className="mt-3 text-center text-danger">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-5"></div>
    <Footer/>
    </>
  );
};

export default Login;