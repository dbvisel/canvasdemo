import styled from "styled-components";

export const CommentStopDiv = styled.div`
  box-sizing: border-box;
  padding: var(--innerMargin);
  border-radius: 4px;
  border: 2px solid pink;
  background-color: var(--backgroundColor);
  max-width: 250px;
  border-color: ${(props) =>
    props.isStartPoint ? "green" : props.isStopPoint ? "red" : "pink"};
  &.presentationmode {
    max-width: initial;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    line-height: 40px;
  }
`;
