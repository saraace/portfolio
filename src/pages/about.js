import { initializeApollo } from "../apollo";
import { getPage } from "../apollo/queries/page";
import About from "../components/About/About";

const AboutPage = ({ page, resume }) => {
  return <About {...page} {...{ resume }} />;
};

export default AboutPage;

export async function getStaticProps() {
  const client = initializeApollo();
  const { data } = await client.query({
    query: getPage("about"),
  });

  return {
    props: {
      page: data.page,
      resume: data.generalSettings.resume,
    },
  };
}
