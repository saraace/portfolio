import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <a href={process.env.NEXT_PUBLIC_GITHUB} target="_blank" rel="noreferrer" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank" rel="noreferrer" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </Links>
    </Nav>
  );
};

export default Header;
