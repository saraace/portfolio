import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: #edece7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;
  margin: 0 0 50px;
  border-bottom: 1px solid #d5cec4;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    margin: 0;
  }
`;

export const Links = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin: 0 0 0 20px;

      a {
        display: block;
        font-family: "Inter", serif;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 2px;

        &.icon {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
