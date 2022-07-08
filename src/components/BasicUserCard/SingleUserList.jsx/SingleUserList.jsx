import React, { useState } from "react";
import { VscCircleOutline } from "react-icons/vsc";
import ModalPage from "../../DetailsUserCard/Modal/Modal";
import "./singleUserCard.css";
const SingleUserList = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="max-width singleCard" key={item.id} onClick={handleShow}>
        <div className="left-img-container">
          <img src={item.image} alt={item.name} className="single-user-image" />
          <p className="user-name">{item.name}</p>
        </div>
        <div className="right-content-container">
          <span className="absolute-positon ">
            {item.status === "Alive" ? (
              <VscCircleOutline className="alive-color" />
            ) : (
              <VscCircleOutline />
            )}
          </span>
          <span>{item.status}-</span>
          <span>{item.species}</span>
        </div>
      </div>
      <ModalPage show={show} handleClose={handleClose} item={item} />
    </>
  );
};

export default SingleUserList;
