import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import { Flex, Back, Images, Description, Title, Technologies, ProjectLinks, Content } from "./Project.styles";

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
          <Image src={featuredImage.node.sourceUrl} width="500" height="400" alt="Project" />
        </Images>
        <Description>
          <Title>{title}</Title>
          <Technologies>
            <Tags {...{ tags }} />
          </Technologies>
          <ProjectLinks>
            {postFields.link && (
              <div>
                <FontAwesomeIcon icon={faLink} />
                <a href={postFields.link.url} target="_blank" rel="noreferrer">
                  {postFields.link.url}
                </a>
              </div>
            )}
            {postFields.github && (
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <a href={postFields.github.url} target="_blank" rel="noreferrer">
                  {postFields.github.url}
                </a>
              </div>
            )}
          </ProjectLinks>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </Description>
      </Flex>
    </div>
  );
};

export default Project;
