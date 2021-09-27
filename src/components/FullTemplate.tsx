import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import PokeIcons from "../UI/PokeIcons";
import Nav from "./Nav";

type Props = {
  children: JSX.Element | JSX.Element[];
  id: number;
};

export default function FullTemplate({ children, id }: Props) {
  let history = useHistory();

  const handleBackNavigation = () => {
    history.push(`/shop/${+id - 1}`);
  };

  const handleNextNavigation = () => {
    history.push(`/shop/${+id + 1}`);
  };

  return (
    <Container>
      <Nav />
      <div className="page-content">
        <div className="action-left">
          <PokeIcons
            type="back"
            fill="black"
            size={33}
            onClick={handleBackNavigation}
          />
        </div>
        {children}
        <div className="action-right">
          <PokeIcons
            type="next"
            fill="black"
            size={33}
            onClick={handleNextNavigation}
          />
        </div>
      </div>
      <Footer>
        <h3>Make with ❤️ for you</h3>
        <a href="https://github.com/DinaRocio">About Me</a>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 90px 25px;
  background: #60cfe0;
  background: -webkit-linear-gradient(top, #60cfe0, #ae2aee);
  background: -moz-linear-gradient(top, #60cfe0, #ae2aee);
  background: linear-gradient(to bottom, #60cfe0, #ae2aee);
  .page-content {
    position: relative;
    height: 80vh;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .action-right {
      background: white;
      border-radius: 9px;
      position: absolute;
      right: 0;
      top: 50%;
      cursor: pointer;
      z-index: 2;
    }
    .action-left {
      background: white;
      border-radius: 9px;
      position: absolute;
      left: 0;
      top: 50%;
      cursor: pointer;
      z-index: 2;
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
