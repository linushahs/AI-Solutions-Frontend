import OurPortfolio from "../components/OurPortfolio";
import Questions from "../components/Questions";
import Testimonials from "../components/Testimonials";
import Breadcrumb from "../components/Breadcrumb";

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
      <Questions />
    </Fragment>
  );
};

export default Portfolio;
