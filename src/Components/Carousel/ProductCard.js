/** @format */

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const ProductCard = ({ item, handleAddProductToMoodBoard }) => {
  const { alt, name, src, productUrl, price, stockStatus } = item;

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
