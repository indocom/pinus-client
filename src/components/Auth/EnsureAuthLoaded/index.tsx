import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const EnsureAuthLoaded: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth = useSelector((state: any) => state.firebase.auth);

  if (!isLoaded(auth)) {
    // TODO: Add splash screen
    return null;
  }

  return <>{children}</>;
};

export default EnsureAuthLoaded;
