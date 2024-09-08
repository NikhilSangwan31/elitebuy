// src/hooks/useNavigation.ts
import { useNavigate } from 'react-router-dom';

interface NavigationOptions {
  path: string;
  state?: any; // Optional state to pass with the navigation
  replace?: boolean; // Whether to replace the current entry in the history stack
}

const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = ({ path, state = {}, replace = false }: NavigationOptions) => {
    navigate(path, { state, replace });
  };

  return { goTo };
};

export default useNavigation;
