import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Template from "../components/Template";
import styled from "@emotion/styled";
import pb from "../assets/pokeball.png";
import { BASE_URI } from "../app/config";

interface Items {
  name: string;
  url: string;
}

export default function Shop() {
  const [state, setState] = useState("loading");

  const [items, setItems] = useState<Items[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(`${BASE_URI}pokemon?limit=100&offset=140`);

    await setTimeout(function () {}, 2000);

    const items = await data.json();
    setItems(items.results);
    setState("");
  };
  function findId(url: string) {
    let reg = /\d+(?!.*\d)/;
    let arr = reg.exec(url);
    if (arr !== null) {
      return arr[0];
    }
  }
  return (
    <Template>
      <>
        {state}

        <PokeContent>
          {items.map((item) => (
            <Link to={`/shop/${findId(item.url)}`} key={findId(item.url)}>
              <PokeCard>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${findId(
                    item.url
                  )}.svg`}
                  alt="pokemon"
                />

                <Poketitle>
                  <h1>{item.name}</h1>

                  <img src={pb} alt="pokeball" />
                </Poketitle>
              </PokeCard>
            </Link>
          ))}
        </PokeContent>
      </>
    </Template>
  );
}

const fontFamily2 = "Bubblegum Sans, cursive";

const PokeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;
const PokeCard = styled.div`
  position: relative;
  padding: 20px 20px 60px 20px;
  background: #3a3ffc;
  min-height: 300px;
  background: -webkit-linear-gradient(bottom left, #3a3ffc, #dfa3c2);
  background: -moz-linear-gradient(bottom left, #3a3ffc, #dfa3c2);
  background: linear-gradient(to top right, #3a3ffc, #dfa3c2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > img {
    width: 200px;
    max-height: 200px;
    z-index: 1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
const Poketitle = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px 20px;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  font-family: ${fontFamily2};
  background-color: white;
  & > img {
    width: 50px;
    height: 50px;
  }
`;
