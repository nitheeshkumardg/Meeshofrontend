import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SellerProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const response = await fetch("http://localhost:7777/api/products/Vendor/products", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data); 
        setLoading(false); 
      } catch (err) {
        setError(err.message);
        setLoading(false); 
      }
    };

    fetchSellerProducts();
  }, [token]);
  const handleAddProduct = () => {
    navigate("/Vendor"); 
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!", {
      position: "top-center",
      theme: "colored",
    });
    navigate("/sellerLogin"); 
  };

  return (
   <>
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-center mb-8">Your Products</h1>
       
       <div className="flex justify-between items-center mb-4">
         
          <button
            onClick={handleAddProduct}
            className="px-4 py-2 bg-purple-700 text-white font-bold rounded hover:bg-purple-800"
          >
            Add More Product
          </button>

        
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-purple-700 text-white font-bold rounded hover:bg-purple-800"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found. Add some products!</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white"
            >
              <img
                src={`http://localhost:7777/uploads/${product.image}`} // assuming the images are stored in /uploads
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-800 font-medium">Price: ₹{product.price}</p>
              <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
              <p className="text-gray-500 text-sm">Category: {product.category}</p>
            </div>
          ))
        )}
      </div>
    
    </>
  
  );
};

export default SellerProductDisplay;



