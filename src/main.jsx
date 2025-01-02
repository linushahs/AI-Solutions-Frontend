import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import AdminPage from "./pages/admin";
import Login from "./pages/admin/login";
import ContactUsPage from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Solutions from "./pages/Solutions";
import BlogsPage from "./pages/blogs";
import BlogDescription from "./pages/blogs/blog-description";
import Homepage from "./pages/Home";

import "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Homepage />,
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
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:slug",
        element: <BlogDescription />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
