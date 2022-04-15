import React from "react";
import {
  Hero,
  Services,
  GetStarted,
  Testimonials,
  FeaturedCars,
  Brands,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <Testimonials></Testimonials>
      <FeaturedCars></FeaturedCars>
      <GetStarted></GetStarted>
    </>
  );
};

export default Home;
