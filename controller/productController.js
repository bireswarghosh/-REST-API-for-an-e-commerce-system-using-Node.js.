const Product = require("../schema/Product");
// const Product = require("../schema/Product");

const createProduct = async (req, res) => {
  // Create a product with variants logic
  const { name, description, price, variants } = req.body;
  const product = new Product({ name, description, price, variants });
  await product.save();
  res.json(product);
};

const getAllProducts = async (req, res) => {
  // Get all products logic
  const products = await Product.find();
  res.json(products);
};

const getProductById = async (req, res) => {
  // Get a single product by id logic
  const product = await Product.findById(req.params.id);
  res.json(product);
};

const updateProduct = async (req, res) => {
  // Update a product by id logic
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  // Delete a product by id logic
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.json(deletedProduct);
};

const searchProducts = async (req, res) => {
  // Search products logic
  try {
    const query = req.query.query; // Extract the search query from the query parameters

    // Use the `$or` operator to search across multiple fields
    const searchResult = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive regex search in the product name
        { description: { $regex: query, $options: "i" } }, // Case-insensitive regex search in the product description
        { "variants.name": { $regex: query, $options: "i" } }, // Case-insensitive regex search in variant names
      ],
    });

    res.status(200).send(searchResult);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts
};