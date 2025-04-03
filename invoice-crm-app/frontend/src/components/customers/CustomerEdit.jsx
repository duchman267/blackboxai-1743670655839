import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function CustomerEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Example initial state (in a real app, this would be fetched from an API)
  const [customer, setCustomer] = useState({
    name: 'Acme Corp',
    type: 'business',
    email: 'contact@acmecorp.com',
    phone: '(555) 123-4567',
    address: '123 Business Ave',
    city: 'Tech City',
    state: 'CA',
    zipCode: '12345',
    company: 'Acme Corporation',
    website: 'https://acmecorp.com',
    status: 'active',
    notes: 'Key enterprise customer'
  });

  // Example interaction history (in a real app, this would be fetched from an API)
  const [interactions, setInteractions] = useState([
    {
      id: '1',
      type: 'email',
      date: '2023-05-20',
      description: 'Sent follow-up regarding new service proposal'
    },
    {
      id: '2',
      type: 'meeting',
      date: '2023-05-15',
      description: 'Quarterly review meeting'
    }
  ]);

  useEffect(() => {
    // In a real app, fetch customer data here
    // Example: fetchCustomer(id).then(data => setCustomer(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // After successful update, navigate back to customers list
    navigate('/customers');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addInteraction = () => {
    const newInteraction = {
      id: Date.now().toString(),
      type: 'note',
      date: new Date().toISOString().split('T')[0],
      description: ''
    };
    setInteractions([newInteraction, ...interactions]);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Edit Customer</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <form onSubmit={handleSubmit}>
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
            <div className="flex justify-end space-x-4 mt-6">
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
                Update Customer
              </button>
            </div>
          </form>
        </div>

        {/* Interaction History Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Interaction History</h2>
              <button
                type="button"
                onClick={addInteraction}
                className="btn-secondary"
              >
                <i className="fas fa-plus mr-2"></i>
                Add Note
              </button>
            </div>
            <div className="space-y-4">
              {interactions.map((interaction) => (
                <div
                  key={interaction.id}
                  className="bg-gray-50 rounded-lg p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <i className={`fas fa-${
                        interaction.type === 'email' ? 'envelope' :
                        interaction.type === 'meeting' ? 'calendar' : 'sticky-note'
                      } text-gray-400`}></i>
                      <span className="text-sm font-medium text-gray-900">
                        {interaction.type.charAt(0).toUpperCase() + interaction.type.slice(1)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{interaction.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{interaction.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="btn-secondary w-full text-left">
                <i className="fas fa-envelope mr-2"></i>
                Send Email
              </button>
              <button className="btn-secondary w-full text-left">
                <i className="fas fa-calendar-plus mr-2"></i>
                Schedule Meeting
              </button>
              <button className="btn-secondary w-full text-left">
                <i className="fas fa-file-invoice mr-2"></i>
                Create Invoice
              </button>
              <button className="btn-secondary w-full text-left">
                <i className="fas fa-wrench mr-2"></i>
                Create Service Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerEdit;