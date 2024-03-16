import { useEffect, useState } from "react";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products");
        const jsonData = await resp.json();
        jsonData.products.forEach(async (element) => {
          element.qty = 1;
          element.discount = await calculateDiscount(element);
          element.finalAmt = await calculateFinalAmt(element);
        });
        await setProducts([...jsonData.products]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const calculateDiscount = async ({ price, discountPercentage }) => {
    const mrp = price;
    const disPercentage = discountPercentage;
    return (mrp * (disPercentage / 100)).toFixed(2);
  };

  const calculateFinalAmt = ({ price, discount }) => {
     return (price - discount).toFixed(2);
    // const number = price - discount;
    // const roundedNumber = number.toFixed(2);
    // console.log(roundedNumber)
    // return roundedNumber;
  };

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
