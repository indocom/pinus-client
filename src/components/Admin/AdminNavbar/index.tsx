import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FirebaseReducer, useFirebase } from "react-redux-firebase";
import { withAuth } from "src/redux/util";

interface Props {
  auth: FirebaseReducer.AuthState;
}

const AdminNavbar: React.FC<Props> = ({ auth }) => {
  const router = useRouter();
  const firebase = useFirebase();

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    firebase.logout();
    router.push("/");
  };

  const name = auth.displayName
    ? `${auth.displayName} (${auth.email})`
    : auth.email;

  return (
    <div className={`bg-grey-primary py-4 border-b-2 border-gray-300`}>
      <nav className={`px-4 flex justify-between`}>
        <div className={`flex items-center space-x-5`}>
          <Link href="/admin">
            <a className={`flex space-x-3`}>
              <Image
                src="/assets/icons/pinus.png"
                alt="PINUS navbar logo"
                height={32}
                width={32}
              />
              <p className={`text-xl font-semibold`}>
                PINUS <span className={`text-base font-normal`}>Admin</span>
              </p>
            </a>
          </Link>
          <div className={`h-full w-0 border-l-2 border-gray-600`}></div>
          <p>Logged in as {name}</p>
        </div>
        <div>
          <button
            className={`px-3 py-1 transition-colors bg-transparent hover:bg-red-600 text-red-600 hover:text-white border-2 border-red-600 focus:outline-none`}
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default withAuth(AdminNavbar);
