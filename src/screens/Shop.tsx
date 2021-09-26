import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Template from "../components/Template";
import pb from "../assets/pokeball.png";
import { BASE_URI } from "../app/config";
import { PokeCard, PokeContent, Poketitle } from "../styles/Shop";

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
