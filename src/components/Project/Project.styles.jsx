import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  .mobile-title {
    margin: 0 0 2rem;

    @media (min-width: 992px) {
      display: none;
    }
  }

  .desktop-title {
    display: none;

    @media (min-width: 992px) {
      display: block;
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Back = styled.div`
  margin: 0 0 50px;
`;

export const Images = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 50%;
    padding: 0 20px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background: #d5cec4;
  margin: 0 0 20px;

  & > div {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

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
