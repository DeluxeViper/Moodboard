/** @format */

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import { ProductItemsContext } from "../../App";
import { MoodBoardInfoContext } from "../MoodBoard/MoodBoard";

const ProductCard = ({ item }) => {
  const { alt, name, src, productUrl, price, stockStatus, id } = item;
  const { mbItems, setMbItems } = useContext(ProductItemsContext);
  const { stageDimensions } = useContext(MoodBoardInfoContext);

  const handleAddProductToMoodBoard = () => {
    let centerX = stageDimensions.width / 2;
    let centerY = stageDimensions.height / 2;
    setMbItems(
      mbItems.concat([
        {
          x: centerX,
          y: centerY,
          src: src,
          id: id,
        },
      ])
    );
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        padding: "0.1em",
        marginRight: "10px",
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        height="350"
        sx={{ padding: "2px", objectFit: "contain" }}
      />
      <CardContent>
        <Typography variantBottom="h5" component="div">
          {alt}
        </Typography>
        <Typography variantBottom="p" component="div">
          {price}
        </Typography>
        <Button onClick={handleAddProductToMoodBoard}>Add to Moodboard</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
