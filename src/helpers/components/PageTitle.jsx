import { Helmet } from "react-helmet";

const PageTitle = ({ text }) => {
  return (
    <Helmet>
      <title>{text}</title>
    </Helmet>
  );
};

export default PageTitle;
