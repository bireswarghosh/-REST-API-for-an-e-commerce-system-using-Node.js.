const mongoose = require("mongoose");
const VariantSchema = require("./Variant");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  variants: [VariantSchema],
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);