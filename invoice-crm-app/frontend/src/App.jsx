import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import InvoiceList from './components/invoices/InvoiceList';
import InvoiceCreate from './components/invoices/InvoiceCreate';
import InvoiceEdit from './components/invoices/InvoiceEdit';
import ServiceOrderList from './components/service-orders/ServiceOrderList';
import ServiceOrderCreate from './components/service-orders/ServiceOrderCreate';
import ServiceOrderEdit from './components/service-orders/ServiceOrderEdit';
import CustomerList from './components/customers/CustomerList';
import CustomerCreate from './components/customers/CustomerCreate';
import CustomerEdit from './components/customers/CustomerEdit';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        
        {/* Invoice Routes */}
        <Route path="invoices">
          <Route index element={<InvoiceList />} />
          <Route path="create" element={<InvoiceCreate />} />
          <Route path=":id/edit" element={<InvoiceEdit />} />
        </Route>

        {/* Service Order Routes */}
        <Route path="service-orders">
          <Route index element={<ServiceOrderList />} />
          <Route path="create" element={<ServiceOrderCreate />} />
          <Route path=":id/edit" element={<ServiceOrderEdit />} />
        </Route>

        {/* Customer Routes */}
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path="create" element={<CustomerCreate />} />
          <Route path=":id/edit" element={<CustomerEdit />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;