import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

export default function Projects() {
  const projects = [
    {
      projectName: "Social Hive",
      projectType: "Solo - Fullstack",
      projectDescription:
        "Social Hive is a personal project created to boost skills and copy a social media application with complete features such as Real Time Texting, Uploading Images, Modifying pictures and informations and complete with admin panel for the admin to do CRUD. This project was created using the help of Modern day industry standard framework such as React, and Laravel supported with Livewire, Sanctum and pusher and SMTP protocols to add email verification and hashing",
      projectLink: "https://github.com/nathangtg/social-hive",
      technologiesUsed: "React, Laravel, Livewire, Sanctum, Pusher, SMTP",
    },
    {
      projectName: "Airline Reviews Machine Learning",
      projectType: "Solo - Machine Learning",
      technologiesUsed: "Python, Jupyter Notebook, Scikit-learn, Pandas, Numpy",
      projectLink:
        "https://github.com/nathangtg/machine-learning/blob/main/AirlineReview.ipynb",
      projectDescription:
        "Airline Reviews Machine Learning is a project created to boost skills and copy a machine learning application with complete features such as Real Time Texting, Uploading Images, Modifying pictures and informations and complete with admin panel for the admin to do CRUD.",
    },
    {
      projectName: "Eco Cycle",
      projectType: "Solo - Front End",
      technologiesUsed: "React, PHP, Axios, Spline 3D",
      projectLink: "https://github.com/nathangtg/EcooCycle",
      projectDescription:
        "EcoCycle is a front-end practice which is created and built on top of the ReactJS library. And on top of that it also utilizes the basic usage of PHP and Axios to Login and Register and another thing is the usage of Spline 3D library to build the homepage of the application",
    },
    {
      projectName: "Farm Market",
      projectType: "Group - Front End",
      technologiesUsed: "HTML, CSS, Spline 3D, Google Fonts, Javascript",
      projectLink: "https://github.com/nathangtg/Farm_Market",
      projectDescription:
        "Farm Market is an introduction towards web technology. This is an assignment for my Web Design course at Sunway College, which was created in my second semester. This project utilised Spline 3D, HTML, CSS, and JS without any backend functionalities as there is no requirement stating the need for such",
    },
    {
      projectName: "Volume By Gesture",
      projectType: "Solo - IOT",
      technologiesUsed: "Python, Pandas, NumPy, Tensorflow, OpenCV, Mediapipe",
      projectLink: "https://github.com/nathangtg/VolumeGestureDetector",
      projectDescription:
        "This is a very mini scaled project, the aim for this project was to discover python’s ability to create IOT tools using the CAW library, Numpy, CV2, and Mediapipe. With this project the user is expected to be able to control the volume of their device with just their fingers and camera detection.",
    },
  ];

  return (
    <div>
      <div className="mt-9 inline-flex items-center rounded-full border px-2.5 py-0.5 my-4 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-primary-foreground hover:bg-primary/80 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
        </svg>
        <span className="text-white">Projects</span>
      </div>
      <div className="flex flex-col mt-2">
        {projects.map((project, index) => (
          <ProjectCardWithAnimation key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

const ProjectCardWithAnimation = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // PropTypes validation outside the component definition
  ProjectCardWithAnimation.propTypes = {
    project: PropTypes.shape({
      projectName: PropTypes.string.isRequired,
      projectType: PropTypes.string.isRequired,
      projectDescription: PropTypes.string.isRequired,
      projectLink: PropTypes.string.isRequired,
      technologiesUsed: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <ProjectCard {...project} />
    </motion.div>
  );
};
