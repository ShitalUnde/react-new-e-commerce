import { useState, useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
// import { CartContext } from "../Context/CartContext";

function MyDropdown({ data = [], product, parentIndex }) {
  // const carts = useContext(CartContext);
  const [productData, updateProduct] = useState(product);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleItemClick = (item) => {
    let obj = { ...productData };
    obj.qty = item;
    updateProduct(obj);
    setAddedToCart(true);
  };

  useEffect(() => {
    if (addedToCart) {
      setAddedToCart(false); // Reset addedToCart state
    }
  }, [addedToCart, productData]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {productData.qty ? `Qty: ${productData.qty}` : "Select an item"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdown;

MyDropdown.propTypes = {
  data: PropTypes.array.isRequired,
  parentIndex: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};
