/** @format */

import React, { useRef, useEffect, Fragment } from "react";
import { Image, Path, Transformer } from "react-konva";
import useImage from "use-image";
// image component that contains various event handlers
// image component is used for passing it to Konva canvas

const ImageComponent = ({
  image,
  shapeProps,
  id,
  isSelected,
  onSelect,
  handleDragStart,
  handleDragEnd,
  onChange,
  handleOnDelete,
}) => {
  // creating image based on its src
  const [img] = useImage(image?.src);
  const shapeRef = useRef();
  const transformRef = useRef();

  // if selected create box around the image to allow performing resizes
  useEffect(() => {
    if (isSelected) {
      transformRef.current.nodes([shapeRef.current]);
      transformRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  // called when performed resize
  const handleTransformOnEnd = (e) => {
    // node - reference to image
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    node.scaleX(1);
    node.scaleY(1);
    node.width(Math.max(5, node.width() * scaleX));
    node.height(Math.max(node.height() * scaleY));
    onChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: node.width(),
      height: node.height(),
    });
  };

  const handleOnDrop = (e) => {};
  return (
    <Fragment>
      <Image
        image={img}
        id={id}
        draggable
        onDrop={handleOnDrop}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        shadowColor="black"
        shadowBlur={10}
        shadowOffsetX={0}
        shadowOffsetY={4}
        shadowOpacity={0.6}
        onTransformEnd={handleTransformOnEnd}
      />
      {isSelected && (
        // when selected it creates box around the image to perform resizes
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
          zIndex={500}
        >
          <Path
            fill="black"
            x={-30}
            y={-30}
            data="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            onClick={() => handleOnDelete(img.src)}
          />
        </Transformer>
      )}
    </Fragment>
  );
};

export default ImageComponent;
