import React from "react";
import Header from "../components/header";
import Greys from "../components/sec-greys";
import Info from "../components/sec-info";
import Popular from "../components/sec-popular";
import Featured from "../components/sec-featured";
import Button from "../components/button-view";
import Searchfood from "../components/sec-searchfood";
import Install from "../components/sec-install";
import Mobile from "../components/div-mobile";
import Cards from "../components/sec-cards";
import Ready from "../components/ft-ready";
import Final from "../components/ft-final";
const Home = () => {
    return (
      <>
      <Header/>
      <Greys/>
      <Info/>
      <Popular/>
      <Featured/>
      <Button/>
      <Searchfood/>
      <Install/>
      <Mobile/>
      <Cards/>
      <Ready/>
      <Final/>
      </>
    )
};
  
  export default Home;
  