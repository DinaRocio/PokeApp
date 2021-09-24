import styled from "@emotion/styled";
import { colors } from "../ui";
import pic from "../assets/team_rocket.png";

const Container = styled.div`
  background-color: ${colors.orange};
  height: 100vh;
  width: 100vw;
`;
const ErrorNumber = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    filter: drop-shadow(4px 4px 24px rgba(1, 17, 38, 0.2));
    opacity: 30%;
    font-size: 37vw;
  }
`;

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  gap: 32px;
  position: absolute;
  top: 23%;
  right: 17%;
  gap: 32px;
  align-items: center;
  @media only screen and (min-width: 700px) {
    right: 20%;
    top: 5%;
  }
`;
const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  .dark_text {
    color: #212121;
  }
  .light_text {
    color: #f2f2f2;
  }
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    font-size: 3rem;
    gap: 10px;
  }
`;

const ErrorButton = styled.div`
  background: #f2cb07;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  font-size: 1rem;
  font-weight: normal;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 8px;
  width: 120px;
  @media only screen and (min-width: 700px) {
    font-size: 1.438rem;
    padding: 15px;
  }
`;

const RocketTeam = styled.img`
  width: 60vw;
  @media only screen and (min-width: 700px) {
    width: 33vw;
  }
`;
export function _error() {
  return (
    <Container>
      <ErrorNumber>
        <h1>404</h1>
      </ErrorNumber>
      <Layer>
        <RocketTeam src={pic} alt="rokcet_team" />
        <ErrorText>
          <p className="light_text">The rocket team</p>
          <p className="dark_text">has won this time.</p>
        </ErrorText>

        <ErrorButton>
          <a href="/">Regresar</a>
        </ErrorButton>
      </Layer>
    </Container>
  );
}
