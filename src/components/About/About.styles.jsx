import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 992px) {
    flex: 0 0 30%;
    padding: 0 20px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;

  & > div {
    position: unset !important;
    max-width: 300px;
    margin: 0 auto !important;
    display: block;
    background: #d5cec4;

    @media (min-width: 992px) {
      max-width: none;
      margin: 0 !important;
    }
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const Links = styled.div`
  font-family: "Inter", serif;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0;

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

export const Content = styled.div`
  margin: 25px 0 0;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 56px;
    font-style: italic;
    font-weight: 400;
    line-height: 1;
    margin: 0 0 20px;
  }

  @media (min-width: 992px) {
    margin: 0;
  }
`;
