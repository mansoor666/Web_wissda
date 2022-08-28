import React from "react";
import Card from "react-animated-3d-card";
import "./C_Y.css";
import dabanner from "../Services-pages/services_Banners/d&a-banner.jpg";
// import SideBanner from "../Services-pages/sub-services/Integrated-Risk- management.png";
import BusinessIntelligence from "./sub-services/Data_Analytics/new images/New Data Images/Business Intelligence-1.jpg";
import DataIntegration from "./sub-services/Data_Analytics/new images/New Data Images/Data Integration-1.jpg";
import DataManagement from "./sub-services/Data_Analytics/new images/New Data Images/Data Management-1.jpg";
import DataMining from "./sub-services/Data_Analytics/Data Mining-1.jpeg";
import DataScience from "./sub-services/Data_Analytics/new images/New Data Images/Data Science-1.jpg";
import MI_AI from "./sub-services/Data_Analytics/new images/New Data Images/Machine Learning & AI-1.jpg";
import "./DataAnalytic.css";

var SideBanner = require(`../Services-pages/sub-services/Integrated-Risk- management.png`);
function DataAnalytics() {
  return (
    <>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 entries">
              <article className="entry">
                <div
                  className="entry-img"
                  style={{ backgroundSize: "100% 100%" }}
                >
                  <img src={dabanner} alt className="img-fluid" />
                </div>
                {/* <h2 className="entry-title">
                  <a>Data and Analytics </a>
                </h2> */}
                <div className="card lg-6 mt-lg-5">
                  <div className="row g-0">
                    <div
                      className="col-lg-6"
                      style={{ maxWidth: "540px", padding: "10px" }}
                    >
                      <img
                        src={SideBanner}
                        alt
                        className="img-fluid sideBanner"
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h2 className="entry-title">
                          <a href="#">Data and Analytics </a>
                        </h2>
                        <div className="entry-content">
                          <p
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                            }}
                          >
                            Data is everywhere around us. It comes from various
                            sources and in multiple formats. The availability of
                            so much data can be a distracting if noise is not
                            differentiated from signal. We help our clients
                            utilize data as strategic & corporate asset by
                            helping them manage it and uncover valuable
                            information through data science solutions.
                          </p>
                          <p>
                            We help our clients extract insights from data to
                            solve business challenges and discover new
                            opportunities. We utilize data science to unlock the
                            potential of public and private data to identify new
                            information and patterns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry-content">
                  {/* <p>
                    Data is everywhere around us. It comes from various sources
                    and in multiple formats. The availability of so much data
                    can be a distracting if noise is not differentiated from
                    signal. We help our clients utilize data as strategic &
                    corporate asset by helping them manage it and uncover
                    valuable information through data science solutions.
                  </p>
                  <p>
                    We help our clients extract insights from data to solve
                    business challenges and discover new opportunities. We
                    utilize data science to unlock the potential of public and
                    private data to identify new information and patterns.
                  </p> */}
                  {/* <div className="read-more">
                <a href="blog-single.html">Read More</a>
              </div> */}
                </div>
              </article>
              {/* End blog entry */}
            </div>
            {/* End blog entries list */}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="datalist">
          <div className="row">
            <div className="col-lg-4 col-md-6 align-items">
              <div className="card-data">
                <div className="imgBx">
                  <img src={DataScience} alt="images" />
                </div>
                <div className="details">
                  <h2>
                    Data Science
                    <br />
                    {/* <span>Director</span> */}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-items">
              <div className="card-data">
                <div className="imgBx">
                  <img src={DataMining} alt="images" />
                </div>
                <div className="details">
                  <h2>
                    Data Mining
                    <br />
                    {/* <span>Producer</span> */}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-items">
              <div className="card-data">
                <div className="imgBx">
                  <img src={DataIntegration} alt="Data Integration Image" />
                </div>
                <div className="details">
                  <h2>
                    Data Integration
                    <br />
                    {/* <span>Actor</span> */}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-items">
              <div className="card-data">
                <div className="imgBx">
                  <img src={DataManagement} alt="DataManagement image" />
                </div>
                <div className="details">
                  <h2>
                    Data Management
                    <br />
                    {/* <span>Director</span> */}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-items">
              <div className="card-data">
                <div className="imgBx">
                  <img
                    src={BusinessIntelligence}
                    alt="BusinessIntelligence images"
                  />
                </div>
                <div className="details">
                  <h2>
                    Business Intelligence, Visulaization & Reporting
                    <br />
                    {/* <span>Producer</span> */}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-items">
              <div className="card-data">
                <div className="imgBx">
                  <img src={MI_AI} alt="MI_AI images" />
                </div>
                <div className="details">
                  <h2>
                    Artifical Intelligence & Machine learning
                    <br />
                    {/* <span>Actor</span> */}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* 


Data Science
Data Mining
Artifical Intelligence & Machine learning
Business Intelligence, Visulaization and Reporting
Data Management
Data Integration


*/}

      {/* <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 align-items">
              <div className="wrappers">
                <div className="cards-cy justify-content-center">
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Data</a>{" "}
                    </span>{" "}
                    <br />
                    <h1> Science</h1>
                  </h1>
                </div>
              </div> */}
      {/* <div className="icon-box"> */}
      {/* <div className="icon"> */}
      {/* <i className="bx bxl-dribbble" /> */}
      {/* </div> */}
      {/* <h4> */}
      {/* <a href>Data Science</a> */}
      {/* </h4> */}
      {/* <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p> */}
      {/* </div> */}
      {/* </div>
            <div className="col-lg-4 col-md-6  align-items mt-4 mt-md-0">
              <div className="wrappers">
                <div className="cards-cy justify-content-center">
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Data</a>{" "}
                    </span>{" "}
                    <br />
                    Mining
                  </h1>
                </div>
              </div>
            </div> */}
      {/* <div className="col-lg-4 col-md-6 align-items mt-4 mt-lg-0">
              <div className="wrappers">
                <div className="cards-cy justify-content-center">
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Data</a>{" "}
                    </span>{" "}
                    <br />
                    Integration
                  </h1>
                </div>
              </div> */}
      {/* <div className="icon-box">
                <h4>
                  <a href>Data Integration</a>
                </h4>
              </div> */}
      {/* </div> */}
      {/* <div className="col-lg-4 col-md-6  align-items-stretch ">
              <div className="wrappers">
                <div className="cards-cy justify-content-center">
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Data</a>{" "}
                    </span>{" "}
                    <br />
                    Management
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  "> */}
      {/* <div className="wrappers">
                <div className="cards-cy justify-content-center">
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Business Intelligence</a>{" "}
                    </span>
                    <br />
                    <span style={{ fontSize: "14px" }}>
                      visualization & Reporting
                    </span>
                  </h1>
                </div>
              </div>
            </div> */}
      {/* <div className="col-lg-4 col-md-6  align-items-stretch ">
              <div className="wrappers">
                <div className="cards-cy justify-content-center">
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Artifical Intelligence</a>{" "}
                    </span>{" "}
                    <br />
                    Machine learning
                  </h1>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div>
      </section> */}
    </>
  );
}

export default DataAnalytics;
