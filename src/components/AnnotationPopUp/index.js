import * as React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AnnotationWrapper } from "./elements";

const AnnotationPopUp = ({ id, visible, closeAnnotation }) => {
  return (
    <AnnotationWrapper visible={visible}>
      <a
        href="/#"
        onClick={(e) => {
          e.preventDefault();
          closeAnnotation(true);
        }}
      >
        <AiOutlineClose />
      </a>
      <div>{id}</div>
    </AnnotationWrapper>
  );
};

export default AnnotationPopUp;
