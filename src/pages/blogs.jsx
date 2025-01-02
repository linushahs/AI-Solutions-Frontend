import React, { Fragment } from "react";
import Blog from "../components/Blog";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/ui/container";

const BlogsPage = () => {
  const paths = [
    { label: "Home >", href: "/" },
    { label: "Blogs", href: "" },
  ];

  return (
    <Fragment>
      <Container>
        <Breadcrumb items={paths} />
      </Container>

      <Blog />
    </Fragment>
  );
};

export default BlogsPage;
