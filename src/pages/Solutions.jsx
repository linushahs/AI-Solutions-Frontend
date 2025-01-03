import Breadcrumb from "../components/breadcrumb";
import Questions from "../components/faqs";
import Solution from "../components/solutions";
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
      <Questions className={"bg-gray-100"}/>
    </Fragment>
  );
};

export default Solutions;
