// Temporary storage (replace with database in production)
let serviceOrders = [];

// Get all service orders
exports.getServiceOrders = (req, res, next) => {
  try {
    res.json({
      success: true,
      data: serviceOrders
    });
  } catch (error) {
    next(error);
  }
};

// Get single service order
exports.getServiceOrderById = (req, res, next) => {
  try {
    const order = serviceOrders.find(o => o.id === req.params.id);
    if (!order) {
      const error = new Error('Service order not found');
      error.status = 404;
      throw error;
    }
    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    next(error);
  }
};

// Create service order
exports.createServiceOrder = (req, res, next) => {
  try {
    const { 
      customerName, 
      serviceType, 
      description, 
      scheduledDate,
      technician 
    } = req.body;

    // Basic validation
    if (!customerName || !serviceType || !description) {
      const error = new Error('Please provide customerName, serviceType, and description');
      error.status = 400;
      throw error;
    }

    const newOrder = {
      id: Date.now().toString(),
      number: `SO-${Date.now()}`,
      customerName,
      serviceType,
      description,
      scheduledDate,
      technician,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    serviceOrders.push(newOrder);
    
    res.status(201).json({
      success: true,
      data: newOrder
    });
  } catch (error) {
    next(error);
  }
};

// Update service order
exports.updateServiceOrder = (req, res, next) => {
  try {
    const index = serviceOrders.findIndex(o => o.id === req.params.id);
    if (index === -1) {
      const error = new Error('Service order not found');
      error.status = 404;
      throw error;
    }

    const updatedOrder = {
      ...serviceOrders[index],
      ...req.body,
      updatedAt: new Date()
    };

    serviceOrders[index] = updatedOrder;

    res.json({
      success: true,
      data: updatedOrder
    });
  } catch (error) {
    next(error);
  }
};

// Delete service order
exports.deleteServiceOrder = (req, res, next) => {
  try {
    const index = serviceOrders.findIndex(o => o.id === req.params.id);
    if (index === -1) {
      const error = new Error('Service order not found');
      error.status = 404;
      throw error;
    }

    serviceOrders.splice(index, 1);

    res.status(200).json({
      success: true,
      message: 'Service order deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};