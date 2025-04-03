import { useState } from 'react';
import { Link } from 'react-router-dom';

function CustomerList() {
  // Example customers data (in a real app, this would come from an API)
  const [customers] = useState([
    {
      id: '1',
      name: 'Acme Corp',
      email: 'contact@acmecorp.com',
      phone: '(555) 123-4567',
      totalSpent: 15000,
      lastContact: '2023-05-20',
      status: 'active',
      type: 'business'
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 234-5678',
      totalSpent: 2500,
      lastContact: '2023-05-19',
      status: 'active',
      type: 'individual'
    },
    {
      id: '3',
      name: 'Tech Solutions Inc',
      email: 'info@techsolutions.com',
      phone: '(555) 345-6789',
      totalSpent: 8000,
      lastContact: '2023-05-18',
      status: 'inactive',
      type: 'business'
    }
  ]);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'active':
        return 'badge-success';
      case 'inactive':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/customers/create"
            className="btn-primary"
          >
            <i className="fas fa-plus mr-2"></i>
            Add Customer
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">Search customers</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="input pl-10"
                placeholder="Search customers..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select className="input" defaultValue="all">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <select className="input" defaultValue="all">
              <option value="all">All Types</option>
              <option value="business">Business</option>
              <option value="individual">Individual</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map((customer) => (
          <div key={customer.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link to={`/customers/${customer.id}/edit`} className="hover:text-primary-600">
                    {customer.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{customer.type}</p>
              </div>
              <span className={getStatusBadgeClass(customer.status)}>
                {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
              </span>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <i className="fas fa-envelope text-gray-400 w-5"></i>
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="fas fa-phone text-gray-400 w-5"></i>
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="fas fa-dollar-sign text-gray-400 w-5"></i>
                <span>Total Spent: ${customer.totalSpent.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="fas fa-calendar text-gray-400 w-5"></i>
                <span>Last Contact: {customer.lastContact}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="flex space-x-3">
                <button
                  className="text-gray-600 hover:text-primary-600"
                  title="Add Note"
                >
                  <i className="fas fa-sticky-note"></i>
                </button>
                <button
                  className="text-gray-600 hover:text-primary-600"
                  title="Schedule Meeting"
                >
                  <i className="fas fa-calendar-plus"></i>
                </button>
                <button
                  className="text-gray-600 hover:text-primary-600"
                  title="Send Email"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div className="flex space-x-3">
                <Link
                  to={`/customers/${customer.id}/edit`}
                  className="text-primary-600 hover:text-primary-900"
                  title="Edit"
                >
                  <i className="fas fa-edit"></i>
                </Link>
                <button
                  className="text-red-600 hover:text-red-900"
                  title="Delete"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
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

export default CustomerList;