import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  if (loading) return <h2>Loading...</h2>;

  // not logged in
  if (!user) {
    return <Navigate to="/" />;
  }

  // role check
  if (role && user.role !== role) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default ProtectedRoute;