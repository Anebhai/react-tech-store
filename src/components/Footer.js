import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';

export default function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6 text-center">
                  <p className="text-capitalize">
                    copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reserved.
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map((item) => (
                    <a
                      href={item.url}
                      key={item.id}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    color: var(--mainWhite);
    font-size: 1.5rem;
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
