import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg';
export default function DefaultPage() {
  return (
    <Hero img={defaultBcg} title="404">
      <h2 className="text-uppercase">page not found</h2>
      <Link to="/" className="main-link" style={{ marginTop: '2rem' }}>
        return home
      </Link>
    </Hero>
  );
}
