/** @format */

import React from "react";
import { Modal } from "@mui/material";
import "./settingsModal.css";

const SettingsModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="settingsModal">Settings Modal</div>
    </Modal>
  );
};

export default SettingsModal;
