import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Category from "../component/Category";
import PageRedirect from "../component/PageRedirect";


const Application = () => {
  document.title = "Portfolio - AZK | Applications";
  return (
    <>
      <div className="my-main">
        <Navbar />
        <PageRedirect type="Application" />
        <div className="main-body">
          <Category type="Application" />
          <hr className="separator" />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Application;
