// src/routes/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks'; // Hook for selecting Redux state
 

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token); // Access token from auth state
  const location = useLocation();

  if (!token) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // Render the children if authenticated
};

export default ProtectedRoute;
