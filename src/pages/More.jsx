import Breadcrumb from "../components/Breadcrumb";
import React, { Fragment } from "react";
import OurPortfolio from "../components/OurPortfolio";

const More = () => {
  const paths = [
    { label: "Home >", href: "" },
    { label: "Blogs", href: "/more" },
  ];

  return (
    <Fragment>
      <Breadcrumb items={paths} />
      <div>
        <OurPortfolio />
      </div>
    </Fragment>
  );
};

export default More;
