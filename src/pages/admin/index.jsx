import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/input";
import AdminTable from "../../components/ui/table";

function AdminPage() {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/admin/login");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {/* Left-Sidebar  */}
      <aside className=" py-3 basis-[20%] flex flex-col justify-start gap-3 h-lvh w-full px-3">
        {/* Head  */}
        <div className="cursor-pointer pb-5 w-[160px]">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-full h-full" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {/* Search  */}
          <div className="flex px-2 border-b-[2px] border-gray-400 items-center bg-gray-50 rounded overflow-hidden justify-center w-full">
            <FiSearch className="size-5 text-gray-500" />

            <Input
              type=""
              className="border-none bg-transparent overflow-hidden w-full"
              placeholder="Search for .."
            />
          </div>

          {/* Lists  */}
          <ul className="space-y-1">
            <li className="flex items-center cursor-pointer gap-2.5 hover:bg-gray-100 p-2 rounded-md">
              <IoHome className="size-5 text-gray-600" />

              <h4 className="text-gray-600">Home</h4>
            </li>
            <li className="flex items-center cursor-pointer  gap-2.5 hover:bg-gray-100 p-2 rounded-md">
              <MdOutlineAnalytics className="size-5 text-gray-600" />

              <h4 className="text-gray-600">Analytics</h4>
            </li>
          </ul>
        </div>
      </aside>

      {/* Right-Sidebar  */}
      <div className="bg-gray-50 w-full basis-[100%] px-7 py-5 flex flex-col gap-8">
        {/* Title  */}
        <h1 className="font-bold text-2xl">Dashboard</h1>

        {/* Navigations and search  */}
        {/* table ================== */}
        <AdminTable />
      </div>
    </div>
  );
}

export default AdminPage;
