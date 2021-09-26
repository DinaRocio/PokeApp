import styled from "@emotion/styled";
export const fontFamily2 = "Bubblegum Sans, cursive";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  & > img {
    width: 80%;
  }
  @media screen and (max-width: 760px) {
    gap: 0px;
    flex-direction: column;
  }
`;
export const HomeTitles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: initial;
  .button-side {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  & > h4 {
    font-weight: bold;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: 4px;
    color: #000000;
  }
  & > p {
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: #000000;
  }
  @media screen and (max-width: 760px) {
    gap: 5px;
    & > h4 {
      font-size: 42px;
      line-height: 49px;
      text-align: center;
    }
    & > p {
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }
    .button-side {
      justify-content: center;
    }
  }
`;
export const Button = styled.button`
  margin: 1rem;
  animation: jittery 4s infinite;
  background: black;
  font-family: ${fontFamily2};
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 20px;
  max-width: 215px;
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  outline: none;

  color: #ffd700;
  display: flex;
  justify-content: center;
  @keyframes jittery {
    5%,
    50% {
      transform: scale(1);
    }

    10% {
      transform: scale(0.9);
    }

    15% {
      transform: scale(1.15);
    }

    20% {
      transform: scale(1.15) rotate(-5deg);
    }

    25% {
      transform: scale(1.15) rotate(5deg);
    }

    30% {
      transform: scale(1.15) rotate(-3deg);
    }

    35% {
      transform: scale(1.15) rotate(2deg);
    }

    40% {
      transform: scale(1.15) rotate(0);
    }
  }
`;
