import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context/context';

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          price,
          min,
          max,
          shipping,
          company,
          handleChange,
          storeProducts,
        } = value;
        let companies = new Set();
        companies.add('all');
        for (let product in storeProducts) {
          companies.add(storeProducts[product]['company']);
        }
        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleChange}
                    className="filter-item"
                  />
                </div>

                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    value={company}
                    onChange={handleChange}
                    id="company"
                    className="filter-item"
                  >
                    {companies.map((company, id) => {
                      return (
                        <option key={id} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price : <span>&#8377; {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={price}
                    id="price"
                    name="price"
                    onChange={handleChange}
                    className="filter-price"
                  />
                </div>
                {/* shipping section */}

                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    checked={shipping && true}
                    onChange={handleChange}
                  />
                </div>
                {/*  end of shipping section */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--primaryColor);
  }
`;
