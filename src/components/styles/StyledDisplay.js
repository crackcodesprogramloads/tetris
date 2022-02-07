import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 10px 10px;
  padding: 15px;
  border: 3px solid rgb(0, 220, 255);
  min-height: 30px;
  opacity: 90%;
  width: 100%;
  border-radius: 15px;
  color: ${(props) => (props.gameOver ? "red" : "white")};
  background: transparent;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;
