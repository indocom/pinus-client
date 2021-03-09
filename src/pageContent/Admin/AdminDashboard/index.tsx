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
        className={`rounded-sm py-4 text-xl border-2 border-blue-500 text-blue-500 transition-colors hover:text-white hover:bg-blue-500`}
        onClick={() => router.push(path)}
      >
        {name}
      </button>
    );
  };

  return (
    <AdminLayout>
      <div className={`h-full flex flex-col items-center justify-center`}>
        <div className={`w-full grid grid-cols-5 md:grid-cols-1 gap-6`}>
          <div className={`md:hidden`}></div>
          {menus.map(renderMenu)}
          <div className={`md:hidden`}></div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
