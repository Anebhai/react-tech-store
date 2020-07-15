import React, { Component } from 'react';
import { FaDolly, FaRedo, FaRupeeSign } from 'react-icons/fa';
import styled from 'styled-components';

class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: 'free shipping',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?',
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: '30 days return policy',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?',
      },
      {
        id: 3,
        icon: <FaRupeeSign />,
        title: 'secured payment',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?',
      },
    ],
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((item) => {
              return (
                <div
                  className="col-10 col-md-4 col-sm-6 mx-auto text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <div className="text-capitalize mt-3">{item.title}</div>
                  <p className="mt-3">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

export default Services;

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
