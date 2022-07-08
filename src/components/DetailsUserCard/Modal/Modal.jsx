import React from "react";
import { Modal } from "react-bootstrap";
import { VscCircleOutline } from "react-icons/vsc";
import ModalBody from "./ModalBody";
import "./modalpage.css";
const ModalPage = ({ show, handleClose, item }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="user-card-modal"
    >
      <Modal.Header closeButton>
        <img src={item.image} alt={item.name} className="modal-image" />
        <div className="modal-header-text-cointener">
          <p className="modal-user-name">{item.name}</p>
          <p>
            {item.status === "Alive" ? (
              <VscCircleOutline className="alive-color" />
            ) : (
              <VscCircleOutline />
            )}
            <span>{item.status}-</span>
            <span>{item.species}</span>
          </p>
        </div>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="modal-hedings">
          <ModalBody subHeding={"Gender"} heading={item.gender} />
          <ModalBody subHeding={"Location"} heading={item.origin.name} />
        </div>
        <div className="modal-hedings">
          <ModalBody subHeding={"Species"} heading={item.species} />
          <ModalBody subHeding={"Status"} heading={item.status} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPage;
