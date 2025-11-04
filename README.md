# Mobile Phone Store

A Node.js web application with EJS templating that displays a catalog of mobile phones with their prices and specifications.

## Features

- 📱 Mobile phone catalog with prices
- 🔍 Individual phone detail pages
- 📱 Responsive design with Bootstrap
- 🎨 Modern UI with custom CSS
- 🔗 RESTful API endpoint
- 📋 Phone specifications display

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Bootstrap 5
- **Styling**: Custom CSS with gradients and animations
- **Data**: In-memory data storage (can be easily extended to use a database)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd azure-app-service-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
   Or start in production mode:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
azure-app-service-test/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── public/               # Static files
│   ├── css/
│   │   └── style.css     # Custom styles
│   └── images/           # Phone images
├── views/                # EJS templates
│   ├── index.ejs         # Home page
│   ├── phone-detail.ejs  # Phone detail page
│   ├── 404.ejs          # Error page
│   └── layout.ejs       # Layout template
└── README.md            # This file
```

## API Endpoints

- `GET /` - Home page with phone catalog
- `GET /phone/:id` - Individual phone details
- `GET /api/phones` - JSON API for all phones

## Phone Data

The application includes sample data for 6 mobile phones:
- iPhone 15 Pro
- Samsung Galaxy S24 Ultra
- Google Pixel 8
- OnePlus 12
- Xiaomi 14
- iPhone 14

Each phone includes:
- Name and brand
- Price
- Specifications (storage, screen size, camera)
- Image placeholder

## Customization

### Adding New Phones

Edit the `mobilePhones` array in `app.js`:

```javascript
const mobilePhones = [
  {
    id: 7,
    name: 'Your Phone Name',
    brand: 'Brand Name',
    price: 599,
    image: '/images/your-phone.jpg',
    specs: {
      storage: '128GB',
      screen: '6.1 inch',
      camera: '48MP'
    }
  }
  // ... other phones
];
```

### Adding Images

Place phone images in the `public/images/` directory and reference them in the phone data.

## Deployment

This application is ready for deployment to various platforms:

### Azure App Service
1. Create an Azure App Service
2. Deploy using Git or Azure CLI
3. Set Node.js version in Application Settings

### Other Platforms
- Heroku
- Vercel
- Netlify
- Railway

## Future Enhancements

- 🗄️ Database integration (MongoDB, PostgreSQL)
- 🔍 Search and filter functionality
- 🛒 Shopping cart implementation
- 👤 User authentication
- 💳 Payment integration
- 📊 Admin panel for managing phones
- 🌟 Product reviews and ratings

## License

MIT License - feel free to use this project for learning and development purposes.