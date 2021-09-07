import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import { Flex, Back, Images, ImageWrapper, Title, Technologies, ProjectLinks } from "./Project.styles";

const ProjectInfo = ({ className, title, tags, github, projectLink }) => {
  return (
    <div {...{ className }}>
      <Title>{title}</Title>
      <Technologies>
        <Tags {...{ tags }} />
      </Technologies>
      <ProjectLinks>
        {projectLink && (
          <div>
            <FontAwesomeIcon icon={faLink} />
            <a href={projectLink} target="_blank" rel="noreferrer">
              {projectLink}
            </a>
          </div>
        )}
        {github && (
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <a href={github} target="_blank" rel="noreferrer">
              {github}
            </a>
          </div>
        )}
      </ProjectLinks>
    </div>
  );
};

const Project = ({ featuredImage, title, tags, content, github, projectLink, images }) => {
  return (
    <div className="container">
      <Back>
        <Link href="/projects">
          <a>
            <Button text="Projects" direction="left" />
          </a>
        </Link>
      </Back>
      <Flex>
        <Images>
          <ProjectInfo className="mobile-title" {...{ title, tags, github, projectLink }} />
          <ImageWrapper>
            <Image src={featuredImage?.node.sourceUrl} alt={title} layout="fill" />
          </ImageWrapper>
          {images.map((image, i) => (
            <ImageWrapper key={i}>
              <Image src={image} alt={title} layout="fill" />
            </ImageWrapper>
          ))}
        </Images>
        <div>
          <ProjectInfo className="desktop-title" {...{ title, tags, github, projectLink }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Flex>
    </div>
  );
};

export default Project;
