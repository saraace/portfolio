import styled from "@emotion/styled";

export const Section = styled.div`
  background: #c8b9ad;
  padding: 100px 20px;

  @media (min-width: 768px) {
    padding: 200px 30px;
  }

  div {
    max-width: 1050px;
    margin: 0 auto;

    h2 {
      text-align: center;
      text-transform: uppercase;
      font-family: "Inter", serif;
      font-size: 16px;
      letter-spacing: 3px;
      font-weight: 700;
      margin: 0 0 10px;

      @media (min-width: 576px) {
        margin: 0 0 50px;
      }
    }

    p {
      text-align: center;
      font-family: "Inter", serif;
      font-weight: 300;
      line-height: 1.7em;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 1.9em;
        margin: 2em 0;
      }
    }
  }
`;
