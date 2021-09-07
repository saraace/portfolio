import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import { Flex, Back, Images, ImageWrapper, Title, Technologies, ProjectLinks, Content } from "./Project.styles";

const ProjectInfo = ({ className, title, tags, postFields }) => {
  return (
    <div {...{ className }}>
      <Title>{title}</Title>
      <Technologies>
        <Tags {...{ tags }} />
      </Technologies>
      <ProjectLinks>
        {postFields?.link && (
          <div>
            <FontAwesomeIcon icon={faLink} />
            <a href={postFields.link.url} target="_blank" rel="noreferrer">
              {postFields.link.url}
            </a>
          </div>
        )}
        {postFields?.github && (
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <a href={postFields.github.url} target="_blank" rel="noreferrer">
              {postFields.github.url}
            </a>
          </div>
        )}
      </ProjectLinks>
    </div>
  );
};

const Project = ({ featuredImage, title, tags, content, postFields }) => {
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
          <ProjectInfo className="mobile-title" {...{ title, tags, postFields }} />
          <ImageWrapper>
            <Image src={featuredImage?.node.sourceUrl} alt="Project" layout="fill" />
          </ImageWrapper>
        </Images>
        <div>
          <ProjectInfo className="desktop-title" {...{ title, tags, postFields }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Flex>
    </div>
  );
};

export default Project;
