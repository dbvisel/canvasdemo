import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  & > div {
    display: flex;
    min-height: 100%;
    min-width: 100%;
    & > nav {
      box-sizing: border-box;
      min-width: var(--navWidth);
      padding: 0 var(--innerMargin) var(--outerMargin) var(--outerMargin);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100% - var(--headerHeight));
    }
    & > main {
      min-width: 100%;
      padding: var(--outerMargin);
      /* border-top: 1px solid var(--lineColor);
      border-left: 1px solid var(--lineColor); */
      background-color: var(--black);
      overflow-x: scroll;
      overflow-y: scroll;
      position: relative;
    }
  }
`;
