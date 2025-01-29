import React from "react";
import Navbar from "../component/Navbar";
import Cards from "../component/Cards";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";

import { Helmet } from 'react-helmet';

const Home = () => {
  document.title = "Portfolio - AZK | Home"
  return (
    <>
      <Helmet>
        <meta name="description" content="Portfolio of Ashhad Zafar Khan, Software Engineer." />
        <meta name="keywords" content="Ashhad, Ashhad Zafar, Ashhad Zafar Khan, Software Engineer, Portfolio" />
      </Helmet>

      <div className="my-main">
        <Navbar />
        <div className="spacing">


          <div className="main-body my-5">
            <Cards />
            <hr className="separator" />
            <Sidebar />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
