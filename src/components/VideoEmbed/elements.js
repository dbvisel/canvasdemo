import styled from "styled-components";
import oval from "./../../images/oval.svg";

export const VideoEmbedWrapper = styled.div`
  background: url(${oval}) center center no-repeat;
  background-size: 200px 200px;
  ${(props) => props.presentationMode && "min-height: 100%;"}
  ${(props) => props.presentationMode && "height: 100%;"}
  ${(props) => props.presentationMode && "width: 100%;"}
  & iframe, & img {
    ${(props) => props.presentationMode && "min-height: 100%;"}
    ${(props) => props.presentationMode && "height: 100%;"}
  }
`;
