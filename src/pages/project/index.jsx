import ListStruct from "../../components/ListStruct";
import ProjectBox from "../../components/ProjectBox";
import ProjectList from "../../components/ProjectList";
import HeadingTitle from "../../components/partials/HeadingTitle";
import DefaultLayout from "../../layouts/DefaultLayout";
import projectList from "../../data/project.json";
import TechStackIco from "../../components/partials/TechStackIco";

const groupedProjects = projectList.reduce((acc, project) => {
  if (!acc[project.category]) {
    acc[project.category] = [];
  }
  acc[project.category].push(project);
  return acc;
}, {});

const ProjectPage = () => {
  return (
    <>
      <DefaultLayout pageTitle="Project">
        <div className="flex flex-col px-6 py-6 pb-[4em] lg:px-[3em] lg:py-6">
          <HeadingTitle text="Projects" />
          {Object.keys(groupedProjects).map((category) => (
            <ListStruct key={category} title={category}>
              {groupedProjects[category].map((project) => (
                <ProjectBox
                  key={project.name}
                  title={project.name}
                  thumbUrl={project.thumbUrl}
                  desc={project.description}
                  repoUrl={project.repo}
                  projectUrl={project.link}
                >
                  {project.techstack.map((tech) => (
                    <TechStackIco key={tech} src={`${tech}`} />
                  ))}
                </ProjectBox>
              ))}
            </ListStruct>
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export default ProjectPage;
