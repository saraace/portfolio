import { initializeApollo } from "../../apollo";
import { getPost } from "../../apollo/queries/post";
import { getAllPostSlugs } from "../../apollo/queries/posts";
import Project from "../../components/Project/Project";

const ProjectPage = ({ post }) => {
  console.log(post);
  return (
    <div>
      <Project {...post} />
    </div>
  );
};

export default ProjectPage;

export async function getStaticProps({ params, preview = false, previewData }) {
  const client = initializeApollo();
  const {
    data: { post },
  } = await client.query({ query: getPost(params.slug, preview, previewData) });

  console.log(post);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const client = initializeApollo();
  const {
    data: { posts },
  } = await client.query({ query: getAllPostSlugs() });

  return {
    paths: posts.edges.map(({ node }) => `/projects/${node.slug}`) || [],
    fallback: true,
  };
}
