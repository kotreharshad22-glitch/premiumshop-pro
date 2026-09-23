const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  {
    id: 1,
    name: 'Aero Runner',
    category: 'Shoes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Nova Backpack',
    category: 'Bags',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Orbit Watch',
    category: 'Accessories',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Cloud Hoodie',
    category: 'Apparel',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80'
  }
];

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    name: 'PremiumShop Pro'
  });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

// Serve the website from the repository root
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`PremiumShop Pro running on port ${PORT}`);
});
