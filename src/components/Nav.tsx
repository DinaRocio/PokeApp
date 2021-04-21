import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import pic from "../assets/logo.png";
import { colors } from "../ui";

export default function Nav() {
  return (
    <NavBar>
      <Link to="/">
        <Logo src={pic} alt="logo" />
      </Link>
      <ul>
        <Link to="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link to="/shop">
          <NavLink>Shop</NavLink>
        </Link>
      </ul>
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 11vh;
  background-color: ${colors.light1};
  font-size: 25px;
  line-height: 29px;
  color: black;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  & > ul {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
`;
const Logo = styled.img`
  width: 150px;
`;

const NavLink = styled.div`
  background-image: linear-gradient(transparent calc(100% - 2px), black 1px);
  transition: all 0.2s;
  background-size: 100% 100%;
  background-position: 100%;
  position: relative;
  background-repeat: no-repeat;
  &:hover {
    background-size: 0 100%;
  }
`;
