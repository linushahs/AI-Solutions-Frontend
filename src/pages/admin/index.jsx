import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}

export default AdminPage;
