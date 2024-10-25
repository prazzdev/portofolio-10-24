import SkillList from "../../components/SkillList";
import HeadingTitle from "../../components/partials/HeadingTitle";
import DefaultLayout from "../../layouts/DefaultLayout";
import skillList from "../../data/skill.json";
import ListStruct from "../../components/ListStruct";
import SkillBox from "../../components/SkillBox";

const groupedSkills = skillList.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

const SkillPage = () => {
  const imgUrl = "images/tech/";

  return (
    <>
      <DefaultLayout pageTitle="Skill">
        <div className="flex flex-col pb-[4em] lg:pb-0 lg:px-[3em] lg:py-6">
          <HeadingTitle text="Skill" />
          {Object.keys(groupedSkills).map((category) => (
            <ListStruct key={category} title={category}>
              {groupedSkills[category].map((skill) => (
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

export default SkillPage;
