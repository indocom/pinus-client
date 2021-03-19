import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const EnsureAuthLoaded: React.FC = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) {
    // TODO: Add splash screen
    return null;
  }

  return <>{children}</>;
};

export default EnsureAuthLoaded;
