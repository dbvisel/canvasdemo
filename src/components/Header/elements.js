import styled from "styled-components";

export const HeaderDiv = styled.header`
  background-color: var(--backgroundColor);
  padding: var(--outerMargin);
  height: var(--headerHeight);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  & h1 {
    margin: 0;
  }
`;
