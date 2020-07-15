import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { ProductConsumer } from '../context/context';
import styled from 'styled-components';
import logo from '../images/logo.svg';

export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleCart, handleSidebar } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <AiOutlineBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="tech store logo" />
              <div className="nav-cart">
                <TiShoppingCart className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 2rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.95rem;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
