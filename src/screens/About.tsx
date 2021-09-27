import styled from "@emotion/styled";
import Template from "../components/Template";

export default function About() {
  return (
    <Template>
      <Building>En construcción</Building>
      <i
        className="em em-construction"
        aria-role="presentation"
        aria-label="CONSTRUCTION SIGN"
      ></i>
    </Template>
  );
}
const Building = styled.h1`
  color: #fff;
`;
