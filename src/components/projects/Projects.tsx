import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Graphic Design  works",
    description:
      "These are some  designs i did for an eco-friendly packaging firm.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1706823834/ranks_wd3iac_mjgf_q4yzgk.png",
    url: "https://www.behance.net/developerpalmadesign",
  },
  {
    name: "Dercolbags",
    description:
      "Dercolbags is a web application that allows you to order paper packaging bags conveniently in Accra. Full features of the web application was taken down due to NDA from the client.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1706853053/cscanner_zkoz2k_hjhuc5.png",
    url: "https://dercol-bag-packing-git-main-devbabas-projects.vercel.app",
  },
  {
    name: "Mmofra Twi lessons & Games",
    description:
      "Mmofra Twi lessons & Games is a mobile application built with Flutter, Firebase and Sass. It is an application teaches the history of Ghana, the ethnic groups in Ghana and also teaches both adult and kids who struggle to learn their native tongues.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1706854512/frecipe_hk4dcv_xos96s.png",
    url: "",
  },
  {
    name: "Foodix delivery app",
    description:
      "This is a food delivery  application built with Flutter. You can search for any food in accra and order from the vendor. The application is in the pilot stage. will add more details soon.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1706856086/reee_r66fto.png",
    url: "",
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
