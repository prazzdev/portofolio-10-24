// import Image from "next/image"

export default function ProjectBox(props) {
  const {
    title,
    thumbUrl = "btw",
    desc,
    repoUrl,
    projectUrl,
    children,
  } = props;
  const repoUri = "https://github.com/prazzdev/";
  const imgUri = "/images/projects/";
  return (
    <>
      <div className="sm:max-w-[100%] lg:min-w-[28vw] lg:max-w-[28vw] 2xl:min-w-[18vw] 2xl:max-w-[18vw] min-h-fit lg:mr-5 mb-5 flex flex-col px-6 py-6 rounded-2xl overflow-hidden bg-white shadow-md hover:bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition">
        <div id="head" className="flex flex-col justify-between mb-4">
          <img
            src={imgUri + thumbUrl + ".webp"}
            width={410}
            height={300}
            loading="lazy"
            className="min-h-[180px] max-h-[180px] lg:min-h-[180px] lg:max-h-[180px]"
          />
          <div className="flex flex-row justify-between items-center mt-4">
            <h3 className="font-bold text-xl lg:text-[1em]">{title}</h3>
            <div id="opt" className="">
              <button className="mx-2">
                <a href={repoUri + repoUrl} className="" target="_blank">
                  <img
                    src={"/images/icons/fork.svg"}
                    className="w-[20px] lg:w-[1.1rem]"
                  />
                </a>
              </button>
              <button className="mx-2">
                <a href={"https://" + projectUrl} className="" target="_blank">
                  <img
                    src={"/images/icons/direct.svg"}
                    className="w-[20px] lg:w-[1.1rem]"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div id="desc" className="mb-5">
          <span className="">{desc}</span>
        </div>
        <div id="tech" className="flex flex-row items-center">
          {children}
        </div>
      </div>
    </>
  );
}
