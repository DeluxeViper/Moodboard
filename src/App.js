/** @format */

import React, { useState, useEffect, createContext } from "react";
import MoodBoard from "./Components/MoodBoard/MoodBoard";
import { Typography, Snackbar, Alert, Fab } from "@mui/material";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Settings } from "@mui/icons-material";
import SettingsModal from "./Components/Modal/SettingsModal";
import { Themes } from "./Theme/Constants";
import "./Components/Styles/app.css";
import "./Components/Styles/theme.css";

export const ProductItemsContext = createContext();
export const ThemeContext = createContext();

const api = new WooCommerceRestApi({
  url: process.env.REACT_APP_NEXT_PUBLIC_WORDPRESS_SITE,
  consumerKey: process.env.REACT_APP_WC_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_WC_CONSUMER_SECRET,
  version: "wc/v3",
});

function App() {
  const [items, setItems] = useState([]);
  const [itemsLoaded, setItemsLoaded] = useState(false);
  const [mbItems, setMbItems] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackPack, setSnackPack] = React.useState([]);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [theme, setTheme] = useState(Themes.WHITE);

  useEffect(() => {
    getProductsFromWooCommerce();
  }, []);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setSnackbarOpen(true);
    } else if (snackPack.length && messageInfo && snackbarOpen) {
      // Close an active snack when a new one is added
      setSnackbarOpen(false);
    }
  }, [snackPack, messageInfo, snackbarOpen]);

  // useEffect(() => {
  //   console.log("retrieved items from products");
  //   console.log(items);
  // }, [items]);

  // fetch images
  const getProductsFromWooCommerce = () => {
    setItems([]);
    setItemsLoaded(false);
    api
      .get("products")
      .then((res) => {
        if (res.status === 200) {
          if (res.data) {
            res.data.forEach((product) => {
              if (
                product.name !== "Reverse Withdrawal Payment" &&
                product.images
              ) {
                product.images.forEach((image, index) => {
                  const imageToAdd = {
                    ...image,
                    brandName: product.name,
                    price: product.price,
                    productUrl: product.permalink,
                    stockStatus: product.stockStatus,
                    id: `${product.id}-${index}`,
                  };
                  setItems((oldItems) => [...oldItems, imageToAdd]);
                });
              }
            });
            setItemsLoaded(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const handleOpenSettingsModal = () => {
    setSettingsModalOpen(true);
  };

  const handleThemeBackgroundColor = () => {
    return theme === Themes.WHITE
      ? "whiteBackground"
      : theme === Themes.BEIGE
      ? "beigeBackground"
      : theme === Themes.BLACK
      ? "blackBackground"
      : Themes.WHITE;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={handleThemeBackgroundColor()}>
        <ProductItemsContext.Provider
          value={{
            items,
            setItems,
            itemsLoaded,
            mbItems,
            setMbItems,
            snackPack,
            setSnackPack,
          }}
        >
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            The Mood Board
          </Typography>
          <div className="settings-button">
            <Fab
              color="white"
              aria-label="add"
              onClick={handleOpenSettingsModal}
            >
              <Settings />
            </Fab>
          </div>
          <MoodBoard />
          <Snackbar
            key={messageInfo ? messageInfo.key : undefined}
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={handleClose}
            TransitionProps={{ onExited: handleExited }}
          >
            <Alert severity="success">
              {messageInfo ? messageInfo.message : undefined}
            </Alert>
          </Snackbar>
          <SettingsModal
            open={settingsModalOpen}
            handleClose={() => setSettingsModalOpen(false)}
          />
        </ProductItemsContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
