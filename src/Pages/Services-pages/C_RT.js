import React from "react";
// import { Link, NavLink, useParams } from "react-router-dom";
import randcbanner from "../Services-pages/services_Banners/r&c-banner.jpeg";
import GRC from "../Services-pages/Services-sub-images/Website Compressed/Edited AdobeStock_162242253.jpg";
import IRM from "../Services-pages/sub-services/IRM.jpeg";
import Risk from "../Services-pages/sub-services/Risk.jpeg";
import "./C_RT.css";
function C_RT() {
  return (
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 entries">
            <article className="entry">
              {/* <!-- Horizontal --> */}

              <div className="entry-img">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    // objectFit: "contain",
                  }}
                  src={randcbanner}
                  alt
                  className="img-fluid"
                />
              </div>
              {/* <h2 className="entry-title">
                <a>Compliance and Risk Transformation</a>
              </h2> */}
              <article>
                <div className="card lg-6">
                  <div className="row g-0">
                    <div className="col-lg-6" style={{ maxWidth: "540px" }}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          padding: "10px",
                        }}
                        src={IRM}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h2 className="entry-title">
                          <a>Integrated Risk management</a>
                        </h2>
                        {/* <h3 className="entry-title-h3">
                          Integrated Risk management
                        </h3> */}
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          Integrated Risk Management is a holistic approach to
                          manage and mitigate enterprise-wide risk events and
                          improve decision making through a streamlined and
                          collaborative process by connecting people,
                          technology, and data
                        </p>
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          To completely understand and evaluate current and
                          future risk, organizations need a comprehensive view
                          of risk across all internal functions and external
                          partners & entities
                        </p>
                        <p
                          style={{
                            marginBottom: "20px",
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          We help our clients to establish IRM framework and
                          implement processes and solutions to identify, assess,
                          respond, report and monitor enterprise-wide risks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "10px",
                    marginTop: "90px",
                    marginBottom: "90px",
                  }}
                  src={Risk}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </article>

              {/* <h3 className="entry-title-h3">Integrated Risk management</h3> */}
              {/* <div className="entry-meta">
              <ul>
                <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="blog-single.html">John Doe</a></li>
                <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="blog-single.html">12 Comments</a></li>
              </ul>
              Consulting: 
Our Consulting team provide domain expertise and required technical and business skills to manage and solve complex business problems. We utilize proven problem-solving methodologies and structured approach to identify, define, and manage solutions. Our approach outlines the deliverables and well-defined roadmap with milestones to manage and govern the projects and solutions delivery

            </div> */}
              {/* <div className="entry-content">
                <div
                  className="menu"
                  style={{
                    marginTop: "110px",
                    marginBottom: "110px",
                  }}
                >
                  <input
                    type="checkbox"
                    className="menu-open"
                    name="menu-open"
                    id="menu-open"
                    // onClick={()=>{alert("clicked button")}}
                  />
                  <label className="menu-open-button" for="menu-open">
                    <h1 className="line">
                      <p className="headding">IRM</p>
                    </h1>
                  </label>

                  <a href="#" className="menu-item blue">
                    <h1 className="Mansoor">Strategy</h1>
                  </a>
                  <a href="#" className="menu-item green">
                    {" "}
                    <h1 className="Mansoor">Assessment</h1>{" "}
                  </a>
                  <a href="#" className="menu-item red">
                    <h1 className="Mansoor">Response</h1>
                  </a>
                  <a href="#" className="menu-item purple">
                    {" "}
                    <h1 className="Mansoor">Reporting</h1>{" "}
                  </a>
                  <a href="#" className="menu-item orange">
                    <h1 className="Mansoor">Monitoring</h1>{" "}
                  </a>
                  <a href="#" className="menu-item lightblue">
                    {" "}
                    <h1 className="Mansoor">Technology</h1>{" "}
                  </a>
                </div>
              </div> */}

              <article>
                <div className="card lg-6">
                  <div className="row g-0">
                    <div className="col-lg-6" style={{ maxWidth: "540px" }}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          padding: "10px",
                        }}
                        src={GRC}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h2 className="entry-title">
                          <a>Governance, Risk and Compliance (GRC)</a>
                        </h2>
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          Governance, Risk and Compliance is a framework to
                          structure governance, risk management and regulatory
                          compliance through use of technology. It unifies and
                          align an organization’s approach to risk management
                          and regulatory compliance. We help our client to
                          implement GRC solutions to strengthen the risk
                          management approach by utilizing foundational
                          elements, common taxonomy and referential to develop
                          workflows, reports, dashboards, and monitoring
                          solutions for an integrated and streamlined system to
                          manage regulatory obligations, and operational
                          objectives
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </article> */}
                {/* <article className="entry">
              <div className="entry-img">
                <img src="/assets/img/blog/GRC.png" alt className="img-fluid" />
              </div>
              <h3 className="entry-title">
                <a href="#">Governance, Risk and Compliance (GRC) </a>
              </h3>
              <p>
                Governance, Risk and Compliance is a framework to structure
                governance, risk management and regulatory compliance through
                use of technology. It unifies and align an organization’s
                approach to risk management and regulatory compliance. We help
                our client to implement GRC solutions to strengthen the risk
                management approach by creating a common utilizing common
                foundational element, taxonomy, referential and developing
                workflows, reporting, dashboards, and monitoring solutions to
                provide an integrated, streamlined system to manage regulatory
                obligations.
              </p> */}
                {/* <img
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "10px",
                    marginTop: "40px",
                    marginBottom: "40px",
                  }}
                  src="/assets/img/blog/AdobeStock_87650299_Preview.jpeg"
                  className="img-fluid rounded-start"
                  alt="..."

                /> */}
                <div className="container" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-12 entries">
                      <div className="justify-content-center">
                        <img
                          style={{
                            height: " -webkit-fill-available",
                            width: "100%",
                            padding: "10px",
                            marginTop: "40px",
                            marginBottom: "40px",
                          }}
                          src="/assets/img/blog/GRC_-_Part_2-removebg-preview.png"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <ul id="hexGrid">
                    <li className="hex" id="hex">
                      <a className="hexIn" href="#">
                        <h1>Compliance and Policy Management</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>Audit Management</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>Regulatory Inventory and Change Management</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>
                          RCSA,Compliance and Finnacial Crime Risk Assessment
                        </h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>Business Continuity Management</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>Operational Risk and SOX Compliance</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>Incidents, Issues and Breach management</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>ESG (Environmental, Social and Governance)</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>IT Risk and Cybersecurity risk Management</h1>
                      </a>
                    </li>
                    <li className="hex">
                      <a className="hexIn" href="#">
                        <h1>Management Metrics</h1>
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="read-more">
                <a href="blog-single.html">Read More</a>
              </div> */}
              </article>
              {/* End blog entry */}
            </article>
          </div>
          {/* End blog entries list */}
        </div>
      </div>
    </section>
  );
}

export default C_RT;
