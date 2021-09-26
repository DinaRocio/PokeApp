import styled from "@emotion/styled";

const fontFamily2 = "Bubblegum Sans, cursive";

export const PokeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;
export const PokeCard = styled.div`
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
  width: 94%;
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
export const Poketitle = styled.div`
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
