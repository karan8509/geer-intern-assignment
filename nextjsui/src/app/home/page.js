"use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProductList() {
//   const [products, setProducts] = useState([]); // Store products
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [category, setCategory] = useState(""); // Selected category filter

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = "http://localhost:8000/api/create";
//         console.log

//         if (category) {
//           url += `?category=${category}`;
//         }

//         const response = await axios.get(url);
//         setProducts(response.data);
//         console.log(response.data, "<----"); // Log response for debugging
//         setLoading(false); // Stop loading
//       } catch (err) {
//         setError("Error fetching products");
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   const handleCategoryChange = (e) => setCategory(e.target.value);

//   if (loading) {
//     return <p className="text-center text-xl text-blue-500">Loading products...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-xl text-red-500">{error}</p>;
//   }

//   return (
//     <div className="p-4 bg-white text-black mt-[1px]">
//       {/* Main Flex Row */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filter Section */}
//         <div className="w-full md:w-1/4">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
//           <div className="flex flex-col gap-4">
//             {/* Category Filter */}
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Category</label>
//               <select
//                 className="border border-gray-300 rounded px-3 py-2 w-full"
//                 value={category}
//                 onChange={handleCategoryChange}
//               >
//                 <option value="">All</option>
//                 <option value="ring">Ring</option>
//                 <option value="earrings">Earrings</option>
//                 <option value="bracelet">Bracelet (Kade)</option>
//                 <option value="necklace">Necklace</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Product List Section */}
//         <div className="w-full md:w-3/4 flex flex-wrap gap-4 p-[30px]">
//           {products.length === 0 ? (
//             <p className="text-center text-lg text-gray-500">No products available.</p>
//           ) : (
//             products.map((product) => (
//               <div
//                 key={product._id}
//                 className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
//                   <p className="text-lg font-semibold text-blue-600 mt-2">
//                     ${product.price.toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import CategoryItem from "../component/CategoryItem";

import React from "react";
import CategoryItem from "../Component/CategoryItem";

const categories = [
  { href: "/Ring", name: "Rings", imageUrl: "/ring.png" },
  { href: "/Necklace", name: "Necklaces", imageUrl: "/necklace.png" },
  { href: "/Bracelet", name: "Bracelets", imageUrl: "/Bracelet.png" },
  { href: "/Earrings", name: "Earrings", imageUrl: "/Earrings.png" },
  { href: "/Anklet", name: "Anklets", imageUrl: "/anklet.png" },
  { href: "/Pendant", name: "Pendants", imageUrl: "/Pendant.png" },
  { href: "/Crown", name: "Crowns", imageUrl: "/Crown.png" },
  { href: "/ToeRing", name: "ToeRings", imageUrl: "/ToeRing.png" },
];

          
const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-xl text-gray-500">
          Discover the latest trends in eco-friendly and stylish clothing!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
         
        
          <CategoryItem  category={category} key={category.name} />
         
        ))}
      </div>
    </div>
  );
};

export default HomePage;
