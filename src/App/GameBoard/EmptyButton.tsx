import styled from "styled-components";

const EmptyButton = styled.div`
  width: ${"clamp(8.5rem, 10vw, 12rem)"};
  height: ${"clamp(8.5rem, 10vw, 12rem)"};
  background-color: hsl(229deg 42% 10%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  border: 15px solid transparent;
  border-radius: 50%;
  transform: scale(1);
`;

export default EmptyButton;
