import { useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import Hero from "./Hero/Hero";
import { Intro } from "./Home.styles";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
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
