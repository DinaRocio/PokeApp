import { Link } from "react-router-dom";
import Template from "../components/Template";
import { Button, Container, HomeTitles } from "../styles/Home";

export default function Home() {
  return (
    <Template>
      <Container>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/403.svg"
          alt="main pokemon"
          className="main-pokemon"
        />
        <HomeTitles>
          <h4>Find all your favorite Pokemon</h4>
          <p>
            Revisit some of the most memorable Pokemons, its strengths,
            disadvantages and abilities
          </p>
          <div className="button-side">
            <Link to="/shop">
              <Button>See Pokemons</Button>
            </Link>
          </div>
        </HomeTitles>
      </Container>
    </Template>
  );
}
