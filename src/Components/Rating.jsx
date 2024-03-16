import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Rating(props) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fillStar = props.rating > Number(4.5) ? 5 : 4;
    const newStars = Array(props.stars)
      .fill(0)
      .map((_, index) => {
        return index < fillStar ? 1 : 0;
      });
    setStars(newStars);
  }, [props.rating, props.stars]);

  return (
    <div>
      {stars.map((_, index) => (
        <span
          key={`${props.parentIndex}-${index}`}
          className={`fa fa-star ${stars[index] === 1 ? "checked" : ""}`}
        ></span>
      ))}
    </div>
  );
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  parentIndex: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  stars: 5,
};
