import Link from "next/link";
import Image from "next/image";
import Button from "../../Button/Button";
import { Flex, Grid, ProjectBox, ProjectName, Section, Technologies } from "./Projects.styles";

const Project = () => {
  return (
    <Link href="/" passHref>
      <ProjectBox>
        <div className="image">
          <Image src="/placeholder.jpg" layout="fill" alt="project" />
        </div>
        <Technologies>React</Technologies>
        <ProjectName>Sample Project Name</ProjectName>
        <Button text="Read More" />
      </ProjectBox>
    </Link>
  );
};

const Projects = () => {
  return (
    <Section>
      <div className="container">
        <h2>Projects</h2>
        <Flex>
          <div className="subtitle">Some Description Text</div>
          <Link href="/projects">
            <a>
              <Button text="All Projects" />
            </a>
          </Link>
        </Flex>
        <Grid>
          {[...Array(3)].map((project, i) => (
            <div key={i}>
              <Project />
            </div>
          ))}
        </Grid>
      </div>
    </Section>
  );
};

export default Projects;
