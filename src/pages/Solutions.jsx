import Breadcrumb from "../components/Breadcrumb";
import Questions from "../components/Questions";
import Solution from "../components/Solutions";
import React, { Fragment } from "react";
import Container from "../components/ui/container";

const Solutions = () => {
  const paths = [
    { label: "Home >", href: "/" },
    { label: "Solutions", href: "/solutions" },
  ];

  return (
    <Fragment>
      <Container>
        <Breadcrumb items={paths} />
      </Container>

      <Solution />
      <Questions />
    </Fragment>
  );
};

export default Solutions;
