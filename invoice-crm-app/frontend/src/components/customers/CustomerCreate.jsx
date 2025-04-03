import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerCreate() {
  const navigate = useNavigate();
  
  const [customer, setCustomer] = useState({
    name: '',
    type: 'individual',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    company: '',
    website: '',
    status: 'active',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // After successful creation, navigate back to customers list
    navigate('/customers');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Add New Customer</h1>
      </div>

      {/* Customer Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="card space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Basic Information</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={customer.name}
                onChange={handleChange}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Customer Type
              </label>
              <select
                id="type"
                name="type"
                value={customer.type}
                onChange={handleChange}
                className="mt-1 input"
                required
              >
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                className="mt-1 input"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                className="mt-1 input"
                required
              />
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className="card space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Business Information</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={customer.company}
                onChange={handleChange}
                className="mt-1 input"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={customer.website}
                onChange={handleChange}
                className="mt-1 input"
                placeholder="https://"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="card space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Address</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={customer.address}
                onChange={handleChange}
                className="mt-1 input"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={customer.city}
                onChange={handleChange}
                className="mt-1 input"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={customer.state}
                onChange={handleChange}
                className="mt-1 input"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={customer.zipCode}
                onChange={handleChange}
                className="mt-1 input"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="card space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Additional Information</h2>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={customer.status}
              onChange={handleChange}
              className="mt-1 input"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={customer.notes}
              onChange={handleChange}
              rows={4}
              className="mt-1 input"
              placeholder="Add any additional notes about the customer..."
            ></textarea>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/customers')}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Create Customer
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerCreate;