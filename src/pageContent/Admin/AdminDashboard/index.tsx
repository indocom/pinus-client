import { useRouter } from "next/router";

import AdminLayout from "src/components/Admin/AdminLayout";

const AdminDashboard: React.FC = () => {
  const router = useRouter();

  const menus = [
    { name: "Profile", path: "/admin/profile" },
    { name: "Users", path: "/admin/users" },
    { name: "Articles", path: "/admin/articles" },
  ];

  const renderMenu = ({ name, path }) => {
    return (
      <button
        key={`${name}-menu`}
        className={`p-28 w-80 rounded-sm py-4 text-xl border-2 border-blue-500 text-blue-500 transition-colors hover:text-white hover:bg-blue-500`}
        onClick={() => router.push(path)}
      >
        {name}
      </button>
    );
  };

  return (
    <AdminLayout>
      <div
        className={`min-h-screen align-center flex flex-col items-center self-center flex flex-col md-min:flex-row w-full justify-around`}
      >
        {menus.map(renderMenu)}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
