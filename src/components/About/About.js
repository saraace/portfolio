import Image from "next/image";
import { Flex, Images, ImageWrapper, Content } from "./About.styles";

const About = ({ content, featuredImage }) => {
  return (
    <div className="container">
      <Flex>
        <ImageWrapper>
          <Image src={featuredImage?.node.sourceUrl} alt="Sara Acevedo" layout="fill" />
        </ImageWrapper>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Content>
      </Flex>
    </div>
  );
};

export default About;
