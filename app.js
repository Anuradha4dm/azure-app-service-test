const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample mobile phone data
const mobilePhones = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 999,
    image: '/images/placeholder.svg',
    specs: {
      storage: '128GB',
      screen: '6.1 inch',
      camera: '48MP'
    }
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1199,
    image: '/images/samsung-placeholder.svg',
    specs: {
      storage: '256GB',
      screen: '6.8 inch',
      camera: '200MP'
    }
  },
  {
    id: 3,
    name: 'Google Pixel 8',
    brand: 'Google',
    price: 699,
    image: '/images/google-placeholder.svg',
    specs: {
      storage: '128GB',
      screen: '6.2 inch',
      camera: '50MP'
    }
  },
  {
    id: 4,
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    image: '/images/oneplus-placeholder.svg',
    specs: {
      storage: '256GB',
      screen: '6.82 inch',
      camera: '50MP'
    }
  },
  {
    id: 5,
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    price: 599,
    image: '/images/placeholder.svg',
    specs: {
      storage: '256GB',
      screen: '6.36 inch',
      camera: '50MP'
    }
  },
  {
    id: 6,
    name: 'iPhone 14',
    brand: 'Apple',
    price: 799,
    image: '/images/placeholder.svg',
    specs: {
      storage: '128GB',
      screen: '6.1 inch',
      camera: '12MP'
    }
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Mobile Phone Store',
    phones: mobilePhones 
  });
});

app.get('/phone/:id', (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = mobilePhones.find(p => p.id === phoneId);
  
  if (!phone) {
    return res.status(404).render('404', { title: 'Phone Not Found' });
  }
  
  res.render('phone-detail', { 
    title: phone.name,
    phone: phone 
  });
});

// API endpoint for phones (optional)
app.get('/api/phones', (req, res) => {
  res.json(mobilePhones);
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;