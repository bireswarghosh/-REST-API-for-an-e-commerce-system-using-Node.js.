
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/e-commerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


















































// // Setup Express and Mongoose (MongoDB)
// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// app.use(express.json()); // for parsing application/json

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1/e-commerce", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define Schemas
// const VariantSchema = new mongoose.Schema(
//   {
//     name: String,
//     sku: String,
//     additionalCost: Number,
//     stockCount: Number,
//   },
//   { timestamps: { createdAt: true, updatedAt: false } }
// );
// // This will only create a createdAt field and not an updatedAt field.

// const ProductSchema = new mongoose.Schema(
//   {
//     name: String,
//     description: String,
//     price: Number,
//     variants: [VariantSchema],
//   },
//   { timestamps: true }
// ); // This will create both createdAt and updatedAt fields.

// // Create Models
// const Product = mongoose.model("Product", ProductSchema);
// const Variant = mongoose.model("Variant", VariantSchema);

// // Routes for Products
// app.post("/products", async (req, res) => {
//   // Create a product with variants
//   const { name, description, price, variants } = req.body;
//   const product = new Product({ name, description, price, variants });
//   await product.save();
//   res.json(product);
//   // Create a product with variants
// });

// app.get("/products", async (req, res) => {
//   // Get all products
//   const products = await Product.find();
//   res.json(products);
// });
// // });

// app.get("/products/:id", async (req, res) => {
//   // Get a single product by id
//   const product = await Product.findById(req.params.id);
//   res.json(product);
// });

// app.put("/products/:id", async (req, res) => {
//   // Update a product by id
//   const updatedProduct = await Product.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(updatedProduct);
// });

// app.delete("/products/:id", async (req, res) => {
//   // Delete a product by id
//   const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//   res.json(deletedProduct);
// });

// app.get("/products/search", async (req, res) => {
//   try {
//     const query = req.query.query; // Extract the search query from the query parameters

//     // Use the `$or` operator to search across multiple fields
//     const searchResult = await Product.find({
//       $or: [
//         { name: { $regex: query, $options: "i" } }, // Case-insensitive regex search in the product name
//         { description: { $regex: query, $options: "i" } }, // Case-insensitive regex search in the product description
//         { "variants.name": { $regex: query, $options: "i" } }, // Case-insensitive regex search in variant names
//       ],
//     });

//     res.status(200).send(searchResult);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// // Start server  process.env.PORT ||
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
