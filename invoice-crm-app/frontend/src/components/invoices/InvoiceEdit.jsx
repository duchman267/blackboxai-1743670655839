import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function InvoiceEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Example initial state (in a real app, this would be fetched from an API)
  const [invoice, setInvoice] = useState({
    customerName: 'Acme Corp',
    customerEmail: 'billing@acmecorp.com',
    invoiceDate: '2023-05-20',
    dueDate: '2023-06-20',
    status: 'pending',
    notes: 'Net 30 payment terms',
  });

  const [items, setItems] = useState([
    { description: 'Web Development Services', quantity: 1, price: 1500 }
  ]);

  useEffect(() => {
    // In a real app, fetch invoice data here
    // Example: fetchInvoice(id).then(data => { setInvoice(data); setItems(data.items); });
  }, [id]);

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, price: 0 }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // After successful update, navigate back to invoice list
    navigate('/invoices');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Edit Invoice #{id}</h1>
      </div>

      {/* Invoice Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card space-y-6">
          {/* Customer Information */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                value={invoice.customerName}
                onChange={(e) => setInvoice({ ...invoice, customerName: e.target.value })}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">
                Customer Email
              </label>
              <input
                type="email"
                id="customerEmail"
                value={invoice.customerEmail}
                onChange={(e) => setInvoice({ ...invoice, customerEmail: e.target.value })}
                className="mt-1 input"
                required
              />
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label htmlFor="invoiceDate" className="block text-sm font-medium text-gray-700">
                Invoice Date
              </label>
              <input
                type="date"
                id="invoiceDate"
                value={invoice.invoiceDate}
                onChange={(e) => setInvoice({ ...invoice, invoiceDate: e.target.value })}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                value={invoice.dueDate}
                onChange={(e) => setInvoice({ ...invoice, dueDate: e.target.value })}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                value={invoice.status}
                onChange={(e) => setInvoice({ ...invoice, status: e.target.value })}
                className="mt-1 input"
                required
              >
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
        </div>

        {/* Invoice Items */}
        <div className="card space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Invoice Items</h2>
            <button
              type="button"
              onClick={addItem}
              className="btn-secondary"
            >
              <i className="fas fa-plus mr-2"></i>
              Add Item
            </button>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                    className="mt-1 input"
                    required
                  />
                </div>
                <div className="w-24">
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value))}
                    className="mt-1 input"
                    required
                  />
                </div>
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.price}
                    onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value))}
                    className="mt-1 input"
                    required
                  />
                </div>
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700">
                    Total
                  </label>
                  <div className="mt-1 py-2">
                    ${(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-red-600 hover:text-red-900"
                    disabled={items.length === 1}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-end">
              <div className="text-right">
                <p className="text-sm text-gray-500">Subtotal</p>
                <p className="text-lg font-medium text-gray-900">${calculateTotal().toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="card">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            id="notes"
            value={invoice.notes}
            onChange={(e) => setInvoice({ ...invoice, notes: e.target.value })}
            rows={3}
            className="mt-1 input"
            placeholder="Add any additional notes..."
          ></textarea>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/invoices')}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Update Invoice
          </button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceEdit;