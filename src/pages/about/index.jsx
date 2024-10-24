import HeadingTitle from "../../components/partials/HeadingTitle";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function About() {
  return (
    <>
      <DefaultLayout pageTitle="About Me">
        <section className="flex justify-between mb-6 px-6 py-6">
          <div className="w-full min-h-fit flex flex-col justify-start lg:max-w-[80%]">
            <HeadingTitle text="About Me" />
            <h3 className="max-w-fit text-teal-500 font-bold text-[1.2em] lg:text-2xl drop-shadow-xl">
              Agung Prasetyo
            </h3>
            <div id="description" className="text-justify">
              <p className="my-3 lg:max-w-[60svw]">
                A dedicated student at STIMIK Tunas Bangsa Banjarnegara, with a
                strong passion for technology, particularly in web development.
              </p>
              <p className="my-3 -mb-3 lg:max-w-[60svw]">
                My primary programming language is JavaScript. I have a solid
                foundation in web development and have worked with frameworks
                like Next.js for JavaScript and Laravel for PHP. I'm
                continuously committed to staying updated with the latest
                advancements in web development and emerging technologies. Let's
                connect and explore opportunities in the ever-evolving tech
                industry!
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end w-[40svw] h-fit pr-[5em] pt-[2em]">
            <img
              src="/images/me.jpg"
              alt="Foto Agung"
              width={190}
              height={190}
              className="bg-teal-400 rounded-xl shadow-xl"
            />
          </div>
        </section>
        <section className="mb-6 px-6">
          <HeadingTitle text="Education" />
          <div className="container max-w-5xl py-2 mx-auto -ml-[2em] lg:-ml-[.5em]">
            <div className="grid gap-4 mx-4 sm:grid-cols-12 text-left">
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-500">
                    <h3 className="text-xl font-semibold tracki">
                      Senior High School
                    </h3>
                    <h5 className="font-semibold text-xl mt-1.5">
                      SMA Muhammadiyah 1 Banjarnegara
                    </h5>
                    <time className="text-xs tracki uppercase text-gray-400 mt-1">
                      2018 - 2021
                    </time>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-500">
                    <h3 className="text-xl font-semibold tracki">University</h3>
                    <h5 className="font-semibold text-xl mt-1.5">
                      STIMIK Tunas Bangsa Banjarnegara
                    </h5>
                    <time className="text-xs tracki uppercase text-gray-400 mt-1">
                      2021 - PRESENT
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16 lg:mb2 px-6">
          <HeadingTitle text="Resume" />
          <p className="mt-1 max-w-fit">
            You can read my resume{" "}
            <a
              href="https://docs.google.com/document/d/1bj4J8hAD8EuiC08f2UqjiNmZ1wg4omC3btVH_gkGQGc/edit?usp=sharing"
              target="_blank"
              className="text-teal-500 underline"
            >
              here
            </a>
            .
          </p>
        </section>
      </DefaultLayout>
    </>
  );
}
