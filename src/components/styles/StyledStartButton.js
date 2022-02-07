import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 10px 10px;
  padding: 15px;
  border: 3px solid rgb(0, 220, 255);
  opacity: 90%;
  min-height: 30px;
  width: 100%;
  border-radius: 15px;
  color: ${(props) => (props.gameOver ? "red" : "white")};
  background: transparent;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`;
