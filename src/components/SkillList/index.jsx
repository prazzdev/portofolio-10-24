import SkillBox from "../SkillBox";
import ListStruct from "../ListStruct";

export default function SkillList() {
  const imgUrl = "images/tech/";
  return (
    <>
      <ListStruct title="Language">
        <SkillBox
          title="HTML"
          thumbUrl={imgUrl + "html.svg"}
          link="developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <SkillBox
          title="CSS"
          thumbUrl={imgUrl + "css.svg"}
          link="developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillBox
          title="Javascript"
          thumbUrl={imgUrl + "js.svg"}
          link="developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillBox
          title="PHP"
          thumbUrl={imgUrl + "php.svg"}
          link="www.php.net/"
        />
      </ListStruct>
      <ListStruct title="Framework/Library">
        <SkillBox
          title="ReactJS"
          thumbUrl={imgUrl + "react.svg"}
          link="react.dev/"
        />
        <SkillBox
          title="NextJS"
          thumbUrl={imgUrl + "next.svg"}
          link="nextjs.org/"
        />
        <SkillBox
          title="NodeJS"
          thumbUrl={"/" + imgUrl + "node.webp"}
          link="nodejs.org/en"
        />
        <SkillBox
          title="ExpressJS"
          thumbUrl={"/" + imgUrl + "express.webp"}
          link="expressjs.com/"
        />
        <SkillBox
          title="AOS"
          thumbUrl={"/" + imgUrl + "aos.webp"}
          link="michalsnik.github.io/aos/"
        />
        <SkillBox
          title="grammY"
          thumbUrl={"/" + imgUrl + "grammy.webp"}
          link="grammy.dev/"
        />
      </ListStruct>
      <ListStruct title="UI Framework/Component">
        <SkillBox
          title="Tailwind CSS"
          thumbUrl={imgUrl + "tailwind.svg"}
          link=""
        />
        <SkillBox title="Daisy UI" thumbUrl={imgUrl + "daisyui.svg"} link="" />
        <SkillBox title="Mamba UI" thumbUrl={imgUrl + "mambaui.svg"} link="" />
        <SkillBox
          title="Flowbite"
          thumbUrl={"/" + imgUrl + "flowbite.webp"}
          link=""
        />
        <SkillBox
          title="Hyper UI"
          thumbUrl={"/" + imgUrl + "hyperui.webp"}
          link=""
        />
        <SkillBox
          title="Meraki UI"
          thumbUrl={"/" + imgUrl + "merakiui.svg"}
          link=""
        />
      </ListStruct>
      <ListStruct title="DBMS">
        <SkillBox
          title="MySQL"
          thumbUrl={imgUrl + "mysql.svg"}
          link="www.mysql.com/"
        />
        <SkillBox
          title="Firestore"
          thumbUrl={imgUrl + "firestore.svg"}
          link="firebase.google.com/docs/firestore"
        />
      </ListStruct>
      <ListStruct title="Operating System">
        <SkillBox
          title="Windows"
          thumbUrl={imgUrl + "windows.svg"}
          link="www.microsoft.com/en-us/windows?r=1"
        />
        {/* <SkillBox
          title="GNU/Linux"
          thumbUrl={imgUrl + "linux.svg"}
          link="www.linux.org/"
        />
        <SkillBox
          title="Ubuntu"
          thumbUrl={imgUrl + "ubuntu.svg"}
          link="ubuntu.com/"
        /> */}
      </ListStruct>
      <ListStruct title="Misc">
        <SkillBox
          title="GIT"
          thumbUrl={imgUrl + "git.svg"}
          link="git-scm.com/"
        />
      </ListStruct>
    </>
  );
}
