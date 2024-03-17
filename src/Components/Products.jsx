import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

export default function Products() {
  const {products} = useContext(ProductsContext);

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {products &&
        products.map((el, index) => (
          <Col key={index}>
            <Product product={el} parentIndex={index} />
          </Col>
        ))}
    </Row>
  );
}
