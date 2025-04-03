import { Link } from 'react-router-dom';

function Dashboard() {
  // Example statistics (in a real app, these would come from an API)
  const stats = [
    { name: 'Total Invoices', value: '24', icon: 'fa-file-invoice' },
    { name: 'Service Orders', value: '12', icon: 'fa-wrench' },
    { name: 'Active Customers', value: '36', icon: 'fa-users' },
    { name: 'Total Revenue', value: '$24,500', icon: 'fa-dollar-sign' },
  ];

  // Example recent activities
  const recentActivities = [
    { type: 'invoice', id: '1', description: 'New invoice created for Customer A', time: '2 hours ago' },
    { type: 'service', id: '2', description: 'Service order completed for Customer B', time: '4 hours ago' },
    { type: 'customer', id: '3', description: 'New customer registered', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/invoices/create"
            className="btn-primary mr-3"
          >
            <i className="fas fa-plus mr-2"></i>
            New Invoice
          </Link>
          <Link
            to="/service-orders/create"
            className="btn-secondary"
          >
            <i className="fas fa-plus mr-2"></i>
            New Service Order
          </Link>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <i className={`fas ${stat.icon} text-2xl text-primary-600`}></i>
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="mt-1 text-xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="flow-root">
          <ul className="-mb-8">
            {recentActivities.map((activity, index) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {index !== recentActivities.length - 1 && (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                        activity.type === 'invoice' ? 'bg-blue-500' :
                        activity.type === 'service' ? 'bg-green-500' : 'bg-purple-500'
                      }`}>
                        <i className={`fas fa-${
                          activity.type === 'invoice' ? 'file-invoice' :
                          activity.type === 'service' ? 'wrench' : 'user'
                        } text-white`}></i>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time>{activity.time}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/customers" className="card hover:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <i className="fas fa-users text-2xl text-primary-600"></i>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Manage Customers</h3>
              <p className="text-sm text-gray-500">View and manage your customer database</p>
            </div>
          </div>
        </Link>

        <Link to="/invoices" className="card hover:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <i className="fas fa-file-invoice text-2xl text-primary-600"></i>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">View Invoices</h3>
              <p className="text-sm text-gray-500">Access all invoices and their status</p>
            </div>
          </div>
        </Link>

        <Link to="/service-orders" className="card hover:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <i className="fas fa-wrench text-2xl text-primary-600"></i>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Service Orders</h3>
              <p className="text-sm text-gray-500">Track and manage service orders</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;