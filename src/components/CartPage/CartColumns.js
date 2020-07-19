import React from 'react';

export default function CartColumns() {
  return (
    <section className="container-fluid text-center my-5 d-none d-lg-block">
      <div className="row">
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </section>
  );
}
