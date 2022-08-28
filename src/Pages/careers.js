import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import CarrerImage from "/assets/img/blog/staffing-image.png";
// import CarrerImage from "../img/blog/Careers.jpge";
import "../Pages/careers.css";
import CarrerImage from "../img/Careers_page/AdobeStock_228025103.jpeg";

import Testimonials from "../Components/Testimonials";

function Careers() {
  useEffect(() => {
    const access_token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUwNTU1LCJ2ZXJzaW9uIjoxLCJ0eXBlIjoid2lkZ2V0VG9rZW4iLCJpYXQiOjE2NDE5MTE2NzB9.4-p2v_0JjnLPC3ihWMMSQmQq7Ck3JqfftJu4tOlNWyg";
    const config = {
      token: access_token,
      companyId: "5dfcaa04d5fff4001f63bd8a",

      selector: "#widget",
    };
    const myWidget = window.MyLibrary.default.widgets.careerWidget.new(config);
    myWidget.render({ arg: "00001" });
  });
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Careers</li>
          </ol>
          <h2>Careers</h2>
        </div>
      </section>
      <section>
        <div class="hero-container">
          <img
            src={CarrerImage}
            alt
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
              padding: "10px",
            }}
          />
        </div>
      </section>
      <Testimonials />

      {/* <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Employee speaks</h2> */}
      {/* <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
      {/* </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-item"></div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact" className="contact">
        <div className="container ">
          <div className="info-box  mb-4">
            <div className="row justify-content-center ">
              <div
                className="wigtes-career col-lg-5 col-md-6 justify-content-center "
                style={{}}
              >
                <div
                  // className="justify-content-center"
                  id="widget"
                  style={{
                    width: "100%",
                    height: "760px",
                    overflowY: "scroll",
                    backgroundColor: "white",
                    paddingRight: "10px",
                  }}
                >
                  {" "}
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mt-5 justify-content-center ">
                <h1 style={{ fontSize: "100%" }}>
                  We are always looking for new talent to be part of our team.
                </h1>
                <h3>Submit your CV</h3>
                <form
                  action="forms"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="Applied Position"
                      id="Applied Position"
                      placeholder="Applied Position"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      placeholder="Updated Resume"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={7}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Submit Application </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;
