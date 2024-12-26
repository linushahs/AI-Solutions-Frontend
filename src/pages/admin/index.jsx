import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  // check whether user has logged in or not

  //if logged in
  // navigate("/admin/dashboard")

  // if not logged in
  // navigate("/admin/login")
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/login");
  }, []);

  return <div>AdminPage</div>;
}

export default AdminPage;
