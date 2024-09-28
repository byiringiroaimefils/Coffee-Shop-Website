const Mongoose = require("mongoose");
const ProductSchema = new Mongoose.Schema(
    {
        Product: {
            type: String,
            required: true,
        },
        Image: {
            type: String,
            required: true,
        },
        Price: {
            type: String,
            required: true,
        },
        Decription: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const Product = Mongoose.model("Product", ProductSchema);
module.exports = Product;