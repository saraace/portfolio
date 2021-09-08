import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTransform, useViewportScroll } from "framer-motion";
import NavLinks from "./NavLinks/NavLinks";
import { Section, BgImage, Title, Links } from "./Hero.styles";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const padding = useTransform(scrollY, [0, 300], [30, 0]);
  return (
    <Section style={{ padding }}>
      <NavLinks />
      <BgImage>
        <Image src="/bg.jpg" layout="fill" alt="Sara Acevedo - Front End Developer" />
      </BgImage>
      <Title>
        <h1>Sara Acevedo</h1>
        <h2>Front End Engineer</h2>
        <Links>
          <a href={process.env.NEXT_PUBLIC_GITHUB} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Links>
      </Title>
    </Section>
  );
};

export default Hero;
