import Head from "next/head";
import { initializeApollo } from "../apollo";
import { getPosts } from "../apollo/queries/posts";
import Hero from "../components/Home/Hero/Hero";
import Intro from "../components/Home/Intro/Intro";
import Projects from "../components/Home/Projects/Projects";

const Index = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Sara Acevedo | Front End Engineer</title>
			</Head>
			<Hero />
			<Intro />
			<Projects {...{ projects: posts }} />
		</div>
	);
};

export default Index;

export async function getStaticProps() {
	const client = initializeApollo();
	const { data } = await client.query({
		query: getPosts()
	});

	return {
		props: {
			posts: data.projects
		}
	};
}
