import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  await Product.deleteMany();

  const sampleProducts = [
    {
      name: 'Men T-Shirt',
      slug: 'men-tshirt',
      description: 'High quality cotton t-shirt',
      price: 499,
      image: '/images/men.jpg',
      category: 'Men',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Women Dress',
      slug: 'women-dress',
      description: 'Elegant summer dress',
      price: 899,
      image: '/images/women.jpg',
      category: 'Women',
      sizes: ['S', 'M', 'L']
    }
  ];

  await Product.insertMany(sampleProducts);
  res.status(201).json({ message: 'Seed data inserted ✅' });
}
