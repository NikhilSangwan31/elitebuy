// src/routes/AppRouter.tsx
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import Error from '../components/ErrorPages/Error';
import ProductList from '../pages/Product/Products';
import Login from '../pages/Auth/Login';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import OrderDetailsCard from '../pages/Orders/OrderDetailsCard';
import ProtectedRoute from './protectedRoutes';
import SignUpForm from '../pages/Auth/SignupForm';


// Main Layout Component
const MainLayout = () => (
  <>
    <Header />
    <main>
      <Outlet /> {/* Renders child routes */}
    </main>
    <Footer />
  </>
);

// Define routes
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Apply layout to these routes
    errorElement: <Error />, // Error boundary for these routes
    children: [
      { path: '/',
        element: (
          <ProtectedRoute>
           <ProductList />
          </ProtectedRoute>
        ),
          },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: 'order-success',
        element: (
          <ProtectedRoute>
            <OrderDetailsCard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />, // Public route for login
  },
  {
    path: '/sign-up',
    element: <SignUpForm />, // Public route for login
  },
  {
    path: '*',
    element: <Error />, // Catch-all for undefined routes
  },
]);

// AppRouter Component
const AppRouter: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
