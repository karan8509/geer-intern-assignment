import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/create");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);



  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/create/${productId}`);
      if (response.status === 200) {
        setProducts(products.filter(product => product._id !== productId));
      }
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };


  if (loading)
    return (
      <p className="text-center text-xl text-blue-500">Loading products...</p>
    );
  if (error)
    return <p className="text-center text-xl text-red-500">{error}</p>;

  return (
    <div className="px-4 py-6 w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block w-full max-w-screen-xl mx-auto bg-white text-black rounded-lg shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="text-black bg-white">
              <th className="py-4 px-6 text-left">Product</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Category</th>
              <th className="py-4 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-t border-gray-300 hover:bg-gray-100"
              >
                <td className="py-4 px-6 flex items-center gap-4">
                  <img
                    src={product.image || "/default-image.png"}
                    alt={product.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{product.name}</span>
                </td>
                <td className="py-4 px-6">${product.price.toFixed(2)}</td>
                <td className="py-4 px-6 capitalize">{product.category}</td>
                <td className="py-4 px-6">
                  <button
                    className="text-black hover:text-red-600"
                    onClick={() => handleDelete(product._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow p-4 flex flex-col gap-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image || "/default-image.png"}
                alt={product.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">{product.name}</p>
                <p className="text-sm text-gray-500 capitalize">
                  {product.category}
                </p>
              </div>
            </div>
            <p className="text-green-600 font-semibold">
              ${product.price.toFixed(2)}
            </p>
            <button
              className="self-start text-black hover:text-red-600"
              onClick={() => handleDelete(product._id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
  