import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Creative Design  works",
    description:
      "These are some  designs i did for some brands and individuals.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1792482301/ranks_wd3iac_mjgf_q4yzgkjki_xkfzih.png",
    url: "https://www.behance.net/developerpalmadesign",
  },
  {
    name: "Quatenne Assistant",
    description:
       " specialized AI agent built for the Ghanaian real estate market. It helps first-time buyers, diaspora investors, agents, developers, and professionals navigate land acquisition with guided workflows, document intelligence, red-flag detection, and humanin-the-loop verification.  ",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1792484302/ranks_wd3iac_mjgf_q4yzgkf_si7txc.png",
    url: "https://quatenne.vercel.app/",
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
    name: "Akwasi Borga",
    description:
      "I created this piece to explore the experience of living between inherited tradition and modern influence. It reflects a generation shaped by ancestral culture while moving through a global, contemporary world. Rather than choosing one over the other, the work argues for balance.The colors are symbolic. Red represents passion, struggle, and history. Green speaks to growth, identity, and connection to the land. Gold reflects value, pride, and cultural richness, while black anchors the piece in strength and continuity. Together, they mirror both personal and collective African identity.The emotion this work is meant to trigger is recognition - the quiet feeling of being seen. It invites reflection, not conflict. A sense of pride, curiosity, and belonging, especially for those navigating who they are without losing where they come from.",
    image:
      "https://res.cloudinary.com/daysgbjom/image/upload/v1792485985/ranks_wd3iac_mjgf_q4yzgke_quloxf.png",
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
