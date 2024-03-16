import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";

function ImageSlider({ images = [] }) {
  const imageHeight = 200;
  return images.length > 0 ? (
    <Carousel slide={false} interval={null} data-bs-theme="dark">
      {images.map((imageSrc, index) => (
        <Carousel.Item key={index}>
          <img
            height={imageHeight}
            className="d-block w-100"
            src={imageSrc}
            alt=""
          />
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: `${imageHeight}px`,
      }}
    >
      <p className="fw-bold">No Images Available</p>
    </div>
  );
}

export default ImageSlider;

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
