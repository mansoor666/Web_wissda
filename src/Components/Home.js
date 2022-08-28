import React from "react";
import "react-awesome-slider/dist/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Clients from "../Pages/Clients";
import Card from "react-animated-3d-card";
import { Link, NavLink } from "react-router-dom";
import Sub_Services from "../Pages/Services";
import patners from "../Pages/Services-pages/sub-services/Patners/Dynamic Image 1.png";
import slide_01 from "../img/Main_banners/Slide_01.jpg";
import slide_02 from "../img/Main_banners/Slide_02.jpeg";
import slide_03 from "../img/Main_banners/Slide_03.jpg";
import professionalservices from "../img/sevices/professionalservices.jpeg";
import Esg from "../img/sevices/ESG Home Page Icon.jpg";
import complianceRisktransformation from "../img/sevices/Compliance&Risk-transformation.jpeg";
import cybersecurity from "../img/sevices/Cyber-security.jpeg";
import dataanalytics from "../img/sevices/Data&analytics.jpeg";

function Home() {
  // const style = {
  //   "@media (max-width: 1000px)": {
  //     height: "50%",
  //     width: "50%",
  //   },
  //   // Adding media query..
  //   "@media (max-width: 500px)": {
  //     height: "100%",
  //     width: "100%",
  //   },
  //   "@media (max-width: 700px)": {
  //     height: "50%",
  //     width: "50%",
  //   },
  // };
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <Carousel fade={true} verticalMode={true}>
              <Carousel.Item interval={2500}>
                {/* <img
                  style={{ height: "100%", width: "100%" }}
                  className="d-block"
                  src="/assets/img/slide/rfrr.jpg"
                  alt="Image One"
                /> */}
                <img
                  // style={style}
                  style={{ height: "100%", width: "100%", opacity: "0.5" }}
                  className="d-block"
                  src={slide_01}
                  alt="Image One"
                />
                <div className="carousel-container">
                  <Carousel.Caption className="carousel-content">
                    <h2
                      style={{ color: "#ffffff" }}
                      className="animate__animated animate__fadeInRight"
                    >
                      Transforming business through automation and Innovation{" "}
                    </h2>
                    {/* <h2 className="animate__animated animate__fadeInDown">Information. <span>Innovation.</span><span className='h2'>Transformation</span></h2> */}
                    {/* <p className="animate__animated animate__fadeInLeft">Transforming business through automation and Innovation</p> */}
                    <Link
                      to="services/ProfessionalServices"
                      className="btn-get-started animate__animated animate__fadeInRight"
                    >
                      Read More
                    </Link>
                    <p className="animate__animated animate__fadeInLeft">
                      Information. <span>Innovation.</span>
                      <span className="h2">Transformation</span>
                    </p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                {/* <img
                  className="d-block"
                  src="/assets/img/slide/bg1.png"
                  alt="Image Two"
                /> */}
                <img
                  style={{ height: "100%", width: "100%", opacity: "0.5" }}
                  className="d-block"
                  src={slide_02}
                  alt="Image Two"
                />
                <Carousel.Caption className="carousel-content">
                  <h2 className="animate__animated animate__fadeInRight">
                    Empowering clients with intelligent solutions
                  </h2>
                  {/* <h2 className="animate__animated animate__fadeInDown">Information. <span>Innovation.</span><span className='h2'>Transformation</span></h2> */}
                  {/* <p className="animate__animated animate__fadeInRight">Empowering clients with intelligent solutions</p> */}
                  <Link
                    to="services/ProfessionalServices"
                    className="btn-get-started animate__animated animate__fadeInRight"
                  >
                    Read More
                  </Link>
                  <p className="animate__animated animate__fadeInLeft">
                    Information. <span>Innovation.</span>
                    <span className="h2">Transformation</span>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                {/* <img
                  className="b-block"
                  src="/assets/img/slide/1-1.png"
                  alt="Image Three"
                /> */}
                <img
                  style={{ height: "100%", width: "100%", opacity: "0.5" }}
                  // style={styles}
                  className="d-block"
                  src={slide_03}
                  alt="Image Three"
                />
                <Carousel.Caption className="carousel-content">
                  <h2 className="animate__animated animate__fadeInRight">
                    Managing and Mitigating risk through Integrated risk
                    management
                  </h2>
                  {/* <h2 className="animate__animated animate__fadeInDown">Information. <span>Innovation.</span><span className='h2'>Transformation</span></h2> */}
                  {/* <p className="animate__animated animate__fadeInRight">Managing and Mitigating risk through Integrated risk management</p> */}
                  <Link
                    to="services/ProfessionalServices"
                    className="btn-get-started animate__animated animate__fadeInRight"
                  >
                    Read More
                  </Link>
                  <p className="animate__animated animate__fadeInLeft">
                    Information. <span>Innovation.</span>
                    <span className="h2">Transformation</span>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      {/* <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          {/* <!-- Slide 1 --> */}
      {/* <div class="carousel-item active" style="background: url(assets/img/slide/slide-1.jpg)">
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Eterna</span></h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
          </div> */}

      {/* <!-- Slide 2 --> */}
      {/* <div class="carousel-item" style="background: url(assets/img/slide/slide-2.jpg)">
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
          </div> */}

      {/* <!-- Slide 3 --> */}
      {/* <div class="carousel-item" style="background: url(assets/img/slide/slide-3.jpg)">
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div> */}
      {/* </section> */}

      <main id="main">
        {/* ======= Featured Section ======= */}
        {/* <section id="featured" className="featured"> */}
        {/*<div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="icon-box">
              <i className="bi bi-card-checklist" />
              <h3><a href>Lorem Ipsum</a></h3>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-bar-chart" />
              <h3><a href>Dolor Sitema</a></h3>
              <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-binoculars" />
              <h3><a href>Sed ut perspiciatis</a></h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
        </div>
      </div>
    </section>End Featured Section */}
        {/* </section> */}
        {/* ======= About Section ======= */}

        <section id="about" className="about">
          <div className="container" style={{ marginTop: "10%" }}>
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-md-10">
                <img src="/assets/img/about.jpg" className="img-fluid" alt />
              </div>
              <div className="col-lg-6 pt-5 content">
                {/* <h3>About Wissda</h3> */}
                <p
                  className="fst-italic"
                  style={{
                    textAlign: "justify",
                  }}
                >
                  We are “Problem Solvers”, we look for possibilities, solutions
                  and distinguish signal from the noise. We are curious domain
                  experts, Engineers, Developers, Data Nerds, Talent Partners,
                  Learners and Dreamers. We are
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" />
                    Transforming business through automation and Innovation.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    Empowering Clients with Intelligent Technical, Business and
                    Data Solutions.
                  </li>
                  <li
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    <i className="bi bi-check-circle" />
                    Managing and Mitigating risk through Integrated risk
                    management
                  </li>
                </ul>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "15px",
                  }}
                >
                  We are an execution focused, quality obsessed and result
                  oriented Consulting Organization. Our mission is to help our
                  clients solve their most critical business challenges by
                  providing highest quality, pragmatic and scalable solutions
                  our core principles of Transparency, Integrity,
                  Accountability, Excellence, and Continuous Improvement guide
                  us in our everyday work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* End About Section */}
        {/* End About Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>What We Do</h2>
              {/* <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p> */}
            </div>

            <div className="row">
              {/* <div className="col-12 col-sm-8 col-md-6 col-lg-4"> */}
              {/* <div className=" col-md-6  align-items-stretch mt-4 mt-lg-0"> */}
              <div
                className="cards col-md-6 col-lg-2 col-xl-2 col-sm-12 col-12 col-xxl-2"
                style={{ width: "225px" }}
                // style={{
                //   border: "1px solid",
                //   padding: "10px",
                //   boxShadow: "5px 10px #888888",
                //   backgroundColor: "gray",
                //   color: "white",
                // }}
              >
                <Link to="services/ProfessionalServices">
                  <img
                    style={{ height: "69%" }}
                    className="card-img-top"
                    src={professionalservices}
                    alt="Professional Services"
                  />
                </Link>
                <div className="card-body text-center my-auto">
                  <h4
                    className="card-title "
                    style={{
                      color: "inherit",
                      padding: "50px, 0, 0, 0",
                      fontSize: "18px",
                    }}
                  >
                    <Link to="services/ProfessionalServices">
                      Professional<br></br> Services
                    </Link>
                  </h4>
                  {/* <h6 className="card-subtitle mb-2 text-muted">
                      Emilia-Romagna Region, Italy
                    </h6> */}
                  {/* <p className="card-text">
                      It is the seventh most populous city in Italy, at the
                      heart of a metropolitan area of about one million people.{" "}
                    </p> */}
                  {/* <Link
                      to="services/ProfessionalServices"
                      className="card-link"
                    >
                      Read More
                    </Link> */}
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
              {/* </div> */}

              {/* <div className="col-md-6   mt-4 mt-lg-0"> */}
              <div
                className="cards col-md-6 col-lg-2 col-xl-2 col-sm-12 col-12 col-xxl-2"
                style={{ width: "225px" }}
                // style={{
                //   border: "1px solid",
                //   padding: "10px",
                //   boxShadow: "5px 10px #888888",
                //   backgroundColor: "gray",
                //   color: "white",
                // }}
              >
                <Link to="services/ESG">
                  <img
                    style={{ height: "69%" }}
                    className="card-img-top"
                    src={Esg}
                    alt="ESG Services"
                  />
                </Link>
                <div className="card-body text-center my-auto">
                  <h4
                    className="card-title "
                    style={{
                      color: "inherit",
                      padding: "50px, 0, 0, 0",
                      fontSize: "18px",
                    }}
                  >
                    <Link to="services/ESG">
                      Environment , Social & Governance <br></br>
                    </Link>
                  </h4>
                  {/* <h6 className="card-subtitle mb-2 text-muted">
                      Emilia-Romagna Region, Italy
                    </h6> */}
                  {/* <p className="card-text">
                      It is the seventh most populous city in Italy, at the
                      heart of a metropolitan area of about one million people.{" "}
                    </p> */}
                  {/* <Link
                      to="services/ProfessionalServices"
                      className="card-link"
                    >
                      Read More
                    </Link> */}
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
              {/* </div> */}

              {/* <div className=" col-md-6  mt-4 mt-lg-0"> */}
              <div
                className="cards col-md-6 col-lg-2 col-xl-2 col-sm-12 col-12 col-xxl-2"
                style={{ width: "225px" }}
                // style={{
                //   border: "1px solid",
                //   padding: "10px",
                //   boxShadow: "5px 10px #888888",
                // }}
              >
                <Link to="services/GRC">
                  <img
                    style={{ height: "69%" }}
                    className="card-img-top"
                    src={complianceRisktransformation}
                    alt="Compliance & Risk Transformation"
                  />
                </Link>
                <div className="card-body text-center my-auto">
                  <h4
                    className="card-title"
                    style={{
                      color: "inherit",
                      padding: "50px, 0, 0, 0",
                      fontSize: "18px",
                    }}
                  >
                    <Link to="services/GRC">
                      Compliance & Risk Transformation
                    </Link>
                  </h4>
                  {/* <h6 className="card-subtitle mb-2 text-muted">
                      Emilia-Romagna Region, Italy
                    </h6>
                    <p className="card-text">
                      It is the seventh most populous city in Italy, at the
                      heart of a metropolitan area of about one million people.{" "}
                    </p>
                    <Link to="services/GRC" className="card-link">
                      Read More
                    </Link> */}
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
              {/* </div> */}
              {/* <div className=" col-md-6   mt-4 mt-lg-0"> */}
              <div
                className="cards col-md-6 col-lg-2 col-xl-2 col-sm-12 col-12 col-xxl-2"
                style={{ width: "225px" }}
                // style={{
                //   border: "1px solid",
                //   padding: "10px",
                //   boxShadow: "5px 10px #888888",
                // }}
              >
                <Link to="services/Cyber_Security">
                  <img
                    style={{ height: "69%" }}
                    className="card-img-top"
                    src={cybersecurity}
                    alt="Cyber_Security"
                  />
                </Link>
                <div className="card-body text-center my-auto">
                  <h4
                    className="card-title"
                    style={{
                      color: "inherit",
                      padding: "50px, 0, 0, 0",
                      fontSize: "18px",
                    }}
                  >
                    <Link to="services/Cyber_Security">
                      Cyber <br /> Security
                    </Link>
                  </h4>
                  {/* <br></br>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Emilia-Romagna Region, Italy
                    </h6>
                    <p className="card-text">
                      It is the seventh most populous city in Italy, at the
                      heart of a metropolitan area of about one million people.{" "}
                    </p>
                    <Link to="services/Cyber_Security" className="card-link">
                      Read More
                    </Link> */}
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
              {/* </div> */}
              {/* <div className="col-md-6  mt-4 mt-lg-0"> */}
              <div
                className="cards col-md-6 col-lg-2 col-xl-2 col-sm-12 col-12 col-xxl-2"
                style={{ width: "225px" }}
                // style={{
                //   border: "1px solid",
                //   padding: "10px",
                //   boxShadow: "5px 10px #888888",
                // }}
              >
                <Link to="services/Data_Solutions">
                  <img
                    style={{ height: "69%" }}
                    className="card-img-top"
                    src={dataanalytics}
                    alt="Data&Analytics"
                  />
                </Link>
                <div className="card-body text-center my-auto">
                  <h4
                    className="card-title"
                    style={{
                      color: "inherit",
                      padding: "50px, 0, 0, 0",
                      fontSize: "18px",
                    }}
                  >
                    <Link to="services/Data_Solutions">
                      Data & <br />
                      Analytics
                    </Link>
                  </h4>
                  {/* <br></br>
                    {/* <h6 className="card-subtitle mb-2 text-muted">
                      Emilia-Romagna Region, Italy
                    </h6> */}
                  {/* <p className="card-text">
                      Create financial and reputational value through a
                      forward-looking, proactive approach to risk management and
                      compliance.
                    </p>
                    <Link to="services/Data_Solutions" className="card-link">
                      Read More
                    </Link> */}
                  {/* <a href="#" className="card-link">Read More</a> */}
                  {/* <a href="#" className="card-link">Book a Trip</a> */}
                </div>
              </div>
            </div>
            {/* </div> */}
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
        {/* ======= Clients Section ======= */}
        <section
          id="clients"
          className="clients"
          style={{
            paddingBottom: "10px",
          }}
        >
          <div className="container">
            <div className="section-title">
              <h2>Partners </h2>
              {/* <h1>wissda is the solution patners</h1> */}
              {/* <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p> */}

              <img
                // style={{ height: "225px", width: "100%" }}
                // style={styles}
                className="patners-image"
                src={patners}
                alt="Image Three"
              />
            </div>
            <div className="clients-slider swiper">
              <Clients />
            </div>
          </div>
        </section>
        {/* <section id="testimonials" className="testimonials">  
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
                <div
                  className="testimonial-item"
                  style={{ minHeight: "225px" }}
                >
                  <img
                    src="/assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt
                  />
                  <h3>Deepak Prasad</h3>
                  <h4>Software Engineer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    I have worked in Wissda Consulting pvt ltd as Software
                    Engineer. Overall the process of recruitment and onboarding
                    was very smooth. They provide the flexibility to choose the
                    clients to we want to work. Work atmosphere is quite good
                    and supportive management team. Overall recommended for
                    working here.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="testimonial-item mt-4 mt-lg-0"
                  style={{ minHeight: "225px" }}
                >
                  <img
                    src="/assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt
                  />
                  <h3>Rishab Dutta</h3>
                  <h4>IOS Developer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    I didn't really visit Wissda's office in Bangalore. My
                    interview was arranged via a phone call and all the
                    documents were processed online(something that I really
                    liked and it was pre-covid times). I used to get my salary
                    on time everytime. My HR used to call me often to ask about
                    my well being or any issues I might be facing at work. I
                    have worked with other consultants from various
                    organizations. Some were very displeased with their
                    consultancy. I am glad to say I didn't face any such
                    problems with Wissda..
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        {/* </section> */}
        {/* End Clients Section */}
        {/* <Clients /> */}
      </main>
    </div>
  );
}

export default Home;
