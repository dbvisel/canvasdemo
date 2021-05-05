import styled from "styled-components";

export const StopWrapper = styled.div`
  background-color: var(--white);
  color: var(--text);
  position: absolute;
  top: ${(props) => props.top || 0}px;
  left: ${(props) => props.left || 0}px;
  padding: var(--innerMargin);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--lineColor);
  transition: 0.25s;
  cursor: pointer;
  &.selected {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    border-color: var(--highlightColor);
    border-width: 4px;
    z-index: 9;
  }
  & h2 {
    margin: 0 0 var(--innerMargin) 0;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
  & h3 {
    margin: var(--innerMargin) 0 0 0;
    font-size: 16px;
    text-align: right;
    line-height: 16px;
    & a {
      display: inline-flex;
      align-items: center;
      opacity: 0.5;
      transition: 0.25s;
      color: var(--text);
      text-decoration: none;
      & > svg + span {
        margin-left: 8px;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;
