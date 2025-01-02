import React from "react";
import { Outlet } from "react-router-dom";
import Chatbot from "./components/chatbot/chatbot";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />

      <Chatbot />
    </main>
  );
};

export default Layout;
