import OurPortfolio from "../components/our-portfolio";
import FAQs from "../components/faqs";
import Testimonials from "../components/testimonials";
import Breadcrumb from "../components/breadcrumb";

import React, { Fragment } from "react";
import Container from "../components/ui/container";

const Portfolio = () => {
  const paths = [
    { label: "Home >", href: "" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  return (
    <Fragment>
      <Container>
        <Breadcrumb items={paths} />
      </Container>
      <OurPortfolio />
      <Testimonials />
      <FAQs />
    </Fragment>
  );
};

export default Portfolio;
