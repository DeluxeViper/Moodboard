/** @format */

import React, { useState, useEffect, createContext } from "react";
import MoodBoard from "./Components/MoodBoard";
import { Typography } from "@mui/material";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
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

  useEffect(() => {
    getProductsFromWooCommerce();
  }, []);

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
                product.images.forEach((image) => {
                  const imageToAdd = {
                    ...image,
                    brandName: product.name,
                    price: product.price,
                    productUrl: product.permalink,
                    stockStatus: product.stockStatus,
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

  return (
    <div className="bodyWrap">
      <ProductItemsContext.Provider value={{ items, setItems, itemsLoaded }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          My Mood Board
        </Typography>
        <MoodBoard />
        {/* <ProductsCarousel /> */}
      </ProductItemsContext.Provider>
    </div>
  );
}

export default App;
