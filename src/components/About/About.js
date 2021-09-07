import Image from "next/image";
import { Flex, ImageContainer, Content } from "./About.styles";

const About = ({ content, featuredImage }) => {
  return (
    <div className="container">
      <Flex>
        <ImageContainer>
          <Image src={featuredImage?.node.sourceUrl} width="500" height="400" alt="Project" />
        </ImageContainer>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Content>
      </Flex>
    </div>
  );
};

export default About;
