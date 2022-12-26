/** @format */

import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  createContext,
} from "react";
import { Stage, Layer } from "react-konva";
import "../Styles/canvas.css";
import ItemsList from "../ItemsList";
import ImageComponent from "./ImageComponent";
import CanvasBackground from "../CanvasBackground";
import { Button, Fab } from "@mui/material";
import Add from "@mui/icons-material/Add";
import MenuModal from "../Modal/MenuModal";
import { ProductItemsContext } from "../../App";

export const MoodBoardInfoContext = createContext();

const MoodBoard = () => {
  // the pixel amount that the x and y position of the image can go beyond
  //  the canvas border
  const lowerBorderLimit = -100;
  const upperBorderLimit = 100;
  // static canvas dimensions used for scaling ratio
  const stageWidth = 2500,
    stageHeight = 2500;
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
  const { mbItems, setMbItems } = useContext(ProductItemsContext);
  // backgroundImage is used for setting backgroundImage of canvas
  // const [backgroundImage, setBackgroundImage] = useState();
  // selectedId is used for keeping selected image to handle resizes, z-index priority etc.
  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    const clickedOnBackground = e.target.getId() === "canvasBackground";
    if (clickedOnEmpty || clickedOnBackground) {
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
    let imagesToUpdate = mbItems;
    let singleImageToUpdate = imagesToUpdate[i];
    // update old attributes
    singleImageToUpdate = newAttrs;
    imagesToUpdate[i] = singleImageToUpdate;
    setMbItems(imagesToUpdate);
  };

  // function to handle adding images on drag and drop to canvas
  const handleOnDrop = (e, id) => {
    e.preventDefault();
    stageRef.current.setPointersPositions(e);

    setMbItems(
      mbItems.concat([
        {
          ...stageRef.current.getPointerPosition(),
          src: dragUrl,
          id: dragId,
        },
      ])
    );

    // console.log("ondrop");
    // console.log(e);
  };

  // Removes image
  const handleOnDelete = (imgSrc) => {
    const newImages = mbItems.filter((image) => image.src !== imgSrc);
    setMbItems(newImages);
  };

  // function to handle adding images on click
  const handleAddOnClick = (src, id) => {
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
    setMbItems((images) => {
      const newImages = images.slice();
      const img = images.find((i) => id === i.id);
      const index = images.indexOf(img);
      newImages.splice(index, 1);
      newImages.push(img);
      return newImages;
    });
    // console.log("onSelected");
    // console.log(e);
  };

  const handleDragStart = (e, id) => {
    setSelectedId(id);
    // e.target.moveToTop();
    setMbItems((images) => {
      const newImages = images.slice();
      const img = images.find((i) => id === i.id);
      const index = images.indexOf(img);
      newImages.splice(index, 1);
      newImages.push(img);
      return newImages;
    });
    // console.log("drag start");
    // console.log(e);
  };

  const handleDragEnd = (e) => {};

  // Keep image within bounds based on the limit value
  const handleImageBounds = (pos, shapeCurrent) => {
    // console.log("pos: " + pos.x + " , " + pos.y);
    // console.log(shapeCurrent.getClientRect());
    const { height, width } = shapeCurrent.getClientRect();
    // console.log("shape stuff: " + height + ", " + width);
    // console.log(stageRef.current);
    const widthOfCanvas = stageRef.current.bufferCanvas.width;
    const heightOfCanvas = stageRef.current.bufferCanvas.height;
    // console.log("canvas stuff:" + widthOfCanvas + " , " + heightOfCanvas);
    // console.log("scale: " + shapeCurrent.scaleX() + ", " + shapeCurrent.scaleY());
    let x = pos.x;
    let y = pos.y;
    if (pos.x < lowerBorderLimit) {
      x = lowerBorderLimit;
    } else if (pos.x > widthOfCanvas - width + upperBorderLimit) {
      x = widthOfCanvas - width + upperBorderLimit;
    }

    if (pos.y < lowerBorderLimit) {
      y = lowerBorderLimit;
    } else if (pos.y > heightOfCanvas - height + upperBorderLimit) {
      y = heightOfCanvas - height + upperBorderLimit;
    }

    return {
      x,
      y,
    };
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <MoodBoardInfoContext.Provider
        value={{ stageDimensions, setStageDimensions }}
      >
        <MenuModal open={modalOpen} handleClose={handleModalClose} />

        <div className="workContainer">
          {/* <ItemsList
          dragUrl={dragUrl}
          onChangeDragUrl={onChangeDragUrl}
          handleAddOnClick={handleAddOnClick}
          // addToBackground={addToBackground}
          // removeBackground={removeBackground}
          resizeCanvasOnSidebarChange={resizeCanvasOnSidebarChange}
          stageRef={stageRef}
        /> */}

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
                className={
                  selectedId ? "canvasStageSelected" : "canvasStageNotSelected"
                }
                ref={stageRef}
                onMouseDown={(e) => {
                  // deselect when clicked on empty area or background image
                  checkDeselect(e);
                }}
              >
                <Layer>
                  {/* {typeof backgroundImage === "string" && (
                // check if background image is not empty, default state is null
                <CanvasBackground
                  backgroundUrl={backgroundImage}
                  width={stageWidth}
                  height={stageHeight}
                />
              )} */}
                  {mbItems.map((image, i) => {
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
                        handleImageBounds={handleImageBounds}
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
          <div className="fab">
            <Fab
              color="primary"
              aria-label="add"
              size=""
              onClick={handleModalOpen}
            >
              <Add />
            </Fab>
          </div>
        </div>
      </MoodBoardInfoContext.Provider>
    </div>
  );
};

export default MoodBoard;