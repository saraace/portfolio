import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { Flex, Back, Images, Description, Title, Technologies, ProjectLinks, Content } from "./Project.styles";

const Project = () => {
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
          <Image src="/placeholder.jpg" width="500" height="400" alt="Project" />
        </Images>
        <Description>
          <Title>Sample Project</Title>
          <Technologies>React, NextJS, Framer Motion, Theme UI</Technologies>
          <ProjectLinks>
            <div>
              <FontAwesomeIcon icon={faLink} />
              <a href="https://www.saraace.com" target="_blank" rel="noreferrer">
                https://www.saraace.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/saraace/portfolio" target="_blank" rel="noreferrer">
                https://github.com/saraace/portfolio
              </a>
            </div>
          </ProjectLinks>
          <Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim sodales tellus ut facilisis.
              Donec at lorem at erat ultricies pharetra. Cras ligula odio, molestie cursus felis eget, scelerisque
              dictum dolor. Nam tempus fringilla semper. Nullam et ligula quis dui euismod suscipit non eget dui. Donec
              ornare sed sapien eu laoreet. Mauris efficitur euismod diam nec fermentum. Nulla facilisi. Vivamus
              imperdiet nisi lectus, vitae scelerisque mauris commodo eu.
            </p>
            <p>
              Nunc at risus tortor. Donec ultrices justo vel sagittis tincidunt. Cras ut nulla sed lectus varius
              facilisis. Nunc fringilla consequat condimentum. Quisque ac dignissim nisl, in mattis risus. Nulla non
              orci dapibus, facilisis diam nec, consectetur dolor. Vivamus at felis ut velit semper ultricies.
              Pellentesque dignissim lectus eget quam vestibulum tempor vitae ut ipsum. Sed eros purus, aliquam
              tincidunt erat ut, vulputate dapibus metus. Vivamus eu lobortis libero. Nulla placerat venenatis justo,
              lacinia vehicula ipsum ornare quis. Phasellus feugiat eros nisi, tristique dictum justo consequat ut.
              Vivamus laoreet eu dolor consectetur vehicula. Sed vel ornare mauris.
            </p>
            <p>
              Sed libero ante, egestas at arcu ut, tincidunt scelerisque felis. Quisque consequat finibus odio, id
              auctor est sagittis in. In iaculis rhoncus arcu, in mattis odio hendrerit eu. Pellentesque tincidunt leo
              sit amet pharetra viverra. Ut et massa ante. Donec enim lectus, sollicitudin quis lorem non, semper
              imperdiet ligula. Vivamus sit amet consectetur orci. Suspendisse sagittis, tellus id egestas cursus,
              tortor quam rhoncus metus, eu dictum nisl risus sit amet ipsum. Mauris id neque dolor. Praesent sed dui
              lobortis velit tincidunt porttitor. Mauris id sollicitudin nibh.
            </p>
          </Content>
        </Description>
      </Flex>
    </div>
  );
};

export default Project;
