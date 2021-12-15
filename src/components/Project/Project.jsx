import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import { Flex, Back, Images, ImageWrapper, Title, Technologies, ProjectLinks, Content } from "./Project.styles";

const ProjectInfo = ({ className, title, technologies, github_link, project_link }) => {
	return (
		<div {...{ className }}>
			<Title>{title}</Title>
			<Technologies>
				<Tags tags={technologies} />
			</Technologies>
			<ProjectLinks>
				{project_link && (
					<div>
						<FontAwesomeIcon icon={faLink} />
						<a href={project_link} target="_blank" rel="noreferrer">
							{project_link}
						</a>
					</div>
				)}
				{github_link && (
					<div>
						<FontAwesomeIcon icon={faGithub} />
						<a href={github_link} target="_blank" rel="noreferrer">
							{github_link}
						</a>
					</div>
				)}
			</ProjectLinks>
		</div>
	);
};

const Project = ({ thumbnail_image, title, technologies, content, github_link, project_link, project_images }) => {
	return (
		<div className="container">
			<Back>
				<Link href="/#projects">
					<a>
						<Button text="Projects" direction="left" />
					</a>
				</Link>
			</Back>
			<Flex>
				<Images>
					<ProjectInfo className="mobile-title" {...{ title, technologies, github_link, project_link }} />
					{/* {thumbnail_image && (
            <ImageWrapper>
              <Image src={thumbnail_image?.url} alt={title} layout="fill" />
            </ImageWrapper>
          )} */}
					{project_images &&
						project_images.map((image, i) => (
							<ImageWrapper key={i}>
								<Image src={image.url} alt={title} layout="fill" />
							</ImageWrapper>
						))}
				</Images>
				<div>
					<ProjectInfo className="desktop-title" {...{ title, technologies, github_link, project_link }} />
					<Content dangerouslySetInnerHTML={{ __html: content.html }} />
				</div>
			</Flex>
		</div>
	);
};

export default Project;
