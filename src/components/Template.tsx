import styled from "@emotion/styled";
import { colors } from "../ui";
import Nav from "./Nav";

type Props = {
  children: JSX.Element | JSX.Element[];
}

export default function Template({ children }: Props) {
  return (
    <Container>
      <Nav />
      <div className="page-content">{children}</div>
      <Footer>
        <h3>Make with ❤️ by Dina Rocio </h3>
        <a href="https://github.com/DinaRocio">About Me</a>
      </Footer>
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 90px 25px;
  background-color: ${colors.light1};
  .page-content {
    padding: 78px 20px 60px 20px;
    height: 80vh;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  color: black;
  z-index: 200;
  background-color: inherit;
  & > h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  & > a {
    font-weight: bold;
    text-transform: uppercase;
    background-image: linear-gradient(transparent calc(100% - 2px), black 1px);
    transition: all 0.2s;
    background-size: 100% 100%;
    background-position: 100%;
    position: relative;
    background-repeat: no-repeat;
    &:hover {
      background-size: 0 100%;
    }
  }
`;
