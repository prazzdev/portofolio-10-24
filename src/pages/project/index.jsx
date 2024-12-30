import ListStruct from "../../components/ListStruct";
import ProjectBox from "../../components/ProjectBox";
import HeadingTitle from "../../components/partials/HeadingTitle";
import DefaultLayout from "../../layouts/DefaultLayout";
import TechStackIco from "../../components/partials/TechStackIco";
import { useEffect, useState } from "react";
import { retrievesData } from "../../services/contentful";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await retrievesData("prazzdevProject");
        if (!data) return;
        const assetLookup = {};
        if (data.includes && data.includes.Asset) {
          data.includes.Asset.forEach((asset) => {
            assetLookup[asset.sys.id] = asset.fields.file.url;
          });
        }

        const projects = data.items.map((project) => {
          const thumbnailId = project.fields?.thumbnail?.sys?.id;
          return {
            id: project.sys.id,
            ...project.fields,
            thumbnail: thumbnailId
              ? assetLookup[thumbnailId]?.replace("//", "https://")
              : null,
          };
        });
        setProjects(projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  });

  const groupedProjects = projects?.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <DefaultLayout pageTitle="Project">
        <div className="flex flex-col pb-[4em] lg:px-[3em] lg:py-6">
          <HeadingTitle text="Projects" />
          {Object.keys(groupedProjects)
            .sort((a, b) => {
              if (a === "website") return -1;
              if (b === "website") return 1;
              return a.localeCompare(b);
            })
            .map((category) => (
              <ListStruct key={category} title={category}>
                {groupedProjects[category].map((project) => (
                  <ProjectBox
                    key={project.name}
                    title={project.name}
                    thumbUrl={project.thumbnail}
                    desc={project.description}
                    repoUrl={project.repository}
                    projectUrl={project.deployUrl}
                  >
                    {!project.techstack?.includes("none") &&
                      (project.techstack || []).map((tech) => (
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
