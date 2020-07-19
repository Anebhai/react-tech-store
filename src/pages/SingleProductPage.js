import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductImg from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../context/context';

export default function SingleProductPage() {
  return (
    <React.Fragment>
      <Hero img={singleProductImg} title="Single Product" />
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            return <h1>Product Loading....</h1>;
          } else {
            const {
              company,
              description,
              image,
              price,
              id,
              title,
            } = singleProduct;
            return (
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto  my-3">
                      <img
                        src={`../${image}`}
                        alt="single product"
                        className="image-fluid"
                      />
                    </div>
                    <div className="col-10 col-sm-8 col-md-6 mx-auto my-3">
                      <h5 className="text-title text-capitalize mb-4">
                        model :{title}
                      </h5>
                      <h5 className="text-muted text-capitalize mb-4">
                        Company : {company}
                      </h5>
                      <h5 className="text-main text-capitalize mb-4">
                        Price : &#8377;{price}
                      </h5>
                      <p className="text-capitalize text-title mt-3">
                        some info about product :
                      </p>
                      <p>{description}</p>
                      <button
                        type="button"
                        className="main-link"
                        style={{ margin: '0.75rem' }}
                        onClick={() => addToCart(id)}
                      >
                        add to cart
                      </button>
                      <Link
                        to="/products"
                        className="main-link"
                        style={{ margin: '0.75rem' }}
                      >
                        back to products
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}
