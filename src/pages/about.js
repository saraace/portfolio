import Head from "next/head";
import { initializeApollo } from "../apollo";
import { getPage } from "../apollo/queries/page";
import About from "../components/About/About";

const AboutPage = ({ page, resume }) => {
	return (
		<div>
			<Head>
				<title>Sara Acevedo | Front End Engineer | {page.title}</title>
			</Head>
			<About {...page} {...{ resume }} />
		</div>
	);
};

export default AboutPage;

export async function getStaticProps() {
	const client = initializeApollo();
	const { data } = await client.query({
		query: getPage("about")
	});

	return {
		props: {
			page: data.page,
			resume: data.settings[0].value
		}
	};
}
