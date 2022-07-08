import React from "react";

const ModalBody = ({ heading, subHeding }) => {
  return (
    <>
      <div>
        <span className="modal-sub-headings">{subHeding}</span>
        <p className="modal-heading">{heading}</p>
      </div>
    </>
  );
};

export default ModalBody;
