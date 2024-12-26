import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import AdminPage from "./pages/admin";
import ContactUsPage from "./pages/ContactUs";
import Home from "./pages/Home";
import More from "./pages/More";
import Portfolio from "./pages/Portfolio";
import Solutions from "./pages/Solutions";
import DashboardPage from "./pages/admin/dashboard";
import Login from "./pages/admin/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "solutions",
        element: <Solutions />,
      },
      {
        path: "contactus",
        element: <ContactUsPage />,
      },
      {
        path: "more",
        element: <More />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
