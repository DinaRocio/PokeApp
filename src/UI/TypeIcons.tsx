/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import bg from "../assets/PokeTypes/bug.svg";
import dk from "../assets/PokeTypes/dark.svg";
import dg from "../assets/PokeTypes/dragon.svg";
import ec from "../assets/PokeTypes/electric.svg";
import fy from "../assets/PokeTypes/fairy.svg";
import ft from "../assets/PokeTypes/fighting.svg";
import fr from "../assets/PokeTypes/fire.svg";
import fl from "../assets/PokeTypes/flying.svg";
import gh from "../assets/PokeTypes/ghost.svg";
import gs from "../assets/PokeTypes/grass.svg";
import gr from "../assets/PokeTypes/ground.svg";
import ic from "../assets/PokeTypes/ice.svg";
import nr from "../assets/PokeTypes/normal.svg";
import ps from "../assets/PokeTypes/poison.svg";
import psy from "../assets/PokeTypes/psychic.svg";
import rk from "../assets/PokeTypes/rock.svg";
import st from "../assets/PokeTypes/steel.svg";
import wt from "../assets/PokeTypes/water.svg";

const iconSet : {[key: string]: string} = {
  bug: bg,
  dark: dk,
  dragon: dg,
  electric: ec,
  fairy: fy,
  fighting: ft,
  fire: fr,
  flying: fl,
  ghost: gh,
  grass: gs,
  ground: gr,
  ice: ic,
  normal: nr,
  poison: ps,
  psychic: psy,
  rock: rk,
  steel: st,
  water: wt,
};

const colorSet: {[key: string]: string} = {
  bug: "#7FD02A",
  dark: "#5B5462",
  dragon: "#3E3DC9",
  electric: "#EAEC44",
  fairy: "#FB5FE5",
  fighting: "#D9005A",
  fire: "#FBAB40",
  flying: "#A6ACED",
  ghost: "#6D4BBD",
  grass: "#3AD158",
  ground: "#DC7B45",
  ice: "#67D7C1",
  normal: "#67D7C1",
  poison: "#C400CF",
  psychic: "#FF787B",
  rock: "#C5C387",
  steel: "#5493A3",
  water: "#6188E1",
};

function TypeIcons({ type}: {type: string}) {
  const ComponentToRender = iconSet[type];

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: ${colorSet[type]};
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      `}
    >
      <img
        src={ComponentToRender}
        css={css`
          width: 30px;
        `}
        alt = "icon"
      />
    </div>
  );
}

export default TypeIcons;
