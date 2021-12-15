import Head from "next/head";
import { initializeApollo } from "../../apollo";
import { getPost } from "../../apollo/queries/post";
import { getAllPostSlugs } from "../../apollo/queries/posts";
import Project from "../../components/Project/Project";

const ProjectPage = ({ post }) => {
	return (
		<div>
			<Head>{post ? <title>Sara Acevedo | Front End Engineer | {post.title}</title> : <title>Sara Acevedo | Front End Engineer</title>}</Head>
			<Project {...post} />
		</div>
	);
};

export default ProjectPage;

export async function getStaticProps({ params, preview = false, previewData }) {
	const client = initializeApollo();
	const {
		data: { project }
	} = await client.query({ query: getPost(params.slug, preview, previewData) });

	return {
		props: { post: project }
	};
}

export async function getStaticPaths() {
	const client = initializeApollo();
	const {
		data: { projects }
	} = await client.query({ query: getAllPostSlugs() });

	return {
		paths: projects.map(({ slug }) => `/projects/${slug}`) || [],
		fallback: true
	};
}
