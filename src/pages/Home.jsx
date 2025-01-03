import Banner from "../components/banner";
import Blog from "../components/blog";
import Caption from "../components/caption";
import HomeComponent from "../components/home";
import FAQs from "../components/faqs";
import Team from "../components/team";
import Testimonials from "../components/testimonials";
import Tools from "../components/tools";

import React, { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
      <HomeComponent />
      <Tools />
      <Banner />
      <Caption />
      <Testimonials />
      <Blog showAllBlogs={true} />
      <Team />
      <FAQs />
    </Fragment>
  );
};

export default Homepage;
