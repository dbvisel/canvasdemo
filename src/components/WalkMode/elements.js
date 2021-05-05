import styled from "styled-components";

export const WalkModeWrapper = styled.div`
  display: flex;
  min-height: 100%;
  min-width: 100%;
  & > nav {
    box-sizing: border-box;
    min-width: var(--navWidth);
    padding: 0 var(--innerMargin) var(--outerMargin) var(--outerMargin);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100vh - var(--headerHeight)); // where does this 75 come from?
    & > div + div {
      margin-top: var(--outerMargin);
    }
    & > div:last-child {
      margin-top: auto;
      user-select: none;
    }
    & h2 {
      margin: 0 0 var(--innerMargin) 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 16px;
    }
    & p {
      margin: 0;
    }
    & button {
      display: block;
      margin: var(--innerMargin) 0;
    }
  }
  & > main {
    min-width: 100%;
    padding: var(--outerMargin);
    border-top-left-radius: var(--innerMargin);
    background-color: var(--black);
    overflow-x: scroll;
    overflow-y: scroll;
    position: relative;
    width: calc(100vw - var(--navWidth));
    -webkit-overflow-scrolling: touch;
    transition: 0.25s;
    & > div {
      min-width: 200%; /*this should be dynamically set */
    }
  }
`;
