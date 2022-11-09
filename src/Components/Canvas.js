/** @format */

import React, { useRef, useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import "./Styles/canvas.css";
import ItemsList from "./ItemsList";
import ImageComponent from "./ImageComponent";
import CanvasBackground from "./CanvasBackground";

const Canvas = () => {
  // static canvas dimensions used for scaling ratio
  const stageWidth = 2000,
    stageHeight = 2000;
  // dynamic canvas dimensions
  const [stageDimensions, setStageDimensions] = useState({
    width: stageWidth,
    height: stageHeight,
    scale: 1,
  });
  // stageRef is used for handling callbacks - example: getting canvas positions after drag and rop
  const stageRef = useRef();
  // containerRef is used for dynamic canvas scalling
  // main purpose of containerRef is to get width of parent div of canvas stage
  const containerRef = useRef();
  // dragUrl stores temporary src of dragged image
  const [dragUrl, setDragUrl] = useState();
  const [dragId, setDragId] = useState();
  // images stores images that are added to canvas
  const [images, setImages] = useState([]);
  // backgroundImage is used for setting backgroundImage of canvas
  const [backgroundImage, setBackgroundImage] = useState();
  // selectedId is used for keeping selected image to handle resizes, z-index priority etc.
  const [selectedId, setSelectedId] = useState(null);

  // function to handle resize of canvas dimensions based on window width or when sidebar is closed or opened
  const handleResize = () => {
    let sceneWidth = containerRef.current.clientWidth;
    let scale = sceneWidth / stageWidth;
    setStageDimensions({
      width: stageWidth * scale,
      height: stageHeight * scale,
      scale: scale,
    });
  };

  // add eventListener for every window resize to call handleResize function
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
    return () => window.addEventListener("resize", handleResize, false);
  }, []);

  // if clicked on empty space of canvas, including backgroundImage perform deselect item
  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    const clikedOnBackground = e.target.getId() === "canvasBackground";
    if (clickedOnEmpty || clikedOnBackground) {
      setSelectedId(null);
    }
  };

  // when element is dragged pass its image src to allow it for adding it to canvas
  const onChangeDragUrl = (dragUrl, id) => {
    setDragUrl(dragUrl);
    setDragId(id);
  };

  // update image attributes when performing resize
  const handleTransformChange = (newAttrs, i) => {
    let imagesToUpdate = images;
    let singleImageToUpdate = imagesToUpdate[i];
    // update old attributes
    singleImageToUpdate = newAttrs;
    imagesToUpdate[i] = singleImageToUpdate;
    setImages(imagesToUpdate);
  };

  // function to handle adding images on drag and drop to canvas
  const handleOnDrop = (e, id) => {
    e.preventDefault();
    stageRef.current.setPointersPositions(e);
    setImages(
      images.concat([
        {
          ...stageRef.current.getPointerPosition(),
          src: dragUrl,
          id: dragId,
        },
      ])
    );
  };

  // Removes image
  const handleOnDelete = (imgSrc) => {
    const newImages = images.filter((image) => image.src !== imgSrc);
    setImages(newImages);
  };

  // function to handle adding images on click
  const handleAddOnClick = (src, id) => {
    let centerX = stageDimensions.width / 2;
    let centerY = stageDimensions.height / 2;
    setImages(
      images.concat([
        {
          x: centerX,
          y: centerY,
          src: src,
          id: id,
        },
      ])
    );
  };

  // function to handle adding background image of canvas
  const addToBackground = (backgroundUrl) => {
    setBackgroundImage(backgroundUrl);
  };

  // function to handle removing background image of canvas
  const removeBackground = () => {
    setBackgroundImage(null);
  };

  // when sidebar state changes this function is being called
  const resizeCanvasOnSidebarChange = () => {
    // wait for sidebar animation to complete
    setTimeout(() => {
      handleResize();
    }, 420);
  };

  const onSelected = (e, id) => {
    setSelectedId(id);
    e.target.moveToTop();
    setImages((images) => {
      const newImages = images.slice();
      const img = images.find((i) => id === i.id);
      const index = images.indexOf(img);
      newImages.splice(index, 1);
      newImages.push(img);
      return newImages;
    });
  };

  const handleDragStart = (e, id) => {
    setSelectedId(id);
    e.target.moveToTop();
    setImages((images) => {
      const newImages = images.slice();
      const img = images.find((i) => id === i.id);
      const index = images.indexOf(img);
      newImages.splice(index, 1);
      newImages.push(img);
      return newImages;
    });
  };

  const handleDragEnd = (e) => {};

  return (
    <div className="workContainer">
      <ItemsList
        dragUrl={dragUrl}
        onChangeDragUrl={onChangeDragUrl}
        handleAddOnClick={handleAddOnClick}
        addToBackground={addToBackground}
        removeBackground={removeBackground}
        resizeCanvasOnSidebarChange={resizeCanvasOnSidebarChange}
        stageRef={stageRef}
      />

      <div className="canvasWrap">
        <div
          className="canvasBody"
          ref={containerRef}
          onDrop={handleOnDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <Stage
            width={stageDimensions.width}
            height={stageDimensions.height}
            scaleX={stageDimensions.scale}
            scaleY={stageDimensions.scale}
            className="canvasStage"
            ref={stageRef}
            onMouseDown={(e) => {
              // deselect when clicked on empty area or background image
              checkDeselect(e);
            }}
          >
            <Layer>
              {typeof backgroundImage === "string" && (
                // check if background image is not empty, default state is null
                <CanvasBackground
                  backgroundUrl={backgroundImage}
                  width={stageWidth}
                  height={stageHeight}
                />
              )}
              {images.map((image, i) => {
                return (
                  <ImageComponent
                    image={image}
                    shapeProps={image}
                    id={image?.id}
                    key={image?.id}
                    isSelected={image?.id === selectedId}
                    onSelect={(e) => onSelected(e, image?.id)}
                    handleDragStart={(e) => handleDragStart(e, image?.id)}
                    handleDragEnd={handleDragEnd}
                    onChange={(newAttrs) => {
                      handleTransformChange(newAttrs, i);
                    }}
                    handleOnDelete={handleOnDelete}
                  />
                );
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
