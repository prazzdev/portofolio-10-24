// import Image from "next/image";

export default function TechStackIco(props) {
  const { src, techName } = props;
  const techIcoUrl = "/images/tech/";
  return (
    <>
      <img
        src={techIcoUrl + src}
        width={25}
        height={25}
        className="mr-3 tooltip tooltip-left tooltip-accent"
        data-tip={techName}
      />
    </>
  );
}
