import { Flex, ImageContainer, Content } from "./About.styles";

const About = () => {
  return (
    <div className="container">
      <Flex>
        <ImageContainer />
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim sodales tellus ut facilisis. Donec
            at lorem at erat ultricies pharetra. Cras ligula odio, molestie cursus felis eget, scelerisque dictum dolor.
            Nam tempus fringilla semper. Nullam et ligula quis dui euismod suscipit non eget dui. Donec ornare sed
            sapien eu laoreet. Mauris efficitur euismod diam nec fermentum. Nulla facilisi. Vivamus imperdiet nisi
            lectus, vitae scelerisque mauris commodo eu.
          </p>
          <p>
            Nunc at risus tortor. Donec ultrices justo vel sagittis tincidunt. Cras ut nulla sed lectus varius
            facilisis. Nunc fringilla consequat condimentum. Quisque ac dignissim nisl, in mattis risus. Nulla non orci
            dapibus, facilisis diam nec, consectetur dolor. Vivamus at felis ut velit semper ultricies. Pellentesque
            dignissim lectus eget quam vestibulum tempor vitae ut ipsum. Sed eros purus, aliquam tincidunt erat ut,
            vulputate dapibus metus. Vivamus eu lobortis libero. Nulla placerat venenatis justo, lacinia vehicula ipsum
            ornare quis. Phasellus feugiat eros nisi, tristique dictum justo consequat ut. Vivamus laoreet eu dolor
            consectetur vehicula. Sed vel ornare mauris.
          </p>
          <p>
            Sed libero ante, egestas at arcu ut, tincidunt scelerisque felis. Quisque consequat finibus odio, id auctor
            est sagittis in. In iaculis rhoncus arcu, in mattis odio hendrerit eu. Pellentesque tincidunt leo sit amet
            pharetra viverra. Ut et massa ante. Donec enim lectus, sollicitudin quis lorem non, semper imperdiet ligula.
            Vivamus sit amet consectetur orci. Suspendisse sagittis, tellus id egestas cursus, tortor quam rhoncus
            metus, eu dictum nisl risus sit amet ipsum. Mauris id neque dolor. Praesent sed dui lobortis velit tincidunt
            porttitor. Mauris id sollicitudin nibh.
          </p>
        </Content>
      </Flex>
    </div>
  );
};

export default About;
