export default function Footer() {
  const getTheDate = new Date();
  const getYear = getTheDate.getFullYear();
  return (
    <>
      <footer className="fixed hidden lg:flex justify-center align-center min-w-[100vw] bottom-0 right-0 left-0 text-xs lg:text-[16px] text-center bg-white py-3">
        copyboth © {getYear} - Made with{" "}
        <span className="text-red-500">&nbsp;❤&nbsp;</span> by prazzdev
      </footer>
    </>
  );
}
