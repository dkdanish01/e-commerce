 import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String },
  sizes: [{ type: String }]
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
