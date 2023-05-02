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
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const ProductCard = ({ item }) => {
  const { alt, name, src, productUrl, price, stockStatus, id } = item;
  const { mbItems, setMbItems, snackPack, setSnackPack } =
    useContext(ProductItemsContext);
  const { stageDimensions } = useContext(MoodBoardInfoContext);
  // const matches = useMediaQuery();

  const handleAddProductToMoodBoard = () => {
    let centerX = stageDimensions.width / 2;
    let centerY = stageDimensions.height / 2;
    setMbItems(
      mbItems.concat([
        {
          x: centerX,
          y: centerY,
          src: src,
          crossOrigin: "anonymous",
          id: id,
        },
      ])
    );

    // Show snackbar
    setSnackPack((prev) => [
      ...prev,
      { message: `Added ${alt} to Moodboard.`, key: new Date().getTime() },
    ]);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        padding: "0.1em",
        marginTop: "5px",
        marginBottom: "5px",
        marginRight: "10px",
        height: 500,
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{ padding: "2px", objectFit: "contain" }}
      />
      <CardContent>
        <Typography variantBottom="h3" component="div">
          {alt}
        </Typography>
        <Typography variantBottom="h4" component="div">
          {price}
        </Typography>
        <Button
          onClick={handleAddProductToMoodBoard}
          startIcon={<AddToPhotosIcon />}
        >
          Add to Moodboard
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
