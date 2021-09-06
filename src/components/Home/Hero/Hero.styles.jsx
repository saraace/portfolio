import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  background: #fff;
`;

export const BgImage = styled.div`
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
    font-family: "Inter", serif;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 0;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin: 20px 0;

  a {
    display: block;
    padding: 0 10px;
    transition: 0.3s all ease;

    &:hover {
      color: #2c2a27;
    }
  }
`;
