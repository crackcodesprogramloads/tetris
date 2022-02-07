import React from "react";
import { StyledInstructions, Title } from "./styles/StyledInstructions";

const Instructions = () => (
  <StyledInstructions>
    <Title>Up key</Title> = Rotate<br></br>
    <Title>Left/Right key</Title> = Move<br></br>
    <Title>Down key</Title> = Drop
  </StyledInstructions>
);
export default Instructions;
