const express = require('express');
const router = express.Router();

// Import customer controller (will be created next)
const {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  addCustomerNote
} = require('../controllers/customerController');

// Define routes
router.get('/', getCustomers);
router.get('/:id', getCustomerById);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);
router.post('/:id/notes', addCustomerNote); // Additional route for CRM notes

module.exports = router;