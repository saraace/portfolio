import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled.div`
  padding: 100px 0;
  background: #d5cec4;
  h2 {
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 3px;
    font-weight: 700;
    margin: 0 0 50px;
  }

  .subtitle {
    font-family: "Playfair Display", serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 300;
    margin: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 50px 0 0;
  column-gap: 30px;
`;

export const ProjectBox = styled(motion.a)`
  cursor: pointer;
  display: block;

  .image {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;

    & > div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

export const Technologies = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 15px 0;
`;

export const ProjectName = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 8px 0 10px;
  margin: 0 0 15px;
`;
