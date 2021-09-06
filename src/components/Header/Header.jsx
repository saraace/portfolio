import Link from "next/link";
import { Nav, Links } from "./Header.styles";

const Header = () => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <h1>Sara Acevedo</h1>
        </a>
      </Link>
      <Links>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </Links>
    </Nav>
  );
};

export default Header;
