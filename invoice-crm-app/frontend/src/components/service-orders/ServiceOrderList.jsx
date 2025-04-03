import { useState } from 'react';
import { Link } from 'react-router-dom';

function ServiceOrderList() {
  // Example service orders data (in a real app, this would come from an API)
  const [serviceOrders] = useState([
    {
      id: '1',
      number: 'SO-2023-001',
      customerName: 'Acme Corp',
      serviceType: 'Maintenance',
      scheduledDate: '2023-05-25',
      technician: 'John Smith',
      status: 'scheduled'
    },
    {
      id: '2',
      number: 'SO-2023-002',
      customerName: 'Tech Solutions Inc',
      serviceType: 'Repair',
      scheduledDate: '2023-05-26',
      technician: 'Jane Doe',
      status: 'in-progress'
    },
    {
      id: '3',
      number: 'SO-2023-003',
      customerName: 'Global Services Ltd',
      serviceType: 'Installation',
      scheduledDate: '2023-05-27',
      technician: 'Mike Johnson',
      status: 'completed'
    }
  ]);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'completed':
        return 'badge-success';
      case 'in-progress':
        return 'badge-warning';
      case 'scheduled':
        return 'badge bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Service Orders</h1>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/service-orders/create"
            className="btn-primary"
          >
            <i className="fas fa-plus mr-2"></i>
            Create Service Order
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">Search service orders</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="input pl-10"
                placeholder="Search service orders..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select className="input" defaultValue="all">
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select className="input" defaultValue="all">
              <option value="all">All Technicians</option>
              <option value="john">John Smith</option>
              <option value="jane">Jane Doe</option>
              <option value="mike">Mike Johnson</option>
            </select>
          </div>
        </div>
      </div>

      {/* Service Orders Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Customer</th>
              <th>Service Type</th>
              <th>Scheduled Date</th>
              <th>Technician</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {serviceOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.number}</td>
                <td>{order.customerName}</td>
                <td>{order.serviceType}</td>
                <td>{order.scheduledDate}</td>
                <td>
                  <div className="flex items-center">
                    <i className="fas fa-user-circle text-gray-400 mr-2"></i>
                    {order.technician}
                  </div>
                </td>
                <td>
                  <span className={getStatusBadgeClass(order.status)}>
                    {order.status.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <Link
                      to={`/service-orders/${order.id}/edit`}
                      className="text-primary-600 hover:text-primary-900"
                      title="Edit"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button
                      className="text-primary-600 hover:text-primary-900"
                      title="View Details"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      title="Cancel"
                    >
                      <i className="fas fa-times-circle"></i>
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

export default ServiceOrderList;