import React from 'react';
import Title from '../../components/Title';

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 col-md-6 mx-auto my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/ane.iqbal@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Anees"
              />
            </div>
            {/*email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="ane.iqbal@gmailcom"
              />
            </div>
            {/*Subject */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Hello there my friend ' wish you abundance of PEACE '"
              ></textarea>
            </div>
            {/*Subject */}
            <div className="form-group mt-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
