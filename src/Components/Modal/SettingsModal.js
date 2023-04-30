/** @format */

import React, { useContext } from "react";
import {
  Modal,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import "../Styles/settingsModal.css";
import { ProductItemsContext, ThemeContext } from "../../App";
import { Themes } from "../../Theme/Constants";
import IosShareIcon from "@mui/icons-material/IosShare";

const SettingsModal = ({ open, handleClose, handleCanvasExport }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setTriggerExport, snackPack, setSnackPack } =
    useContext(ProductItemsContext);

  const handleThemeSelection = (event) => {
    setTheme(event.target.value);
  };

  const handleSettingsModalExport = () => {
    // Show snackbar
    setSnackPack((prev) => [
      ...prev,
      { message: `Export feature coming soon!`, key: new Date().getTime() },
    ]);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="settingsModal">
        <Typography
          variant="h3"
          component="div"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Edit Your Mood Board
        </Typography>
        <Typography
          variant="p"
          component="div"
          style={{
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
          style={{ justifyContent: "center", marginBottom: "10px" }}
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
        <Button
          variant="outlined"
          startIcon={<IosShareIcon />}
          style={{ justifyContent: "center" }}
          onClick={() => {
            handleSettingsModalExport();
            setTriggerExport(true);
          }}
        >
          Export
        </Button>
      </div>
    </Modal>
  );
};

export default SettingsModal;
