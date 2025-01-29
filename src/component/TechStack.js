import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const tech = [
  {
    title: "Python",
    icon: "https://img.icons8.com/color/128/000000/python.png",
  },
  {
    title: "HTML",
    icon: "https://img.icons8.com/color/128/000000/html-5.png",
  },
  {
    title: "CSS",
    icon: "https://img.icons8.com/color/128/000000/css3.png",
  },
  {
    title: "Bootstrap",
    icon: "https://img.icons8.com/color/128/000000/bootstrap.png",
  },
  {
    title: "Tailwind CSS",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
  },
  {
    title: "JavaScript",
    icon: "https://img.icons8.com/color/128/000000/javascript.png",
  },
  {
    title: "React.js",
    icon: "https://img.icons8.com/color/128/000000/react-native.png",
  },
  {
    title: "Next.js",
    icon: "https://img.icons8.com/color/128/000000/nextjs.png",
  },
  {
    title: "Node.js",
    icon: "https://img.icons8.com/color/128/000000/nodejs.png",
  },
  {
    title: "PHP",
    icon: "https://img.icons8.com/color/128/000000/php.png",
  },
  {
    title: "Laravel",
    icon: "https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png",
  },
  {
    title: "React Native",
    icon: "https://img.icons8.com/color/128/000000/react-native.png",
  },
  {
    title: "Flutter",
    icon: "https://img.icons8.com/color/128/000000/flutter.png",
  },
  {
    title: "Firebase",
    icon: "https://img.icons8.com/color/128/000000/firebase.png",
  },

  {
    title: "WordPress",
    icon: "https://img.icons8.com/color/128/000000/wordpress.png",
  },
  {
    title: "Squarespace",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hYX4VS-2wuoISRfs8P4Mep8KXtF5LG9kRQ&s",
  },
  {
    title: "Shopify",
    icon: "https://img.icons8.com/color/128/000000/shopify.png",
  },
  {
    title: "MySQL",
    icon: "https://img.icons8.com/color/128/000000/mysql.png",
  },
  {
    title: "API Integration",
    icon: "https://img.icons8.com/color/128/000000/api.png",
  },
];

const TechStack = () => {
  return (
    <div className="tech-main-container">
      <h3> Tech Stack <span>.</span> </h3>
      <div className="tech-container">
        {tech.map((item, index) => (
          <div
            key={index}
            className="tech-card"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="tech-icon"
            />
            <h5 className="tech-title">
              {item.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
