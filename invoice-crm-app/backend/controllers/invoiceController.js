// Temporary storage (replace with database in production)
let invoices = [];

// Get all invoices
exports.getInvoices = (req, res) => {
  try {
    res.json({
      success: true,
      data: invoices
    });
  } catch (error) {
    next(error);
  }
};

// Get single invoice
exports.getInvoiceById = (req, res, next) => {
  try {
    const invoice = invoices.find(i => i.id === req.params.id);
    if (!invoice) {
      const error = new Error('Invoice not found');
      error.status = 404;
      throw error;
    }
    res.json({
      success: true,
      data: invoice
    });
  } catch (error) {
    next(error);
  }
};

// Create invoice
exports.createInvoice = (req, res, next) => {
  try {
    const { customerName, items, totalAmount, dueDate } = req.body;

    // Basic validation
    if (!customerName || !items || !totalAmount) {
      const error = new Error('Please provide customerName, items, and totalAmount');
      error.status = 400;
      throw error;
    }

    const newInvoice = {
      id: Date.now().toString(),
      number: `INV-${Date.now()}`,
      customerName,
      items,
      totalAmount,
      dueDate,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    invoices.push(newInvoice);
    
    res.status(201).json({
      success: true,
      data: newInvoice
    });
  } catch (error) {
    next(error);
  }
};

// Update invoice
exports.updateInvoice = (req, res, next) => {
  try {
    const index = invoices.findIndex(i => i.id === req.params.id);
    if (index === -1) {
      const error = new Error('Invoice not found');
      error.status = 404;
      throw error;
    }

    const updatedInvoice = {
      ...invoices[index],
      ...req.body,
      updatedAt: new Date()
    };

    invoices[index] = updatedInvoice;

    res.json({
      success: true,
      data: updatedInvoice
    });
  } catch (error) {
    next(error);
  }
};

// Delete invoice
exports.deleteInvoice = (req, res, next) => {
  try {
    const index = invoices.findIndex(i => i.id === req.params.id);
    if (index === -1) {
      const error = new Error('Invoice not found');
      error.status = 404;
      throw error;
    }

    invoices.splice(index, 1);

    res.status(200).json({
      success: true,
      message: 'Invoice deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};