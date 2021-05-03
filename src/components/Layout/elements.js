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
  & > #presentationmode {
    display: flex;
    flex-direction: column;
    height: 100%;
    & > div {
      box-sizing: border-box;
      height: 100%;
      background-color: var(--black);
      padding: var(--innerMargin);
      display: flex;
      position: relative;
    }
    & > nav {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100px;
      min-height: 100px;
      padding: var(--outerMargin);
    }
  }
  & > #walkmode {
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
      height: calc(
        100vh - var(--headerHeight)
      ); // where does this 75 come from?
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
    }
  }
`;
