import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Caption from "../components/Caption";
import HomeComponent from "../components/Home";
import Questions from "../components/Questions";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Tools from "../components/Tools";

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
      <Questions />
    </Fragment>
  );
};

export default Homepage;
