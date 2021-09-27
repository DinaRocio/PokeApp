import styled from "@emotion/styled";
import { colors } from "../ui";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 90px 25px;
  background-color: ${colors.light1};
  .page-content {
    padding: 28px 20px 60px 20px;
    height: 80vh;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .page-content {
      padding: 10px;
    }
  }
`;

export const Footer = styled.div`
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
  .my-name-link {
    font-weight: bold;
    text-decoration: underline;
  }
  .made-by-link {
    display: flex;
    gap: 5px;
  }
  & > h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  .about-me-link {
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
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    z-index: 0;
    .about-me-link {
      display: none;
    }
  }
`;
