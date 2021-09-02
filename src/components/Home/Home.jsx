import { useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { Hero, HeroImage, Title, Intro } from "./Home.styles";
import Projects from "./Projects/Projects";

const Home = () => {
  const { scrollY } = useViewportScroll();
  const padding = useTransform(scrollY, [0, 100], [30, 0]);
  return (
    <div>
      <Hero style={{ padding }}>
        <HeroImage>
          <Image src="/bg.jpg" layout="fill" alt="Sara Acevedo - Front End Developer" />
        </HeroImage>
        <Title>
          <h1>Sara Acevedo</h1>
          <h2>Front End Developer</h2>
        </Title>
      </Hero>
      <Intro>
        <div>
          <h2>My Approach</h2>
          <p>
            I am a determined problem solver with in-depth knowledge of the software lifecycle and design patterns. I
            consider understanding the big-picture of a project crucial while staying grounded in my skills and where I
            can provide the most value. I am skilled in identifying and implementing appropriate technical solutions
            while maintaining software craftsmanship throughout each project. In addition, I possess excellent
            communication and critical thinking skills to identify business challenges and immediately prescribe
            effective technical solutions. Finally, I am a natural creative with a passion for creating visually
            stunning solutions that thrive.
          </p>
        </div>
      </Intro>
      <Projects />
    </div>
  );
};

export default Home;
