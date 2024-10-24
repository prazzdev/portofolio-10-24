import MainLayout from "../../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout pageTitle="Agung Prasetyo | Junior Front End Web Developer">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-0 mx-auto w-[100%] max-h-[50vh]">
        <div className="sm:flex flex-col px-10 lg:p-0">
          <h1 className="font-bold text-[1.8em] lg:text-[2.5em] text-center lg:text-left">
            Agung Prasetyo
          </h1>
          <h3
            id="typewriter"
            className="text-teal-500 font-bold sm:text-[20px] lg:text-[25px] text-center lg:text-start drop-shadow-xl"
          >
            Junior Front End Web Developer
          </h3>
          <p className="text-[15px] lg:text-lg text-center lg:text-start">
            Hi,everyone. Welcome to my portfolio website.
          </p>
        </div>
        <div className="h-[280px] w-[280px] bg-teal-500 lg:bg-[#eee] lg:-mt-[3em] rounded-xl lg:rounded-none shadow-lg lg:shadow-none">
          <img src={"/images/me/me1.svg"} width={500} height={500} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
