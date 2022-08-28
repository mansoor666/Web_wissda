import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import pfbanner from "../Services-pages/Services-sub-images/Website Compressed/AdobeStock_218581890.jpeg";
// import pfbanner from "../Services-pages/Services-sub-images/AdobeStock_483739667.jpeg";
import consulting from "../Services-pages/Services-sub-images/Website Compressed/Consulting 1 (1).jpeg";
import staffing from "../Services-pages/Services-sub-images/Website Compressed/AdobeStock_206905163.jpeg";
import Managedservices from "../Services-pages/Services-sub-images/Website Compressed/AdobeStock_483739667.jpeg";
// import service from '../service';
function ProfessionalServices() {
  return (
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 entries">
            <article className="entry">
              <div className="entry-img">
                <img
                  src={pfbanner}
                  style={{ height: " -webkit-fill-available", width: "100%" }}
                  alt
                  className="img-fluid"
                />
              </div>
              {/* <h2 className="entry-title">
                <a href="#">Professional Services</a>
              </h2> */}
              {/* <div className="entry-meta">
              <ul>
                <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="blog-single.html">John Doe</a></li>
                <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="blog-single.html">12 Comments</a></li>
              </ul>
              Consulting: 
Our Consulting team provide domain expertise and required technical and business skills to manage and solve complex business problems. We utilize proven problem-solving methodologies and structured approach to identify, define, and manage solutions. Our approach outlines the deliverables and well-defined roadmap with milestones to manage and govern the projects and solutions delivery

            </div> */}
              <div className="card lg-6">
                <div className="row g-0">
                  <div className="col-lg-6" style={{ maxWidth: "540px" }}>
                    <img
                      style={{
                        height: " -webkit-fill-available",
                        width: "100%",
                        padding: "10px",
                      }}
                      src={consulting}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body">
                      <h2 className="entry-title">
                        <a>Consulting</a>
                      </h2>
                      <div className="entry-content">
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          We partner with our clients to help them develop
                          operational framework and deploy technology solution
                          to proactively analyze, improve, automate, and
                          optimize existing business processes to become more
                          efficient and gain competitive advantage
                        </p>
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          Our Consulting team provides domain expertise,
                          business and technical know how to help solve business
                          challenges. We utilize proven problem-solving
                          methodologies and structured approach to identify,
                          analyze, define, deploy, and manage solutions. Our
                          approach outlines the deliverables and well-defined
                          roadmap with milestones to manage and govern projects.
                          Areas Of Focus are:
                        </p>
                        <ul>
                          <li style={{ fontSize: "15px", fontWeight: "400" }}>
                            <Link to="/Services/GRC">
                              Compliance and Risk Transformation
                            </Link>
                          </li>
                          <li style={{ fontSize: "15px", fontWeight: "400" }}>
                            <Link to="/Services/Cyber_Security">
                              Cybersecurity
                            </Link>
                          </li>
                          <li style={{ fontSize: "15px", fontWeight: "400" }}>
                            <Link to="/Services/Data_Solutions">
                              Data and Analytics
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <article>
                <div className="card lg-6 mt-lg-5">
                  <div className="row g-0">
                    <div className="col-lg-6" style={{ maxWidth: "540px" }}>
                      <img
                        style={{
                          height: " -webkit-fill-available",
                          width: "100%",
                          padding: "10px",
                        }}
                        src={staffing}
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h2 className="entry-title">
                          <a href="#">Staffing </a>
                        </h2>
                        <div className="entry-content">
                          <p
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                            }}
                          >
                            We help our clients with key technical temporary and
                            project-based resourcing needs by providing Wissda
                            Consultants. We differentiate ourselves by engaging
                            in a qualitative partnership, conducting deep
                            technical and fitment assessments, maintaining
                            transparency throughout the process & taking
                            complete ownership of the end-to-end onboarding. Our
                            qualitative approach helps us collaborate with
                            clients closely and help achieve expected goals.
                          </p>
                          <p
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                            }}
                          >
                            We work with our Clients on unique blend of
                            solutions and services based on the core technology
                            pillars of Automation, Social & Cloud computing,
                            Mobility, Analytics, Managed Infrastructure
                            programs, Enterprise resource technology solutions
                            (SAP, Oracle) & CRM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="entry-content">
                <p>
                  Our Consulting team provide domain expertise and required
                  technical and business skills to manage and solve complex
                  business problems. We utilize proven problem-solving
                  methodologies and structured approach to identify, define, and
                  manage solutions. Our approach outlines the deliverables and
                  well-defined roadmap with milestones to manage and govern the
                  projects and solutions delivery
                </p>
                <p>
                  We partner with our clients to help them develop operational
                  framework and deploy technology solution to proactively
                  analyze, improve, automate, and optimize existing business
                  processes to become more efficient and gain competitive
                  advantage. Our Focus Areas are:
                </p>
                <ul>
                  <li>
                    <Link to="/Services/GRC">
                      Compliance and Risk Transformation
                    </Link>
                  </li>
                  <li>
                    <Link to="/Services/Cyber_Security">Cybersecurity</Link>
                  </li>
                  <li>
                    <Link to="/Services/Data_Solutions">
                      Data and Analytics
                    </Link>
                  </li>
                </ul>
              </div> */}
              </article>

              {/* <article className="entry">
                <div className="entry-img">
                  <img
                    src="/assets/img/blog/staffing-image-1.png"
                    alt
                    className="img-fluid"
                  />
                </div>
                <h2 className="entry-title">
                  <a href="#">Staffing </a>
                </h2>
                <br></br>
                <p>
                  We help our clients with key technical temporary and
                  project-based resourcing needs by providing{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Wissda Consultants
                  </span>
                  . We differentiate ourselves by engaging in a qualitative
                  partnership, conducting deep technical and fitment
                  assessments, maintaining transparency throughout the process &
                  taking complete ownership of the end-to-end onboarding. Our
                  qualitative approach helps us collaborate with clients closely
                  and help achieve expected goals. Key Technical areas we focus
                  on are …
                </p>
              </article> */}
              <div className="card lg-6 mt-lg-5">
                <div className="row g-0">
                  <div className="col-lg-6" style={{ maxWidth: "540px" }}>
                    <img
                      style={{
                        height: " -webkit-fill-available",
                        width: "100%",
                        padding: "10px",
                      }}
                      src={Managedservices}
                      alt
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body">
                      <h2 className="entry-title">
                        <a href="#">Managed Services </a>
                      </h2>
                      <div className="entry-content">
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          Our Managed services team help clients to outsource
                          non-core but essential activities to us. We combine
                          domain expertise, talented professionals, and global
                          delivery model to manage end to end business
                          processes. Our Operating model is based on our core
                          values of transparency, quality, excellence, and
                          continuous improvement to deliver effective outcomes.
                          Ability of our high skilled professionals to
                          understand existing processes, strategic direction and
                          utilize latest developments in technology and business
                          processes helps us develop an efficient delivery
                          model.
                        </p>
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          We develop a robust integrated process with effective
                          governance and oversight to achieve expected
                          deliverables and provide reporting and insights to
                          management. Transferring business operations to Wissda
                          helps clients focus on their mission critical business
                          priorities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <article className="entry">
                <div className="entry-img">
                  <img
                    src="/assets/img/blog/Maneged-services.png"
                    alt
                    className="img-fluid"
                  />
                </div>
                <br></br>
                <h2 className="entry-title">
                  <a href="#">Managed Services </a>
                </h2>
                <p>
                  Our Managed services team help clients to outsource non-core
                  but essential activities to us. We combine domain expertise,
                  talented professionals, and global delivery model to manage
                  end to end business processes. The service delivery model is
                  based on an integrated process that is built on quality,
                  timely delivery, and oversight to achieve defined deliverables
                  and success criteria.
                </p>
                {/* <div className="read-more">
                <a href="blog-single.html">Read More</a>
              </div> */}
              {/* </div> */}
              {/* </article> */}
            </article>
            {/* End blog entry */}
          </div>
          {/* End blog entries list */}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalServices;
