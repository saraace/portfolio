import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Hero = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1016px;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const Title = styled.div`
  position: absolute;
  text-align: center;
  color: #fff;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: 100px;
    font-style: italic;
    font-weight: 400;
    margin: 0;
  }
  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    margin: 0;
  }
`;

export const Intro = styled.div`
  background: #c8b9ad;
  padding: 200px 30px;

  div {
    max-width: 1050px;
    margin: 0 auto;
    h3 {
      text-align: center;
      text-transform: uppercase;
      font-family: "Inter", serif;
      font-size: 16px;
      letter-spacing: 3px;
      font-weight: 700;
      margin: 0 0 50px;
    }

    p {
      text-align: center;
      font-size: 20px;
      font-family: "Inter", serif;
      font-weight: 300;
      line-height: 1.9em;
    }
  }
`;
