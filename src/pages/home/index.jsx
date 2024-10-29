import MainLayout from "../../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout pageTitle="Agung Prasetyo | Junior Front End Web Developer">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-0 mx-auto w-[100%] max-h-[100vh]">
        <div className="flex flex-col px-10 lg:p-0">
          <h1 className="font-bold text-[1.7em] lg:text-[2.5em] 2xl:text-[3em] text-center lg:text-left mb-2 lg:mb-0 2xl:mb-2">
            Agung Prasetyo
          </h1>
          <h3
            id="typewriter"
            className="text-teal-500 font-bold text-[1.2em] lg:text-[25px] 2xl:text-[2em] text-center lg:text-start drop-shadow-xl 2xl:mb-3"
          >
            Junior Front End Web Developer
          </h3>
          <p className="text-[15px] lg:text-lg 2xl:text-xl text-center lg:text-start">
            Hi,everyone. Welcome to my portfolio website.
            <button
              onClick={() => {
                throw new Error("This is your first error!");
              }}
            >
              Break the world
            </button>
            ;
          </p>
        </div>
        <div className="h-[280px] w-[280px] bg-teal-500 lg:bg-[#eee] lg:-mt-[5em] 2xl:-mt-[9em] rounded-xl lg:rounded-none shadow-lg lg:shadow-none">
          <img
            src={"/images/me/me1.svg"}
            className="min-w-[10em] 2xl:min-w-[22em]"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
