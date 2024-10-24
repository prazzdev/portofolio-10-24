// import Image from "next/image"

export default function SkillBox({ title, thumbUrl, link }) {
  return (
    <>
      <a
        href={"https://" + link}
        target="_blank"
        className="w-[130px] lg:w-[210px] min-h-[150px] mr-5 mb-5 flex flex-col justify-between items-center py-2 rounded-lg lg:rounded-2xl  bg-white shadow-md hover:bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition overflow-hidden"
        data-tip={title}
      >
        <div className="min-h-[80%] min-w-[100%] flex justify-center items-center">
          <img src={`${thumbUrl}`} width={90} height={90} alt={`${title}`} />
        </div>
        <div className="min-h-[20%] min-w-[100%] flex justify-center items-center">
          <h1 className="">{title}</h1>
        </div>
      </a>
    </>
  );
}
