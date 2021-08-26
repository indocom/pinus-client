import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "react-redux-firebase";

const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth = useSelector((state: any) => state.firebase.auth);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isEmpty(auth)) {
      const loginPath = `/login?src=${encodeURIComponent(router.pathname)}`;
      router.push(loginPath, "/login");
    } else {
      setShouldLoad(true);
    }
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
