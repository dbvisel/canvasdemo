import React from "react";
import { CommentCount } from "disqus-react";
import { BiCommentAdd } from "react-icons/bi";
import { HeaderDiv } from "./elements";
import Config from "./../../config";

const Header = ({
  title,
  id,
  presentationMode,
  setPresentationMode,
  setAnnotationShown,
}) => {
  const myUrl = `${Config.disqus.url}/${id}`;
  return (
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
            <CommentCount
              shortname={Config.disqus.shortName}
              config={{
                url: myUrl,
                identifier:
                  id +
                  "_0" /* https://github.com/disqus/disqus-react/issues/83 */,
                title: id,
                language: "en_US",
              }}
            >
              {""}
            </CommentCount>
          </a>
        </span>
        <button onClick={() => setPresentationMode(!presentationMode)}>
          {presentationMode ? "Leave" : "Enter"}
          {" presentation mode"}
        </button>
      </h1>
    </HeaderDiv>
  );
};
export default Header;
