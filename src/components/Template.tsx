import { Container, Footer } from "../styles/Template";
import Nav from "./Nav";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Template({ children }: Props) {
  return (
    <Container>
      <Nav />
      <div className="page-content">{children}</div>
      <Footer>
        <span className="made-by-link">
          <h3>Make with ❤️ by</h3>
          <a
            href="https://www.linkedin.com/in/dinavillanueva/o"
            className="my-name-link"
          >
            Dina Rocio
          </a>
        </span>
        <div className="about-me-link">
          <a href="https://www.linkedin.com/in/dinavillanueva/">About Me</a>
        </div>
      </Footer>
    </Container>
  );
}
