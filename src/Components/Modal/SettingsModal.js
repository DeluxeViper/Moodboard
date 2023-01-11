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
          variant="h3"
          component="div"
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Edit Your Mood Board
        </Typography>
        <Typography
          variant="p"
          component="div"
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "10px",
          }}
        >
          BACKGROUND COLOR
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleThemeSelection}
          value={theme}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <FormControlLabel
            value={Themes.WHITE}
            control={<Radio />}
            label={<span className="whiteRadioLabel"></span>}
            labelPlacement="top"
          />
          <FormControlLabel
            value={Themes.BEIGE}
            control={<Radio />}
            label={<span className="beigeRadioLabel"></span>}
            labelPlacement="top"
          />
          <FormControlLabel
            value={Themes.BLACK}
            control={<Radio />}
            label={<span className="blackRadioLabel"></span>}
            labelPlacement="top"
          />
        </RadioGroup>
      </div>
    </Modal>
  );
};

export default SettingsModal;
