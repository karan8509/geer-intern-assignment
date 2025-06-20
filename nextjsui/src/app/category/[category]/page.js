"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const CategoryPage = () => {
  const params = useParams(); // useParams returns an object
  const category = params?.category; // safely extract category param

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/create/category/${category}`
        );
        console.log("--->", res.data);
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.warn("Data is not an array:", res.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent">
        Category: {category}
      </h1>

      {/* Loader */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white p-2 rounded shadow hover:shadow-lg transition-all"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-60 w-full object-cover rounded"
              />
              <h2 className="text-base sm:text-lg font-semibold mt-3">
                {p.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(p)}
                className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-2">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-48 w-full object-contain rounded"
            />
            <h2 className="text-lg font-bold mt-3">{selectedProduct.name}</h2>
            <p className="capitalize text-gray-600 text-sm">Category: {category}</p>
            <p className="text-gray-700 mt-1 text-sm">
              {selectedProduct.description}
            </p>
            <p className="text-green-600 font-semibold mt-2">
              ₹ {selectedProduct.price}
            </p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
