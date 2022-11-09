/** @format */

import React, { useEffect, useState } from "react";
import FilterBar from "./filterBar";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.REACT_APP_NEXT_PUBLIC_WORDPRESS_SITE,
  consumerKey: process.env.REACT_APP_WC_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_WC_CONSUMER_SECRET,
  version: "wc/v3",
});

// images can be dragged or clicked for adding it to canvas

const ImagesSection = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProductsFromWooCommerce();
  }, []);

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  // fetch images
  const getProductsFromWooCommerce = () => {
    setItems([]);
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
                  setItems((oldItems) => [...oldItems, image]);
                });
              }
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // filter images by selected category
  const filterImagesByCategories = (array) => {
    let filteredArrayToReturn;
    if (selectedCategory.length > 0) {
      filteredArrayToReturn = array.filter(
        (el) => el.photoCategory === selectedCategory
      );
      return filteredArrayToReturn;
    }
    return array;
  };

  return (
    <div className="itemsSection">
      <FilterBar
        items={items}
        onChange={(selectedCategory) => {
          setSelectedCategory(selectedCategory);
        }}
      />

      <div className="itemsWrapper">
        {items.map((item, i) => (
          <div className="imageContainer" key={i}>
            <img
              src={item.src}
              alt={item.alt}
              className="itemsImage"
              draggable="true"
              // elementCategory="All"
              onDragStart={(e) => {
                props.onChangeDragUrl(e.target.src);
              }}
              onClick={(e) => {
                console.log(e.target);
                props.handleAddOnClick(e.target.src);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesSection;
