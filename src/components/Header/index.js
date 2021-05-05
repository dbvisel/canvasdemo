import React from "react";
import { BiCommentAdd } from "react-icons/bi";
import { HeaderDiv } from "./elements";

const Header = ({
  title,
  presentationMode,
  setPresentationMode,
  setAnnotationShown,
}) => (
  <HeaderDiv>
    <h1>
      <span>
        {title}
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            setAnnotationShown(true);
          }}
        >
          <BiCommentAdd />
        </a>
      </span>
      <button onClick={() => setPresentationMode(!presentationMode)}>
        {presentationMode ? "Leave" : "Enter"}
        {" presentation mode"}
      </button>
    </h1>
  </HeaderDiv>
);
export default Header;
