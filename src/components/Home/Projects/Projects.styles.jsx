import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled.div`
  padding: 100px 0;
  background: #edece7;

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
  flex-direction: column;

  a {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    margin: 20px 0 0;

    @media (min-width: 576px) {
      margin: 0;
    }
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 50px 0 0;
  row-gap: 30px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectBox = styled(motion.a)`
  cursor: pointer;
  display: block;

  .image {
    background: #d5cec4;
    position: relative;
    width: 100%;
    padding-bottom: 74%;
    overflow: hidden;

    & > div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    img {
      object-fit: cover;
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
