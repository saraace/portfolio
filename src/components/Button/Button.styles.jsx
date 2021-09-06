import styled from "@emotion/styled";

export const ArrowButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", serif;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 0;
  cursor: pointer;

  span {
    margin: 0 10px 0 0;
    transition: 0.3s all ease;
  }

  &:hover {
    span {
      margin: 0;
    }
  }
`;
