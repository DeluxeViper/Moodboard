/** @format */

import React, { useContext, useEffect, useState } from "react";
import { ProductItemsContext } from "../../App";
import ProductCard from "../Carousel/ProductCard";
import Flickity from "react-flickity-component";
import "./flickity.css";
import {
  CircularProgress,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const ProductsCarousel = () => {
  const { items, itemsLoaded } = useContext(ProductItemsContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const flickityOptions = {
    accessibility: false,
  };
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText === "") {
      setFilteredItems([...items]);
    } else {
      const newFilteredItems = [
        ...items.filter((item) =>
          item.alt.toLowerCase().includes(searchText.toLowerCase())
        ),
      ];
      setFilteredItems([...newFilteredItems]);
    }
  }, [searchText]);

  useEffect(() => {
    if (itemsLoaded) {
      setFilteredItems([...items]);
    }
  }, [itemsLoaded]);

  return (
    <div>
      {!itemsLoaded ? (
        <CircularProgress className="progress" />
      ) : (
        <div>
          <div className="product-search-text-field">
            <TextField
              id="outlined-basic"
              placeholder="Search for products..."
              // label="Search for products..."
              variant="standard"
              value={searchText}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={handleSearchTextChange}
              fullWidth
            ></TextField>
          </div>
          {filteredItems && filteredItems.length > 0 ? (
            <Flickity
              className="flickity"
              elementType="div"
              disableImagesLoaded={false}
              key={itemsLoaded}
              options={flickityOptions}
              static
              reloadOnUpdate
            >
              {filteredItems.map((item, i) => {
                return <ProductCard key={i} item={item} />;
              })}
            </Flickity>
          ) : (
            <Typography
              variant="h5"
              component="div"
              style={{ marginLeft: "20px" }}
            >
              No products found.
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsCarousel;
