const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariantSchema = new Schema({
  // your variant schema fields
  name: String,
  sku: String,
  additionalCost: Number,
  stockCount: Number,
}, 
{ timestamps: { createdAt: true, updatedAt: false
 }
});

module.exports = VariantSchema;