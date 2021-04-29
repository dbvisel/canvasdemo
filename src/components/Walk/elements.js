import styled from "styled-components";

export const StopWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top || 0}px;
  left: ${(props) => props.left || 0}px;
`;
