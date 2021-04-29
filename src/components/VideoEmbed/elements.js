import styled from "styled-components";

export const VideoEmbedWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
`;
