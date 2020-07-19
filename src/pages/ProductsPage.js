import React from 'react';
import Products from '../components/ProductsPage/products';
import Hero from '../components/Hero';
import productsBcg from '../images/productsBcg.jpeg';
export default function ProductsPage() {
  return (
    <React.Fragment>
      <Hero img={productsBcg} />
      <Products />
    </React.Fragment>
  );
}
