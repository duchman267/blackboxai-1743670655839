// Temporary storage (replace with database in production)
let customers = [];

// Get all customers
exports.getCustomers = (req, res, next) => {
  try {
    res.json({
      success: true,
      data: customers
    });
  } catch (error) {
    next(error);
  }
};

// Get single customer
exports.getCustomerById = (req, res, next) => {
  try {
    const customer = customers.find(c => c.id === req.params.id);
    if (!customer) {
      const error = new Error('Customer not found');
      error.status = 404;
      throw error;
    }
    res.json({
      success: true,
      data: customer
    });
  } catch (error) {
    next(error);
  }
};

// Create customer
exports.createCustomer = (req, res, next) => {
  try {
    const { 
      name,
      email,
      phone,
      address,
      company
    } = req.body;

    // Basic validation
    if (!name || !email) {
      const error = new Error('Please provide name and email');
      error.status = 400;
      throw error;
    }

    const newCustomer = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      address,
      company,
      notes: [], // CRM notes array
      status: 'active',
      totalSpent: 0, // Track customer spending
      lastContact: null,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    customers.push(newCustomer);
    
    res.status(201).json({
      success: true,
      data: newCustomer
    });
  } catch (error) {
    next(error);
  }
};

// Update customer
exports.updateCustomer = (req, res, next) => {
  try {
    const index = customers.findIndex(c => c.id === req.params.id);
    if (index === -1) {
      const error = new Error('Customer not found');
      error.status = 404;
      throw error;
    }

    const updatedCustomer = {
      ...customers[index],
      ...req.body,
      updatedAt: new Date()
    };

    customers[index] = updatedCustomer;

    res.json({
      success: true,
      data: updatedCustomer
    });
  } catch (error) {
    next(error);
  }
};

// Delete customer
exports.deleteCustomer = (req, res, next) => {
  try {
    const index = customers.findIndex(c => c.id === req.params.id);
    if (index === -1) {
      const error = new Error('Customer not found');
      error.status = 404;
      throw error;
    }

    customers.splice(index, 1);

    res.status(200).json({
      success: true,
      message: 'Customer deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Add customer note (CRM functionality)
exports.addCustomerNote = (req, res, next) => {
  try {
    const { content, type = 'general' } = req.body;
    
    if (!content) {
      const error = new Error('Note content is required');
      error.status = 400;
      throw error;
    }

    const customer = customers.find(c => c.id === req.params.id);
    if (!customer) {
      const error = new Error('Customer not found');
      error.status = 404;
      throw error;
    }

    const newNote = {
      id: Date.now().toString(),
      content,
      type, // e.g., 'general', 'meeting', 'call', 'email'
      createdAt: new Date()
    };

    customer.notes.push(newNote);
    customer.lastContact = new Date();
    customer.updatedAt = new Date();

    res.status(201).json({
      success: true,
      data: newNote
    });
  } catch (error) {
    next(error);
  }
};