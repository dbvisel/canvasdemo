import styled from "styled-components";

export const SelectedStopDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isBottom ? "row" : "column")};
  justify-content: center;
  &.horizontal {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    user-select: none;
    & p {
      margin: 0;
    }
    & > div {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
