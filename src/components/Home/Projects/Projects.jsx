import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
import Tags from "../../Tags/Tags";
import { Flex, Grid, ProjectBox, ProjectName, Section, Technologies } from "./Projects.styles";

const Project = ({ title, slug, thumbnail_image, tags }) => {
	console.log(thumbnail_image);
	return (
		<Link href={`/projects/${slug}`} passHref>
			<ProjectBox initial="initial" animate="animate" whileHover="hover">
				{thumbnail_image && (
					<div className="image">
						<motion.div
							variants={{ initial: { scale: 1 }, hover: { scale: 1.1 } }}
							transition={{ bounce: 0, duration: 0.8, ease: "easeInOut" }}>
							<Image src={thumbnail_image.url} layout="fill" alt="project" />
						</motion.div>
					</div>
				)}
				<Technologies>
					<Tags {...{ tags }} />
				</Technologies>
				<ProjectName>{title}</ProjectName>
				<Button text="Read More" />
			</ProjectBox>
		</Link>
	);
};

const Projects = ({ projects }) => {
	return (
		<Section id="projects">
			<div className="container">
				<h2>Projects</h2>
				<Flex>
					<div className="subtitle">What I&apos;ve been working on lately...</div>
					{/* <Link href="/projects">
            <a>
              <Button text="All Projects" />
            </a>
          </Link> */}
				</Flex>
				<Grid>
					{projects.map((project, i) => (
						<div key={i}>
							<Project {...project} />
						</div>
					))}
				</Grid>
			</div>
		</Section>
	);
};

export default Projects;
