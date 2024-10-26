import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../App.css";


const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
    rating: 0,    
    isNew: false,  
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "image" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (product[key]) formData.append(key, product[key]);
    });

    try {
      await axios.post("http://localhost:7777/api/products/Vendor", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      toast.success("Product added successfully!", {
        position: "top-center",
        theme: "colored",
        delay: 2000,
      });
      setProduct({
        title: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: null,
        rating: 0,
        isNew: false,
      });
      navigate("/Vendor/products");
    } catch (error) {
      toast.error(`Error adding product: ${error.message}`, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="text-center mb-4">Add Product</h2>
     
      <form onSubmit={handleSubmit} className="col-md-8 mx-auto">
        
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
            value={product.title}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            value={product.description}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            onChange={handleChange}
            value={product.price}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
            value={product.category}
            required
          >
            <option value="">Select a category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="home">Home & Kitchen</option>
            <option value="jewellery">Jewellery & Accessories</option>
            <option value="beauty">Beauty & Health</option>
            <option value="electronics">Electronics</option>
            <option value="bags">Bags & Footwear</option>
            
            
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            onChange={handleChange}
            value={product.stock}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            onChange={handleChange}
            value={product.rating}
            min="1"
            max="5"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="isNew">Is New</label>
          <select
            className="form-control"
            id="isNew"
            name="isNew"
            onChange={handleChange}
            value={product.isNew}
            required
          >
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Image </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>
       
        <button
          type="submit"
          className="btn btn-block btn-ping"
          style={{
            backgroundColor: "#ff3f6c",
            color: "white",
            fontWeight: 700,
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
