import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';

export const useAuth = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const requireAuth = () => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  };

  return { user, isAuthenticated, requireAuth };
};