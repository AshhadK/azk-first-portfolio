import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Category from "../component/Category";
import PageRedirect from "../component/PageRedirect";


const Website = () => {
  document.title = "Portfolio - AZK | Website";
  return (
    <>
      <div className="my-main">
        <Navbar />
        <PageRedirect type="Website" />

        <div className="main-body">
          <Category type="Website" />
          <hr className="separator" />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Website;
