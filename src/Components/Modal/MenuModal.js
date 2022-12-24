/** @format */

import React, { useRef, useContext } from "react";
import "./menuModal.css";
import { Modal, Box, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import ProductCard from "../Carousel/ProductCard";
import { ProductItemsContext } from "../../App";
import ProductsCarousel from "../Carousel/ProductsCarousel";

const MenuModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* Search Box */}
      {/* <CSSTransition
        //   in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        //   onEnter={() => setShowButton(false)}
        //   onExited={() => setShowButton(true)}
      > */}
      <div className="menuModal">
        <h3 style={{ marginLeft: "10px" }}>Product Suggestions</h3>
        <ProductsCarousel />
      </div>
      {/* </CSSTransition> */}
    </Modal>
  );
};

export default MenuModal;
