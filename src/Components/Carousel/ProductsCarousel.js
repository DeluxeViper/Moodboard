/** @format */

import React, { useContext } from "react";
import { ProductItemsContext } from "../../App";
import ProductCard from "../Carousel/ProductCard";
import Flickity from "react-flickity-component";
import "./flickity.css";
import { CircularProgress } from "@mui/material";

const ProductsCarousel = () => {
  const { items, itemsLoaded } = useContext(ProductItemsContext);
  const flickityOptions = {
    accessibility: false,
  };

  return (
    <div>
      {!itemsLoaded ? (
        <CircularProgress className="progress" />
      ) : (
        <Flickity
          className={"flickity"}
          elementType={"div"}
          disableImagesLoaded={false}
          resize
          key={itemsLoaded}
          options={flickityOptions}
          static
        >
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
