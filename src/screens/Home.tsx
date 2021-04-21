import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Template from "../components/Template";

export default function Home() {
  return (
    <Template>
      <Container>
        <HomeTitles>
          <h4>Find all your favorite Pokemon</h4>
          <p>
            Revisit some of the most memorable Pokemons, its strengths,
            disadvantages and abilities
          </p>
          <Link to="/shop">
            <Button>See Pokemons</Button>
          </Link>
        </HomeTitles>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/403.svg"
          alt="main pokemon"
        />
      </Container>
    </Template>
  );
}
const fontFamily2 = "Bubblegum Sans, cursive";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 40%;
  }
`;
const HomeTitles = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 64px;
  text-align: initial;

  & > h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: 4px;
    color: #000000;
  }
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: #000000;
  }
`;
const Button = styled.button`
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
