import { useEffect, useState } from "react";
import FullTemplate from "../components/FullTemplate";
import styled from "@emotion/styled";
import { colors } from "../ui";
import { BASE_URI } from "../app/config";
import TypeIcons from "../UI/TypeIcons";
import { useParams } from "react-router-dom";



export default function ShowPokemon() {


  const [item, setItem] = useState({
    name: "pokemon",
    weight: 0,
    types: [],
    height: 0,
    base_experience: 0,
    abilities: [],
    held_items: [],
  });

  const { id }: { id: string } = useParams()

  const fetchPokemonDetail = async () => {
    const fetchItem = await fetch(`${BASE_URI}pokemon/${id}/`);
    const pokemon = await fetchItem.json();
    setItem(pokemon);
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, [id]);

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function toDecimal(num: number) {
    return num / 10;
  }

  return (
    <FullTemplate id={parseInt(id)}>
      <PokeName>
        <p>{capitalize(item.name)}</p>
      </PokeName>

      <PokeContent>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="logo"
        />
        <PokeInfo>
          <PokeSection>
            <div>
              <PokeMain>{toDecimal(item.weight)} kg</PokeMain>
              <PokeSub>WEIGHT</PokeSub>
            </div>
            <div className="pokeType">
              <ul className="typeTitles">
                {item.types?.map(({ type: { name } }) => (
                  <PokeLi>
                    <TypeIcons type={name} />
                    <PokeSub key={name}>{name}</PokeSub>
                  </PokeLi>
                ))}
              </ul>
            </div>
            <div>
              <PokeMain>{toDecimal(item.height)} m</PokeMain>
              <PokeSub>HEIGHT</PokeSub>
            </div>
          </PokeSection>
          <PokeSection>
            <div className="baseExperience">
              <PokeExp>{item.base_experience}</PokeExp>
              <PokeSub>BASE EXPERIENCE</PokeSub>
            </div>
          </PokeSection>
          <PokeSection>
            <div className="last-section">
              <ul className="right-side">
                <SpecialTitle>ABILITIES</SpecialTitle>
                {item.abilities?.map(({ ability: { name } }) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>

              <ul className="right-side">
                <SpecialTitle>ITEMS</SpecialTitle>
                {item.held_items?.map(({ item: { name } }) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </PokeSection>
        </PokeInfo>
      </PokeContent>
    </FullTemplate>
  );
}

const fontFamily2 = "Bubblegum Sans, cursive";

const PokeName = styled.div`
  font-family: ${fontFamily2};
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  padding: 18px;
  color: #ffffff;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
`;
const PokeSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${colors.gray4};
  .pokeType {
    border-left: 1px solid ${colors.gray4};
    border-right: 1px solid ${colors.gray4};
    padding: 10px;
  }
  .typeTitles {
    display: flex;
    gap: 10px;
  }
  .baseExperience {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
  }
  .last-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    font-family: ${fontFamily2};
    font-size: 20px;
    .right-side {
      background-color: pink;
      display: flex;
      align-items: center;
      padding: 10px;
      gap: 10px;
      border-radius: 20px 0px 0px 20px;
    }
  }
`;
const PokeLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PokeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100%;
  & > img {
    height: 450px;
    z-index: 1;
    transition: transform 0.2s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:hover {
      transform: scale(1.3);
    }
  }
`;
const PokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;
const PokeSub = styled.p`
  font-style: normal;
  font-weight: bold;
  color: ${colors.gray};
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
`;
const PokeMain = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 19px;
`;
const PokeExp = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 23px;
  background: #aa6d32;
  background: -webkit-linear-gradient(bottom, #aa6d32, #c69acd);
  background: -moz-linear-gradient(bottom, #aa6d32, #c69acd);
  background: linear-gradient(to top, #aa6d32, #c69acd);
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const SpecialTitle = styled.div`
  padding: 10px;
  min-width: 110px;
  color: white;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #7521e9;
  background: -webkit-linear-gradient(top, #7521e9, #e757ac);
  background: -moz-linear-gradient(top, #7521e9, #e757ac);
  background: linear-gradient(to bottom, #7521e9, #e757ac);
  border-radius: 20px;
`;
