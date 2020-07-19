import React from 'react';
import { ProductConsumer } from '../../context/context';
import Title from '../../components/Title';
import Product from '../Product';
import ProductFilter from './ProductFilter';

export default function products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        console.log(value);

        return (
          <section className="py-5">
            <div className="conatainer">
              <Title title="our products" center />
              <ProductFilter />
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>

              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-center text-title">
                    Sorry,no items matched your search
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                  ))
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
