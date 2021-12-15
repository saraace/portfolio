import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Flex, Left, ImageWrapper, Content, Links } from "./About.styles";

const About = ({ content, featured_image, resume }) => {
	return (
		<div className="container">
			<Flex>
				<Left>
					<ImageWrapper>
						<Image src={featured_image?.url} alt="Sara Acevedo" layout="fill" />
					</ImageWrapper>
					<Links>
						<div>
							<FontAwesomeIcon icon={faGithub} />
							<a href={process.env.NEXT_PUBLIC_GITHUB} target="_blank" rel="noreferrer" className="icon">
								GitHub
							</a>
						</div>
						<div>
							<FontAwesomeIcon icon={faLinkedin} />
							<a href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank" rel="noreferrer" className="icon">
								LinkedIn
							</a>
						</div>
						{resume && (
							<div>
								<FontAwesomeIcon icon={faFileAlt} />
								<a href={resume} target="_blank" rel="noreferrer" className="icon">
									R&eacute;sum&eacute;
								</a>
							</div>
						)}
					</Links>
				</Left>
				<Content>
					<div dangerouslySetInnerHTML={{ __html: content.html }} />
				</Content>
			</Flex>
		</div>
	);
};

export default About;
