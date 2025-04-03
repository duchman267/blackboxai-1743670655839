const express = require('express');
const router = express.Router();

// Import service order controller (will be created next)
const {
  getServiceOrders,
  getServiceOrderById,
  createServiceOrder,
  updateServiceOrder,
  deleteServiceOrder
} = require('../controllers/serviceOrderController');

// Define routes
router.get('/', getServiceOrders);
router.get('/:id', getServiceOrderById);
router.post('/', createServiceOrder);
router.put('/:id', updateServiceOrder);
router.delete('/:id', deleteServiceOrder);

module.exports = router;