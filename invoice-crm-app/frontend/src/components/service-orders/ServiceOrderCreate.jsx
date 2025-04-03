import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ServiceOrderCreate() {
  const navigate = useNavigate();
  
  const [serviceOrder, setServiceOrder] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: '',
    description: '',
    scheduledDate: '',
    scheduledTime: '',
    technician: '',
    priority: 'normal',
    status: 'scheduled',
    notes: ''
  });

  // Example technicians list (in a real app, this would come from an API)
  const technicians = [
    { id: '1', name: 'John Smith' },
    { id: '2', name: 'Jane Doe' },
    { id: '3', name: 'Mike Johnson' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // After successful creation, navigate back to service orders list
    navigate('/service-orders');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceOrder(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Create Service Order</h1>
      </div>

      {/* Service Order Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Information */}
        <div className="card space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Customer Information</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={serviceOrder.customerName}
                onChange={handleChange}
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
                name="customerEmail"
                value={serviceOrder.customerEmail}
                onChange={handleChange}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">
                Customer Phone
              </label>
              <input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                value={serviceOrder.customerPhone}
                onChange={handleChange}
                className="mt-1 input"
                required
              />
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="card space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Service Details</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={serviceOrder.serviceType}
                onChange={handleChange}
                className="mt-1 input"
                required
              >
                <option value="">Select a service type</option>
                <option value="installation">Installation</option>
                <option value="repair">Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="inspection">Inspection</option>
              </select>
            </div>
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={serviceOrder.priority}
                onChange={handleChange}
                className="mt-1 input"
                required
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Service Description
              </label>
              <textarea
                id="description"
                name="description"
                value={serviceOrder.description}
                onChange={handleChange}
                rows={3}
                className="mt-1 input"
                placeholder="Describe the service needed..."
                required
              ></textarea>
            </div>
          </div>
        </div>

        {/* Scheduling */}
        <div className="card space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Scheduling</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="scheduledDate" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="scheduledDate"
                name="scheduledDate"
                value={serviceOrder.scheduledDate}
                onChange={handleChange}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="scheduledTime" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="scheduledTime"
                name="scheduledTime"
                value={serviceOrder.scheduledTime}
                onChange={handleChange}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="technician" className="block text-sm font-medium text-gray-700">
                Assign Technician
              </label>
              <select
                id="technician"
                name="technician"
                value={serviceOrder.technician}
                onChange={handleChange}
                className="mt-1 input"
                required
              >
                <option value="">Select a technician</option>
                {technicians.map(tech => (
                  <option key={tech.id} value={tech.id}>{tech.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={serviceOrder.status}
                onChange={handleChange}
                className="mt-1 input"
                required
              >
                <option value="scheduled">Scheduled</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="card">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={serviceOrder.notes}
            onChange={handleChange}
            rows={3}
            className="mt-1 input"
            placeholder="Add any additional notes or special instructions..."
          ></textarea>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/service-orders')}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Create Service Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceOrderCreate;