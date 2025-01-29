import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Category from "../component/Category";
import PageRedirect from "../component/PageRedirect";


const GraphicDesigning = () => {
  return (
    <>
      <div className="my-main">
        <Navbar />
        <PageRedirect type="Graphic Designing" />

        <div className="main-body">
          <Category type="Graphic Designing" />
          <hr className="separator" />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GraphicDesigning;
