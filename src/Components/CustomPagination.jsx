import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

// import React from 'react'
// import PropTypes from 'prop-types'
useState
function CustomPagination(props) {
  // let active = 2;
  const [active, setActive] = useState(1)
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationTrigger = () => {
  }

  return (
    <div className="d-flex mt-2 justify-content-between">
      <div>Total </div>
      <Pagination onClick={(e) => paginationTrigger(e)} size="md">{items}</Pagination>
    </div>
  );
}

Pagination.propTypes = {};

export default CustomPagination;
