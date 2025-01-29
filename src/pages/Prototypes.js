import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Category from "../component/Category";
import PageRedirect from "../component/PageRedirect";


const Prototypes = () => {
  document.title = "Portfolio - AZK | Prototypes";
  return (
    <>
      <div className="my-main">
        <Navbar />
        <PageRedirect type="Prototype" />
        <div className="main-body">
          <Category type="Prototype" />
          <hr className="separator" />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Prototypes;
