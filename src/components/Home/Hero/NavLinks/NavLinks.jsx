import Link from "next/link";
import { Nav } from "./NavLinks.styles";

const NavLinks = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavLinks;
