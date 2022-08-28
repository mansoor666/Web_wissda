import React from "react";
import Cybersecurity from "../Services-pages/Services-sub-images/ESG & New Comp/ESG Banner.jpg";
import cydersecuritybanner from "../Services-pages/Services-sub-images/ESG & New Comp/ESG Content - Left.jpg";
import EsgBelow from "./Services-sub-images/ESG & New Comp/ESG - Below Content.png";
function Esg() {
  return (
    <div>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 entries">
              <article className="entry">
                <div className="entry-img">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      marginTop: "-5rem",
                    }}
                    src={Cybersecurity}
                    alt
                    className="img-fluid"
                  />
                </div>
                {/* <h2 className="entry-title">
                  <a>CYBER SECURITY </a>
                </h2> */}

                {/* <div className="entry-meta">
              <ul>
                <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="blog-single.html">John Doe</a></li>
                <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="blog-single.html">12 Comments</a></li>
              </ul>
              

              </div> */}
                <div className="card lg-6 mt-lg-5">
                  <div className="row g-0">
                    <div
                      className="col-lg-6 col-sm-12 col-12"
                      style={{ maxWidth: "540px", padding: "10px" }}
                    >
                      <img
                        src={cydersecuritybanner}
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                      <div className="card-body">
                        <h2 className="entry-title">
                          <a>Environment , Social and Governance </a>
                        </h2>
                        <div className="entry-content">
                          <p
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                            }}
                          >
                            Environment , Social and Governance is a framework
                            that helps stakeholders understand how an
                            organization is managing risks and opportunities
                            related to environmental, social, and governance
                            criteria. ESG has evolved from historical movements
                            that focused on health and safety issues, pollution
                            reduction, and corporate philanthropy and has
                            changed how many investment and capital allocation
                            decisions are made. It has evolved into a major
                            component of any good corporate integrated risk
                            management strategy
                          </p>
                          <p
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                            }}
                          >
                            Wissda through its advisory services and vendor
                            software solutions can help develop a framework to
                            have visibility into ESG performance across a wide
                            network of corporate partners and suppliers. Our
                            solution facilitates communication, compliance, and
                            reporting throughout the organization, as well as
                            the extended supply chain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="entry-content">
                  {/* <div className="read-more">
                <a href="blog-single.html">Read More</a>
              </div> */}
                </div>
              </article>
              {/* End blog entry */}
            </div>
            {/* End blog entries list */}
          </div>
          <section
            id="services"
            style={{ padding: "0px" }}
            className="services"
          >
            <div className="container">
              <div className="row">
                <div className="ESG-content">
                  <h3 style={{ marginBottom: "40px" }}>
                    ESG Solution key Components:
                  </h3>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" /> Emissions Calculation
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Audit management
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Supplier Scorecards
                    </li>
                  </ul>
                </div>
                <div className="ESG-content">
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" /> Compliance Rule
                      Engine
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Dashboard & Analytics
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Reporting Templates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <img
          style={{
            height: "100%",
            width: "100%",
            padding: "10px",
            marginTop: "-5px",
            marginBottom: "90px",
          }}
          src={EsgBelow}
          className="img-fluid rounded-start"
          alt="..."
        />
      </section>
    </div>
  );
}

export default Esg;
