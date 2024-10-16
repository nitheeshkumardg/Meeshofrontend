import React, { useState } from 'react';
import Buynow from './Buynow';

function Filtersection({ product }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ["women's clothing", "men's clothing", 'Kids', 'Electronics', 'Beauty Product',"jewelery","Equipments", "Home Decoration"];

 
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  
  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  
  const filteredproduct = product
    .filter((product) => {
      if (selectedCategories.length > 0) {
        return selectedCategories.includes(product.category);
      }
      return true; 
    })
    .sort((a, b) => {
      if (sortBy === 'low-to-high') {
        return a.price - b.price;
      } else if (sortBy === 'high-to-low') {
        return b.price - a.price;
      } else if (sortBy === 'newest') {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      } else {
        return 0;
      }
    });

  return (
    <>
      <div className="mt-8 mb-8">
        <h1 className="text-4xl font-bold">Products For You</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        <aside className="w-full md:w-1/4 lg:w-1/5 p-4 bg-white shadow-md">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Sort By</h3>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="relevance">Relevance</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Category</h3>
            <input
              type="text"
              placeholder="Search Categories"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

        
          <div>
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <ul className="space-y-2">
              {filteredCategories.map((category, index) => (
                <li key={index}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                    />
                    <span className="ml-2 text-sm">{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

       
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredproduct.map((product) => (
              <div
                className="card p-2" 
                style={{ width: '18rem' }}
                key={product._id}
              >
                <img
                  src={product.image && product.image.startsWith('http') 
                    ? product.image 
                    : `http://localhost:7777/uploads/${product.image}`
                  }
                  className="card-img-top w-full h-48 object-cover rounded-lg" 
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h5 className="price">₹{product.price} onwards</h5>
                  {product.freeDelivery && (
                    <div className="text-green-500 font-bold">Free Delivery</div>
                  )}
                  <Buynow product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filtersection;

// import React, { useState } from 'react';
// import Buynow from './Buynow';

// function Filtersection({ product }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('relevance');
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const categories = ["women's clothing", "men's clothing", 'Kids', 'Electronics', 'Beauty Product', "jewelery", "Equipments", "Home Decoration"];

//   // Filter categories based on search term
//   const filteredCategories = categories.filter((category) =>
//     category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle sorting
//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   // Handle checkbox toggle for categories
//   const handleCheckboxChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter((item) => item !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   // Sort and filter product based on the selected categories and sort order
//   const filteredproduct = product
//     .filter((product) => {
//       if (selectedCategories.length > 0) {
//         return selectedCategories.includes(product.category);
//       }
//       return true; // Show all product if no category selected
//     })
//     .sort((a, b) => {
//       if (sortBy === 'low-to-high') {
//         return a.price - b.price;
//       } else if (sortBy === 'high-to-low') {
//         return b.price - a.price;
//       } else if (sortBy === 'newest') {
//         return new Date(b.createdAt) - new Date(a.createdAt); // Using createdAt for sorting by newest
//       } else {
//         return 0;
//       }
//     });

//   return (
//     <>
//       <div className="mt-8 mb-8">
//         <h1 className="text-4xl font-bold">Products For You</h1>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filter Section */}
//         <aside className="w-full md:w-1/4 lg:w-1/5 p-4 bg-white shadow-md">
//           <div className="mb-6">
//             <h3 className="text-lg font-medium mb-2">Sort By</h3>
//             <select
//               value={sortBy}
//               onChange={handleSortChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             >
//               <option value="relevance">Relevance</option>
//               <option value="low-to-high">Price: Low to High</option>
//               <option value="high-to-low">Price: High to Low</option>
//               <option value="newest">Newest Arrivals</option>
//             </select>
//           </div>

//           <div className="mb-6">
//             <h3 className="text-lg font-medium mb-2">Category</h3>
//             <input
//               type="text"
//               placeholder="Search Categories"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-2">Categories</h3>
//             <ul className="space-y-2">
//               {filteredCategories.map((category, index) => (
//                 <li key={index}>
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600"
//                       checked={selectedCategories.includes(category)}
//                       onChange={() => handleCheckboxChange(category)}
//                     />
//                     <span className="ml-2 text-sm">{category}</span>
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>

//         {/* Product Section */}
//         <div className="flex-grow">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredproduct.map((product) => (
//               <div
//                 className="card p-2"
//                 style={{ width: '18rem' }}
//                 key={product._id}
//               >
//                 <img
//                   src={product.imageUrl} // Correct field name for image URL
//                   className="card-img-top w-full h-48 object-cover rounded-lg"
//                   alt={product.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <h5 className="price">₹{product.price} onwards</h5>
//                   {product.freeDelivery && (
//                     <div className="text-green-500 font-bold">Free Delivery</div>
//                   )}
//                   <Buynow product={product} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Filtersection;










