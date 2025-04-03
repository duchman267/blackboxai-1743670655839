import { useState } from 'react';
import { Link } from 'react-router-dom';

function InvoiceList() {
  // Example invoices data (in a real app, this would come from an API)
  const [invoices] = useState([
    {
      id: '1',
      number: 'INV-2023-001',
      customerName: 'Acme Corp',
      date: '2023-05-20',
      dueDate: '2023-06-20',
      amount: 1500.00,
      status: 'paid'
    },
    {
      id: '2',
      number: 'INV-2023-002',
      customerName: 'Tech Solutions Inc',
      date: '2023-05-21',
      dueDate: '2023-06-21',
      amount: 2300.00,
      status: 'pending'
    },
    {
      id: '3',
      number: 'INV-2023-003',
      customerName: 'Global Services Ltd',
      date: '2023-05-22',
      dueDate: '2023-06-22',
      amount: 3200.00,
      status: 'overdue'
    }
  ]);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'paid':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'overdue':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Invoices</h1>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/invoices/create"
            className="btn-primary"
          >
            <i className="fas fa-plus mr-2"></i>
            Create Invoice
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">Search invoices</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="input pl-10"
                placeholder="Search invoices..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select className="input" defaultValue="all">
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
            <select className="input" defaultValue="newest">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Amount</option>
              <option value="lowest">Lowest Amount</option>
            </select>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.number}</td>
                <td>{invoice.customerName}</td>
                <td>{invoice.date}</td>
                <td>{invoice.dueDate}</td>
                <td>${invoice.amount.toFixed(2)}</td>
                <td>
                  <span className={getStatusBadgeClass(invoice.status)}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <Link
                      to={`/invoices/${invoice.id}/edit`}
                      className="text-primary-600 hover:text-primary-900"
                      title="Edit"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button
                      className="text-primary-600 hover:text-primary-900"
                      title="Download PDF"
                    >
                      <i className="fas fa-download"></i>
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="btn-secondary">Previous</button>
          <button className="btn-secondary">Next</button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">10</span> of{' '}
              <span className="font-medium">20</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button className="btn-secondary rounded-l-md">Previous</button>
              <button className="btn-primary">1</button>
              <button className="btn-secondary">2</button>
              <button className="btn-secondary rounded-r-md">Next</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;