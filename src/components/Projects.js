import ProjectCard from "./ProjectCard";
import data from "./projectData/ProjectData";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Portfolio">
      <div className="Cards">
        <ProjectCard data={data[1]} />
        <ProjectCard data={data[2]} />
        <ProjectCard data={data[0]} />
      </div>
      <div>
        <h1 className="PortfolioHeader">Projects</h1>
        <div className="resLine"></div>
      </div>
    </div>
  );
};

export default Projects;
