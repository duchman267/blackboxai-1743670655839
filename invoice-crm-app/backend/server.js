const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Import routes (will be created later)
const invoiceRoutes = require('./routes/invoiceRoutes');
const serviceOrderRoutes = require('./routes/serviceOrderRoutes');
const customerRoutes = require('./routes/customerRoutes');

// Import middleware (will be created later)
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/invoices', invoiceRoutes);
app.use('/api/service-orders', serviceOrderRoutes);
app.use('/api/customers', customerRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Invoice & CRM API' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});