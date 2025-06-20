const express = require("express");
const {
  createProduct,
  getAllproducts,
  deleteProduct,
 getProductsByCategory
} = require("../Controllers/ProductController");

const product = express.Router();

// Get all products
product.get("/", getAllproducts);

// Get products by category (filtering by category)
product.get("/category/:category", getProductsByCategory); // Change this route for category-based filtering

// Create a new product
product.post("/product", createProduct);

// Delete a product by ID
product.delete("/:id", deleteProduct);

module.exports = product;
