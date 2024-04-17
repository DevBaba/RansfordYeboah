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
    name: "Spex Africa Web App",
    description:
      "SPEX is a packaging solution that leverages web to connect restaurants / vendors to users seeking sustainable packaging. Full features of the web application was taken down due to NDA from the client.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1713348220/aera_askzzs.png",
    url: "https://live.spexafrica.com/",
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
    name: "Dercolbags Website",
    description:
      "A Packaging firm with a mission
"to empower Women Entrepreneurs to replace Single-Use plastic packages with Eco-friendly packages for a cleaner environment.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1713349386/rryree_fuoobv.png",
    url: "https://dercolbags.com/",
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
