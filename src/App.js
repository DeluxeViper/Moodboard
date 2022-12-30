/** @format */

import React, { useState, useEffect, createContext } from "react";
import MoodBoard from "./Components/MoodBoard/MoodBoard";
import { Typography, Snackbar, IconButton, Alert } from "@mui/material";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import CloseIcon from "@mui/icons-material/Close";

export const ProductItemsContext = createContext();

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

  return (
    <div className="bodyWrap">
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
      </ProductItemsContext.Provider>
    </div>
  );
}

export default App;
