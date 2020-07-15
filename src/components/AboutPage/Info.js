import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/storeBcg.jpeg';
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3">
            <img
              src={aboutBcg}
              alt="about"
              className="img-fluid img-thumbnail"
              style={{ background: 'var(--primaryColor)' }}
            />
          </div>
          <div className="col-10 col-md-6 mx-auto my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              laborum, omnis voluptatibus ea amet illum aperiam possimus dolores
              minus earum!
            </p>
            <p className="text-lead text-muted 3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              laborum, omnis voluptatibus ea amet illum aperiam possimus dolores
              minus earum!
            </p>
            <button
              type="button"
              className="main-link"
              style={{ marginTop: '2rem' }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
