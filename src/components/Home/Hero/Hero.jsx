import { useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { Section, BgImage, Title } from "./Hero.styles";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const padding = useTransform(scrollY, [0, 100], [30, 0]);
  return (
    <Section style={{ padding }}>
      <BgImage>
        <Image src="/bg.jpg" layout="fill" alt="Sara Acevedo - Front End Developer" />
      </BgImage>
      <Title>
        <h1>Sara Acevedo</h1>
        <h2>Front End Developer</h2>
      </Title>
    </Section>
  );
};

export default Hero;
