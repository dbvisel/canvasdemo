import React from "react";
import { CommentCount } from "disqus-react";
import { BiCommentAdd } from "react-icons/bi";
import { HeaderDiv } from "./elements";
import Config from "./../../config";

const Header = ({
  currentWalk,
  setCurrentWalk,
  setSelectedStop,
  presentationMode,
  setPresentationMode,
  setAnnotationShown,
  walks,
}) => {
  const [flag, setFlag] = React.useState(false);
  const myUrl = `${Config.disqus.url}/${currentWalk.id}`;
  return (
    <HeaderDiv>
      <h1>
        {currentWalk.title}
        <a
          href="/#"
          className="comment"
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
                currentWalk.id +
                "_0" /* https://github.com/disqus/disqus-react/issues/83 */,
              title: currentWalk.id,
              language: "en_US",
            }}
          >
            {""}
          </CommentCount>
        </a>
      </h1>
      <p>
        Choose a walk:{" "}
        <select
          selected={currentWalk.id} /* This is working poorly! */
          onChange={(e) => {
            e.preventDefault();
            // console.log(`Changing to ${e.target.value}`);
            setCurrentWalk(walks.filter((x) => x.id === e.target.value)[0]);
            setSelectedStop("");
            setFlag(() => !flag);
          }}
        >
          {walks.map((walk) => (
            <option key={walk.id} name={walk.id} value={walk.id}>
              {walk.title}
            </option>
          ))}
        </select>
      </p>
      <button onClick={() => setPresentationMode(!presentationMode)}>
        {presentationMode ? "Leave" : "Enter"}
        {" presentation mode"}
      </button>
    </HeaderDiv>
  );
};
export default Header;
