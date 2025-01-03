import Breadcrumb from "../components/breadcrumb";
import ContactUs from "../components/contact-us";
import React from "react";
import Container from "../components/ui/container";

const ContactUsPage = () => {
  const paths = [
    { label: "Home >", href: "" },
    { label: "ContactUs", href: "/contactus" },
  ];

  return (
    <Container>
      <Breadcrumb items={paths} />
      <ContactUs />
    </Container>
  );
};

export default ContactUsPage;
