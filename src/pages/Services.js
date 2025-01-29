import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PageRedirect from "../component/PageRedirect";
import TechStack from "../component/TechStack";


const services = [
    {
        title: "Website Development",
        description: "Captivating websites, driving business success, are our specialty.",
        icon: require('../assets/icons/web-dev.png'),
    },
    {
        title: "Graphic Designing",
        description: "Graphic design expertise, elevating brands with creative strategy.",
        icon: require('../assets/icons/graphic-des.png'),
    },
    {
        title: "UI/UX Designing",
        description: "Intuitive interfaces for enhanced user experiences.",
        icon: require('../assets/icons/ui-ux.png'),
    },
    {
        title: "SEO & Content Writing",
        description: "Boosting visibility and connecting with audiences.",
        icon: require('../assets/icons/seo.png'),
    },
    {
        title: "App Development",
        description: "Create user-friendly experiences that engage and satisfy.",
        icon: require('../assets/icons/app-dev.png'),
    },
    {
        title: "Creative Asset Design",
        description: "Design high-quality assets tailored for web and app development.",
        icon: require('../assets/icons/creatives.png'),
    },
];

const Services = () => {
    document.title = "Portfolio - AZK | Services";

    return (
        <div className="my-main">
            <Navbar />
            <PageRedirect type="Services" />
            <div className="main-body">
                <div className="services-container">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.icon} alt={service.title} className="service-icon" />
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <TechStack />
            <Footer />
        </div>
    );
};

export default Services;
