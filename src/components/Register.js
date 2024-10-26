import React, { useState } from "react";
import axios from "axios";
import Navbar1 from "./Navbar1";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    userType: "customer", 
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
        "http://localhost:7777/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(res.data.message || "Registration successful!");
    
      setFormData({
        email: "",
        name: "",
        password: "",
        userType: "customer",
      });
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data);
      console.log(err?.response?.data);
    }
  };

  return (
    <>
    <Navbar1/>
    <div
      className="container "
      style={{ background: "#fdefe7", height: "100vh" }}
    >
      
      <div className="row justify-content-center ">
        <div className="col-md-6 mt-5 ">
          <div className="card mt-5 ">
            <div className="card-header">
              <h2 className="text-center">Register</h2>
            </div>
            <div className="card-body">
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
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
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
                  className="btn btn-primary w-100"
                  style={{
                    backgroundColor: "#ff3f6c",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  Register
                </button>
              </form>

              
              {message && (
                <p className="mt-3 text-center text-success">{message}</p>
              )}
              {error && <p className="mt-3 text-center text-danger">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;