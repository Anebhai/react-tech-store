import React from 'react';
import { ProductConsumer } from '../../context/context';

export default function CartTotals() {
  return (
    <section className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className=" col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h3>subtotal : &#8377; {cartSubTotal} </h3>
                <h3>Tax : &#8377; {cartTax} </h3>
                <h3>total : &#8377; {cartTotal} </h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </section>
  );
}
