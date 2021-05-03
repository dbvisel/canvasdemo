import React from "react";
import { HeaderDiv } from "./elements";

const Header = ({ title, presentationMode, setPresentationMode }) => (
  <HeaderDiv>
    <h1>
      <span>{title}</span>
      <button onClick={() => setPresentationMode(!presentationMode)}>
        {presentationMode ? "Leave" : "Enter"}
        {" presentation mode"}
      </button>
    </h1>
  </HeaderDiv>
);
export default Header;
