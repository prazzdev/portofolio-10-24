import HeadingTitle from "../../components/partials/HeadingTitle";
import DefaultLayout from "../../layouts/DefaultLayout";
import skillList from "../../data/skill.json";
import ListStruct from "../../components/ListStruct";
import SkillBox from "../../components/SkillBox";

const groupedTools = skillList.reduce((acc, tool) => {
  if (!acc[tool.category]) {
    acc[tool.category] = [];
  }
  acc[tool.category].push(tool);
  return acc;
}, {});

const ToolPage = () => {
  const imgUrl = "images/tech/";

  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col pb-[4em] lg:pb-0 lg:px-[3em] lg:py-6">
          <HeadingTitle text="Tools" />
          {Object.keys(groupedTools).map((category) => (
            <ListStruct key={category} title={category}>
              {groupedTools[category].map((skill) => (
                <SkillBox
                  key={skill.title}
                  title={skill.title}
                  thumbUrl={imgUrl + skill.thumbUrl}
                  link={skill.link}
                />
              ))}
            </ListStruct>
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export default ToolPage;
