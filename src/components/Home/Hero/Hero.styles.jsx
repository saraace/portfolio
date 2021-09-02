import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1016px;
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
    font-family: "Inter", sans-serif;
    font-weight: 300;
    margin: 0;
  }
`;
