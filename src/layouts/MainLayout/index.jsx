import Footer from "../../components/Footer";
import Header from "../..//components/Header";
import NavMenu from "../..//components/NavMenu/index2";

const MainLayout = (props) => {
  let { pageTitle, children } = props;
  if (pageTitle == "Agung Prasetyo | Junior Front End Web Developer") {
    pageTitle = "Agung Prasetyo | Junior Front End Web Developer";
  } else {
    pageTitle =
      pageTitle + " - Agung Prasetyo | Junior Front End Web Developer";
  }
  return (
    <>
      {/* <Head>
        <title>{pageTitle}</title>
      </Head> */}
      <Header />
      <div
        id="container"
        className="relative flex flex-column max-h-[100vh] min-w-[100%] lg:min-w-[60vw] lg:max-w-[60vw] 2xl:min-w-[50vw] mx-auto"
        // data-aos="fade-right"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="600"
      >
        {children}
      </div>
      <NavMenu />
      <Footer />
    </>
  );
};

export default MainLayout;
