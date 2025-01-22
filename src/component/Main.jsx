import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const Item = ({
  data: {
    id,
    title = "No Title Available",
    thumbnail = "https://via.placeholder.com/150",
    price = 0,
    quantity = 0,
    total = 0,
    discountPercentage = 0,
    discountedTotal = 0,
  },
}) => {


  
  return (
    <Card className="my-3 p-2 rounded" style={{ maxWidth: '300px' }}>
      <Card.Img
        variant="top"
        src={thumbnail}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Price: ${price}</strong>
        </Card.Text>
        <Card.Text>
          Quantity: {quantity} <br />
          Total: ${total.toFixed(2)} <br />
          Discount: {discountPercentage.toFixed(2)}% <br />
          Discounted Total: ${discountedTotal.toFixed(2)} <br />
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          {id && <span className="text-muted">ID: {id}</span>}
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const Main = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <Item data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
