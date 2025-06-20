const mongoose = require("mongoose");
require("dotenv").config()
const Connection = async () => {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = Connection;
