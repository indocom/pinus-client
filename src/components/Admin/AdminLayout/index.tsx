import AdminNavbar from "../AdminNavbar";

const AdminLayout: React.FC = ({ children }) => {
  return (
    <div className={`min-h-screen flex flex-col bg-gray-50`}>
      <AdminNavbar />
      <div className={`min-h-full p-4 `}>{children}</div>
    </div>
  );
};

export default AdminLayout;
