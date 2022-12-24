/** @format */

import React, { useContext } from "react";
import { ProductItemsContext } from "../../App";
import ProductCard from "../Carousel/ProductCard";
import Flickity from "react-flickity-component";
import "./flickity.css";
import { CircularProgress } from "@mui/material";

const ProductsCarousel = () => {
  const { items, itemsLoaded } = useContext(ProductItemsContext);

  return (
    <div>
      {!itemsLoaded ? (
        <CircularProgress className="progress" />
      ) : (
        <Flickity reloadOnUpdate resize key={itemsLoaded}>
          {items &&
            items.map((item, i) => {
              return <ProductCard key={i} item={item} />;
            })}
        </Flickity>
      )}
    </div>
  );
};

export default ProductsCarousel;
