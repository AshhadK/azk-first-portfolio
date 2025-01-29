import React from "react";

const Icons = (props) => {
  const renderImages = (item) => {
    if (
      item.wordpressImages &&
      item.wordpressImages.length > 0 &&
      props.name === "The-Datayard"
    ) {
      return item.wordpressImages.map((imageUrl, imageIndex) => (
        <img
          className="image-style"
          key={imageIndex}
          src={imageUrl}
          alt={` ${imageIndex + 1}`}
        />
      ));
    } else {
      return item.images.map((imageUrl, imageIndex) => (
        <img
          className="image-style"
          key={imageIndex}
          src={imageUrl}
          alt={` ${imageIndex + 1}`}
        />
      ));
    }
  };
  return <div className="container-style mt-5">{renderImages(props.item)}</div>;
};

export default Icons;
