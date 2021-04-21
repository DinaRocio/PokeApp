/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaBolt } from "react-icons/fa";
import {
  IoIosWater,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosClose,
} from "react-icons/io";



const iconSet: {[key: string]: any} = {
  bolt: FaBolt,
  water: IoIosWater,
  back: IoIosArrowBack,
  next: IoIosArrowForward,
  close: IoIosClose,
};

type Props = {
  type:string,
  fill: string,
  size: number,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

function PokeIcons({ type, fill, size, onClick }: Props) {
  const ComponentToRender = iconSet[type];

  return (
    <ComponentToRender
      css={css`
        color: ${fill};
        font-size: ${size}px;
      `}
      onClick={onClick}
    />
  );
}

export default PokeIcons;
