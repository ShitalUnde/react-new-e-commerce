import { Card, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "./Rating";
import PropTypes from "prop-types";
import ImageSlider from "./ImageSlider";
import MyDropdown from "./MyDropdown";

function Product({ product, parentIndex }) {
  const getQtyArr = () => {
    let arr = [];
    for (let index = 0; index < 10; index++) {
      arr.push(index + 1);
    }
    return arr;
  };
  
  return (
    <Card style={{ height: "100%" }}>
      <Card.Header className="d-flex justify-content-between fw-bold">
        <p className="">{product.title}</p>
        {product.rating && (
          <Rating parentIndex={parentIndex} rating={product.rating} />
        )}
      </Card.Header>
      <Card.Body>
        <ImageSlider images={product.images} />
        <Card.Subtitle className="mt-2 text-muted">
          {product.description}
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {product.discountPercentage > 0 ? (
            <>
              <p>
                M.R.P.: <s className="text-danger"> &#8377;{product.price}</s>
              </p>
              <p>
                Deal of the day:
                <span className="text-danger"> &#8377;{product.finalAmt}</span>
              </p>
              <p className="text-danger">
                You Save : &#8377;{product.discount} (
                {product.discountPercentage}%)
              </p>
            </>
          ) : (
            <p className="text-danger">
              Price: <span> &#8377;{product.price}</span>
            </p>
          )}
        </ListGroup.Item>

        <ListGroup.Item>
          <p
            className={`${
              product.stock > 0 ? "text-success" : "text-danger"
            } fw-bold`}
          >
            {product.stock > 0 ? "In Stock" : "Out of stock"}
          </p>
          <MyDropdown
            product={product}
            value={product.qty}
            data={getQtyArr()}
          />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="warning" size="sm" className="w-100 mb-2">
          Add to Cart
        </Button>
        <Button variant="primary" size="sm" className="w-100">
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.object.isRequired,
  parentIndex: PropTypes.number.isRequired,
};
