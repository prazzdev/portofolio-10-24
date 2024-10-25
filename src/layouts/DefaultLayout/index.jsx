import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu/index3";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        id="container"
        className="flex flex-col min-h-screen lg:min-w-[60vw] lg:max-w-[70vw] mx-auto lg:py-[3em] bg-gray-"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
      >
        {children}
      </div>
      <NavMenu />
      <Footer />
    </>
  );
};

export default DefaultLayout;
