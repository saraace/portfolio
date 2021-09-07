import styled from "@emotion/styled";

export const Nav = styled.nav`
  position: absolute;
  top: 70px;
  left: 30px;
  right: 30px;
  z-index: 10;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0 10px;
      a {
        display: block;
        font-family: "Inter", serif;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 2px;
        padding: 0 10px;
        color: #fff;
        position: relative;

        &:after {
          content: "";
          height: 1px;
          background: #fff;
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 100%;
          opacity: 0;
          transition: 0.3s all ease;
        }

        &:hover {
          &:after {
            right: 0;
            opacity: 1;
          }
        }
      }
    }
  }
`;
