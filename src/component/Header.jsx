import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <div className="d-flex align-items-center">
        <img
          alt=""
          src="https://robohash.org/d90f0d10d37800a5d7f5e1dc58634e47?set=set4&bgset=&size=400x400"
          className="rounded-circle me-2"
          style={{ width: '50px', height: '50px' }}
        />
        <span>Isabella Karibian</span>
      </div>
      <div className="checkout-container">
        <Button variant="primary">
          <i className="shop icon"></i> Checkout
        </Button>
      </div>
    </div>
  );
};

export default Header;
