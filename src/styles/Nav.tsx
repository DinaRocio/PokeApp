import styled from "@emotion/styled";
import { colors } from "../ui";

export const NavBar = styled.div`
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
  .hamburguer-icon {
    display: none;
  }
  @media screen and (max-width: 480px) {
    justify-content: space-between;
    padding: 0 26px;
    .nav-section {
      display: none;
    }
    .hamburguer-icon {
      display: block;
    }
  }
`;
export const Logo = styled.img`
  width: 150px;
`;

export const NavLink = styled.div`
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
