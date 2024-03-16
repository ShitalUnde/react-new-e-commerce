import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

function MyDropdown({ data = [], value, product }) {
    // console.log(data)
  const [selectedItem, setSelectedItem] = useState(value);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedItem ? `Qty: ${selectedItem}` : "Select an item"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
            {item}
            <Dropdown.Divider />
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdown;

MyDropdown.propTypes = {
  data: PropTypes.array.isRequired,  
};



