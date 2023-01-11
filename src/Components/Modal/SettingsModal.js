/** @format */

import React, { useContext } from "react";
import {
  Modal,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import "./settingsModal.css";
import { ThemeContext } from "../../App";
import { Themes } from "../../Theme/Constants";

const SettingsModal = ({ open, handleClose }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeSelection = (event) => {
    setTheme(event.target.value);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="settingsModal">
        <Typography
          variant="h2"
          component="div"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Edit Your Mood Board
        </Typography>
        <Typography variant="p" component="div" style={{ textAlign: "center" }}>
          BACKGROUND COLOR
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleThemeSelection}
          value={theme}
        >
          <FormControlLabel
            value={Themes.WHITE}
            control={<Radio />}
            label="white"
          />
          <FormControlLabel
            value={Themes.BEIGE}
            control={<Radio />}
            label="beige"
          />
          <FormControlLabel
            value={Themes.BLACK}
            control={<Radio />}
            label="black"
          />
        </RadioGroup>
      </div>
    </Modal>
  );
};

export default SettingsModal;
