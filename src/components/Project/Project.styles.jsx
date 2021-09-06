import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
`;

export const Back = styled.div`
  margin: 0 0 50px;
`;

export const Images = styled.div`
  flex: 0 0 50%;
`;

export const Description = styled.div``;

export const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 56px;
  font-style: italic;
  font-weight: 400;
  line-height: 1;
  margin: 0 0 20px;
`;

export const Technologies = styled.div`
  font-family: "Inter", serif;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  margin: 10px 0 30px;
`;

export const ProjectLinks = styled.div`
  font-family: "Inter", serif;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    margin: 0 0 5px;

    a:hover {
      text-decoration: underline;
    }

    svg {
      margin: 0 10px 0 0;
    }
  }
`;

export const Content = styled.div``;
