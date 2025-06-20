const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const productRoute = require("./src/Routes/product");
const Connection = require("./src/config/db");





const corsOptions = {
  origin: "http://localhost:3000", // Allow only requests from this domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true // Enable cookies or credentials if needed
};
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use("/api/create", productRoute);


const ServerStart = async () => {
  try {
    await Connection();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

ServerStart();
