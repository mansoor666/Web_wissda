import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return alert("Please fill email, subject and message");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        name,
        email,
        subject,
        message,
      });
      setLoading(false);
      alert.success(data.message);
    } catch (err) {
      setLoading(false);
      console.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  // const sentEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_2s0y9br",
  //       "template_r7a0lyi",
  //       e.target,
  //       "user_vbHRyRpUp6amfRwEb7NKP"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       alert("Email sent successfully..........!");
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Contact</li>
          </ol>
          <h2>Contact</h2>
        </div>
      </section>
      {/* End Breadcrumbs */}
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 m-0">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope" />
                <h3>Email Us</h3>
                <p>info@wissda.com</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 m-0">
              <div className="info-box  mb-4">
                <i className="bx bx-map" />
                <h3>Wissda Incorporation, United States</h3>
                <p>#101 Hudson Street, Jersey City, NJ-07302</p>
              </div>
            </div>
            <div className="col-lg-6 m-0">
              <form
                action="forms"
                method="post"
                role="form"
                className="php-email-form"
                onSubmit={submitHandler}
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    defaultValue={""}
                    onChange={(e) => setMessage(e.target.value)}
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
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-md-6 m-0 ">
              <div className="info-box  mb-4">
                <i className="bx bx-map" />
                <h3>Wissda Consulting Private Limited, India </h3>
                <p>
                  #37/2 Chicago Avenue, Cunningham Rd, Bengaluru, Karnataka
                  560052
                </p>
              </div>
            </div>

            {/* <div className="col-lg-6 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-map" />
                <h3>Wissda Incorporation, United States</h3>
                <p>#1423,115 Morris St, Jersey City, NJ-07302</p>
              </div>
              <div className="col-lg-12 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.9774795786!2d77.5937472!3d12.9881952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x981de6508a9c2c8c!2sWissda%20Consulting%20Private%20Limited!5e0!3m2!1sen!2sin!4v1644563673715!5m2!1sen!2sin"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 384 }}
                  allowFullScreen
                />
              </div>
            </div> */}

            {/* <div className="col-lg-6 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-map" />
                <h3>Wissda Consulting Private Limited, India </h3>
                <p>
                  #37/2 Chicago Avenue, Cunningham Rd, Bengaluru, Karnataka
                  560052
                </p>
              </div>
              <div className="col-lg-12 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.9774795786!2d77.5937472!3d12.9881952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x981de6508a9c2c8c!2sWissda%20Consulting%20Private%20Limited!5e0!3m2!1sen!2sin!4v1644563673715!5m2!1sen!2sin"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 384 }}
                  allowFullScreen
                />
              </div>
            </div> */}

            {/* <div className='col-lg-6 col-md-6 mt-4'>
              <div className="info-box-socialmedia  mb-6">
                <i className="bx bx-envelope" />
                <span>Fallow Us
                <span>info@wissda.com</span></span>
              </div>
              </div>
              <div className='col-lg-6 col-md-6 mt-4'>
              <div className="social-links mt-3">
                        <Link to="#" className="twitter"><i className="bx bxl-twitter" /></Link>
                        <Link to="#" className="facebook"><i className="bx bxl-facebook" /></Link>
                        <Link to="#" className="instagram"><i className="bx bxl-instagram" /></Link>
                        <Link to="#" className="google-plus"><i className="bx bxl-skype" /></Link>
                        <Link to="#" className="linkedin"><i className="bx bxl-linkedin" /></Link>
                    </div>
                </div> */}

            {/* <div className="col-lg-6 col-md-6"> */}
            {/* <div className="info-box col-lg-4 mb-4">
                  <i className="bx bx-map" />
                  <h3>Our Address</h3>
                  <p>37/2 Chicago Avenue,
                    Cunningham Rd,
                    Opposite Fortis Hospital,
                    Bengaluru, Karnataka 560052
                  </p>
                  </div>
                  <div className="info-box col-lg-4 mb-4">
                  <i className="bx bx-map" />
                  <h3>Our Address</h3>
                  <p>37/2 Chicago Avenue,
                    Cunningham Rd,
                    Opposite Fortis Hospital,
                    Bengaluru, Karnataka 560052
                  </p> */}
            {/* <div className="info-box  mb-4">
                  <i className="bx bx-map" />
                  <h3>Email Us</h3>
                  <p>info@wissda.com</p>
                </div>
                <div className="info-box  mb-4">
                  <i className="bx bx-envelope" />
                  <h3>Email Us</h3>
                  <p>info@wissda.com</p>
                </div>
              </div> */}
            {/* <div className="col-lg-12 col-md-6 mt-4">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope" />
                <h3>Email Us</h3>
                <p>info@wissda.com</p>
              </div>
            </div> */}
            {/* <div className="col-lg-6 col-md-6 mt-4">
                <div className="info-box  mb-4">
                  <i className="bx bx-phone-call" />
                  <h3>Call Us</h3>
                  <p>+ 080-29609375</p>
                </div>
              </div> */}

            {/* <div className="col-lg-12">
              <form
                action="forms"
                method="post"
                role="form"
                className="php-email-form"
                onSubmit={sentEmail}
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
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
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
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
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </main>
  );
}
