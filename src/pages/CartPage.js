import React from 'react';
import CartSection from '../components/CartPage/Cart';
import Hero from '../components/Hero';
import cartBcg from '../images/storeBcg.jpeg';

export default function CartPage() {
  return (
    <React.Fragment>
      <Hero img={cartBcg} />
      <CartSection />
    </React.Fragment>
  );
}
