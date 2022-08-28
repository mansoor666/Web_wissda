import React from "react";
import { Link, NavLink } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import CountUp from "react-countup";
import Progressbar from "../Components/Prograss_bar.js";

function Sub_Services() {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}

      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            {/* <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p> */}
          </div>

          <div className="row">
            {/* <div className="col-12 col-sm-8 col-md-6 col-lg-4"> */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-md-0">
              <div className="card">
                <Link to="services/ProfessionalServices">
                  <img
                    className="card-img-top"
                    src="/assets/img/Service/small/Professonal_services_M.png"
                    alt="Bologna"
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="services/ProfessionalServices">
                      Professional Services
                    </Link>
                  </h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Emilia-Romagna Region, Italy
                  </h6>
                  <p className="card-text">
                    It is the seventh most populous city in Italy, at the heart
                    of a metropolitan area of about one million people.{" "}
                  </p>
                  <Link
                    to="services/ProfessionalServices"
                    className="card-link"
                  >
                    Read More
                  </Link>
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-md-0">
              <div className="card">
                <Link to="services/GRC">
                  <img
                    className="card-img-top"
                    src="/assets/img/Service/small/C_RT_M.png"
                    alt="Bologna"
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="services/GRC">
                      Compliance and Risk Transformation
                    </Link>
                  </h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Emilia-Romagna Region, Italy
                  </h6>
                  <p className="card-text">
                    It is the seventh most populous city in Italy, at the heart
                    of a metropolitan area of about one million people.{" "}
                  </p>
                  <Link to="services/GRC" className="card-link">
                    Read More
                  </Link>
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="card">
                <Link to="services/Cyber_Security">
                  <img
                    className="card-img-top"
                    src="/assets/img/Service/small/Cyber_Security_M.png"
                    alt="Bologna"
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="services/Cyber_Security">Cyber Security</Link>
                  </h4>
                  <br></br>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Emilia-Romagna Region, Italy
                  </h6>
                  <p className="card-text">
                    It is the seventh most populous city in Italy, at the heart
                    of a metropolitan area of about one million people.{" "}
                  </p>
                  <Link to="services/Cyber_Security" className="card-link">
                    Read More
                  </Link>
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="card">
                <Link to="services/Data_Solutions">
                  <img
                    className="card-img-top"
                    src="/assets/img/Service/small/Data-Analytics_M.png"
                    alt="Bologna"
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="services/Data_Solutions">Data and Analytics</Link>
                  </h4>
                  <br></br>
                  {/* <h6 className="card-subtitle mb-2 text-muted">
                      Emilia-Romagna Region, Italy
                    </h6> */}
                  <p className="card-text">
                    Create financial and reputational value through a
                    forward-looking, proactive approach to risk management and
                    compliance.
                  </p>
                  <Link to="services/Data_Solutions" className="card-link">
                    Read More
                  </Link>
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
            </div>
          </div>
          {/* <Sub_Services /> */}
          {/* <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4><a href>Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4><a href>Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4><a href>Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4><a href>Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow" /></div>
              <h4><a href>Dele cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch" /></div>
              <h4><a href>Divera don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </section>
      {/* End Services Section */}
      <section id="counts" className="counts">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <CountUp
                  className="purecounter"
                  start={0}
                  end={232}
                  duration={5}
                />
                <p>
                  <strong>Happy Clients</strong> consequuntur quae qui deca rode
                </p>
                {/* <a href="#">Find out more »</a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <CountUp
                  className="purecounter"
                  start={0}
                  end={100}
                  duration={5}
                />
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut numquam
                  delectus
                </p>
                {/* <a href="#">Find out more »</a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-headset" />
                <CountUp
                  className="purecounter"
                  start={0}
                  end={1463}
                  duration={5}
                />
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat. Aliquam
                  ratione
                </p>
                {/* <a href="#">Find out more »</a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-people" />
                <CountUp
                  className="purecounter"
                  start={0}
                  end={15}
                  duration={5}
                />
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor molestiae
                  doloribu
                </p>
                {/* <a href="#">Find out more »</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Our Skills Section ======= */}
      {/* <section id="skills" className="skills">
    <div className="container">
      <div className="section-title">
        <h2>Our Skills</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img src="/assets/img/skills-img.jpg" className="img-fluid" alt />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content">
          <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt direna past reda
          </p>
          <div className="skills-content">

          <Progressbar  progress="0" height={100} skill="HTML" />
          <Progressbar  progress="90" height={90} skill="CSS" />
          <Progressbar  progress="75" height={75} skill="JAVASCRIPT" />
          <Progressbar  progress="30" height={30} skill="PHOTOSHOP" />
             {/* <div className="progress"> */}

      {/* <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
              <Progressbar  progress="30" height={30} skill="HTML" />
             {/* <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
              </div> */}
      {/* <Progressbar  progress="30" height={30} /> */}
      {/* </div>
             </div>
            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div> */}
      {/* </div>
        </div>
      </div> */}
      {/* </div> */}
      {/* </section>End Our Skills Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-item">
                <img
                  src="/assets/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item mt-4 mt-lg-0">
                <img
                  src="/assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item mt-4">
                <img
                  src="/assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item mt-4">
                <img
                  src="/assets/img/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item mt-4">
                <img
                  src="/assets/img/testimonials/testimonials-5.jpg"
                  className="testimonial-img"
                  alt
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item mt-4">
                <img
                  src="/assets/img/testimonials/testimonials-6.jpg"
                  className="testimonial-img"
                  alt
                />
                <h3>Emily Harison</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Eius ipsam praesentium dolor quaerat inventore rerum odio.
                  Quos laudantium adipisci eius. Accusamus qui iste cupiditate
                  sed temporibus est aspernatur. Sequi officiis ea et quia
                  quidem.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sub_Services;
