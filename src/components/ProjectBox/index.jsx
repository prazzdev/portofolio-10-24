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
      <div className="sm:w-[100%] lg:w-[360px] min-h-fit lg:mr-5 mb-5 flex flex-col px-6 py-6 rounded-2xl overflow-hidden bg-white shadow-md hover:bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition">
        <div id="head" className="flex flex-col justify-between mb-4">
          <img
            src={imgUri + thumbUrl + ".webp"}
            width={410}
            height={300}
            loading="lazy"
            className="min-h-[180px] max-h-[180px]"
          />
          <div className="flex flex-row justify-between items-center mt-4">
            <h3 className="font-bold text-xl">{title}</h3>
            <div id="opt" className="">
              <button className="mx-2">
                <a href={repoUri + repoUrl} className="" target="_blank">
                  <img src={"/images/icons/fork.svg"} width={20} height={20} />
                </a>
              </button>
              <button className="mx-2">
                <a href={"https://" + projectUrl} className="" target="_blank">
                  <img
                    src={"/images/icons/direct.svg"}
                    width={20}
                    height={20}
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
