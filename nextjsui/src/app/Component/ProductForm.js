import axios from "axios";
import React, { useState } from "react";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductData({ ...productData, image: reader.result });
      };
      reader.readAsDataURL(file); // base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product Data:", productData);
    try {
      const product = await axios.post(
        " http://localhost:8000/api/create/product",
        productData
      );
      console.log("product success", product);
    } catch (error) {
      console.log(error.message, "<---");
    }
  };

  return (
    <div className="product-form-container p-4 bg-white rounded-md w-full max-w-sm mx-auto shadow-md">
      <h1 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent">
        Product Form
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
            placeholder="Enter product name"
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label
            htmlFor="category"
            className="block text-gray-700 mb-1 text-sm"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          >
            <option value="">Select Category</option>
            <option value="Ring">Ring</option>
            <option value="Earrings">Earrings</option>
            <option value="Bracelet">Bracelet (Kade)</option>
            <option value="Necklace">Necklace</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-3">
          <label htmlFor="price" className="block text-gray-700 mb-1 text-sm">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
            placeholder="Enter product price"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label htmlFor="image" className="block text-gray-700 mb-1 text-sm">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            accept="image/*" // Allows only image files
          />
          {/* Displaying the selected image preview */}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
