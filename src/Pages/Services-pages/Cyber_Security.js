import React from "react";
import "./C_Y.css";
import Cybersecurity from "../Services-pages/services_Banners/cy-banner.jpeg";
import cydersecuritybanner from "./sub-services/cyber-seurity.jpeg";
import cloudSecurity from "./sub-services/Cyber_security_section/Cloud Security.jpg";
import ApplicationSecurity from "./sub-services/Cyber_security_section/Application Security.jpg";
import VulnerabilityandThreatManagement from "./sub-services/Cyber_security_section/Vulnerability and threst management.jpg";
import AccessandIdentityManagement from "./sub-services/Cyber_security_section/Identity & Access management.jpg";
import EndpointSecurity from "./sub-services/Cyber_security_section/Endpoint Security.jpg";
import ManagedServices from "./sub-services/Cyber_security_section/Managed Service.jpg";
import "./Cyber_Security.css";
function Cyber_Security() {
  return (
    <>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 entries">
              <article className="entry">
                <div className="entry-img">
                  <img
                    style={{ height: "100%", width: "100%" }}
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
              Consulting: 
Our Consulting team provide domain expertise and required technical and business skills to manage and solve complex business problems. We utilize proven problem-solving methodologies and structured approach to identify, define, and manage solutions. Our approach outlines the deliverables and well-defined roadmap with milestones to manage and govern the projects and solutions delivery

            </div> */}
                <div className="card lg-6 mt-lg-5">
                  <div className="row g-0">
                    <div
                      className="col-lg-6"
                      style={{ maxWidth: "540px", padding: "10px" }}
                    >
                      <img
                        src={cydersecuritybanner}
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h2 className="entry-title">
                          <a>CYBER SECURITY </a>
                        </h2>
                        <div className="entry-content">
                          <p
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                            }}
                          >
                            Technology has changed the business landscape and
                            provided the reach and speed that was unimaginable
                            in recent past, but it also has exposed us to new
                            risks and vulnerabilities. Our Cybersecurity
                            services helps organizations to manage technology
                            risk. The combined approach of technical and
                            business processes protects networks, devices, and
                            data from unauthorized access or criminal use and
                            ensure confidentiality, integrity, and availability
                            of information. We help to assess cyber security
                            risks, develop, and implement solutions, monitor
                            ongoing risks to develop timely and effective
                            response
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
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6  align-items-stretch mb-4">
              <div
                class="container-CS justify-content-center"
                style={{
                  background: { cloudSecurity },
                }}
              >
                <div class="content-CS justify-content-center">
                  <h1 className="heading">Cloud Security</h1>
                  <h3 className="content">
                    I love designing websites and keep things as simple as
                    possible. My goals is to focus on minimalism and conveying
                    the message that you want to send
                  </h3>
                </div>

                <div class="flap1"></div>
              </div>
              {/* <span style={{ color: "red", backgroundColor: "#ffffff" }}>
                <h5 class="card-header">Featured</h5>
              </span> */}
              {/* <img
                src={cloudSecurity}
                style={{ maxHeight: "300px" }}
                class="card-img-top"
                alt="..."
              /> */}
              {/* <div class="card-img-overlay">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-6  align-items-stretch mb-4">
              {/* <span style={{ color: "red", backgroundColor: "#ffffff" }}>
                <h5 class="card-header">Featured</h5>
              </span> */}
              {/* <img
                src={ApplicationSecurity}
                style={{ maxHeight: "300px", minHeight: "299px" }}
                class="card-img-top"
                alt="..."
              /> */}
              <div class="container-CS">
                <div class="content-CS">
                  <h1 className="heading">Application Security</h1>
                  <h3 className="content">
                    I love designing websites and keep things as simple as
                    possible. My goals is to focus on minimalism and conveying
                    the message that you want to send
                  </h3>
                </div>
                <div class="flap2"></div>
              </div>
              {/* <div class="card-img-overlay">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-6  align-items-stretch mb-4">
              {/* <span style={{ color: "red", backgroundColor: "#ffffff" }}>
                <h5 class="card-header">Featured</h5>
              </span> */}
              {/* <img
                src={VulnerabilityandThreatManagement}
                style={{ maxHeight: "300px", minHeight: "299px" }}
                class="card-img-top"
                alt="..."
              /> */}
              <div class="container-CS">
                <div class="content-CS">
                  <h1 className="heading">Vulnerability & Threat Management</h1>
                  <h3 className="content">
                    I love designing websites and keep things as simple as
                    possible. My goals is to focus on minimalism and conveying
                    the message that you want to send
                  </h3>
                </div>
                <div class="flap3"></div>
              </div>
              {/* <div class="card-img-overlay">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-6  align-items-stretch mb-4">
              {/* <span style={{ color: "red", backgroundColor: "#ffffff" }}>
                <h5 class="card-header">Featured</h5>
              </span> */}
              {/* <img
                src={AccessandIdentityManagement}
                style={{ maxHeight: "300px", minHeight: "299px" }}
                class="card-img-top"
                alt="..."
              /> */}
              <div class="container-CS">
                <div class="content-CS">
                  <h1 className="heading">Identity & Access Management</h1>
                  <h3 className="content">
                    I love designing websites and keep things as simple as
                    possible. My goals is to focus on minimalism and conveying
                    the message that you want to send
                  </h3>
                </div>
                <div class="flap4"></div>
              </div>
              {/* <div class="card-img-overlay">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-6  align-items-stretch mb-4">
              {/* <span style={{ color: "red", backgroundColor: "#ffffff" }}>
                <h5 class="card-header">Featured</h5>
              </span> */}
              {/* <img
                src={EndpointSecurity}
                style={{ maxHeight: "300px", minHeight: "299px" }}
                class="card-img-top"
                alt="..."
              /> */}
              <div class="container-CS">
                <div class="content-CS">
                  <h1 className="heading">Endpoint Security</h1>
                  <h3 className="content">
                    I love designing websites and keep things as simple as
                    possible. My goals is to focus on minimalism and conveying
                    the message that you want to send
                  </h3>
                </div>
                <div class="flap5"></div>
              </div>
              {/* <div class="card-img-overlay">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-6  align-items-stretch mb-4">
              {/* <span style={{ color: "red", backgroundColor: "#ffffff" }}>
                <h5 class="card-header">Featured</h5>
              </span> */}
              {/* <img
                src={ManagedServices}
                style={{ maxHeight: "300px", minHeight: "299px" }}
                class="card-img-top"
                alt="..."
              /> */}
              <div class="container-CS">
                <div class="content-CS">
                  <h1 className="heading">Managed Services</h1>
                  <h3 className="content">
                    I love designing websites and keep things as simple as
                    possible. My goals is to focus on minimalism and conveying
                    the message that you want to send
                  </h3>
                </div>
                <div class="flap6"></div>
              </div>
              {/* <div class="card-img-overlay">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-md-0">
      //         <Card
      //           className="card"
      //           style={{ width: "425px", height: "300px", cursor: "pointer" }}
      //         >
      //           <span style={{ color: "red", backgroundColor: "#ffffff" }}>
      //             <h5 class="card-header">Application Security</h5>
      //           </span>
      //           <img
      //             src="/assets/img/blog/small_cyber_2.jpg"
      //             class="card-img-top"
      //             alt="..."
      //           />
      //           <div class="card-img-overlay"> */}
      {/* <h5 class="card-title">Application Security</h5> */}
      {/* <p class="card-text">
      //               This is a wider card with supporting text below as a natural
      //               lead-in to additional content. This content is a little bit
      //               longer.
      //             </p> */}
      {/* // <p class="card-text">
      // {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      {/* {" "} */}
      {/* </p>
      //           </div>
      //         </Card>
      //       </div>
      //       <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
      //         <Card
      //           className="card"
      //           style={{ width: "425px", height: "300px", cursor: "pointer" }}
      //         >
      //           <span style={{ color: "red", backgroundColor: "#ffffff" }}>
      //             <h5 class="card-header">
      //               Vulnerability and Threat Management
      //             </h5>
      //           </span>
      //           <img
      //             src="/assets/img/blog/small_cyber_3.jpg"
      //             class="card-img-top"
      //             alt="..." */}
      {/* /> */}
      {/* <div class="card-img-overlay"> */}
      {/* <h5 class="card-title">
      //               Vulnerability and Threat Management
      //             </h5> */}
      {/* <p class="card-text">
      //               This is a wider card with supporting text below as a natural
      //               lead-in to additional content. This content is a little bit
      //               longer.
      //             </p> */}
      {/* <p class="card-text"> */}
      {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      {/* </p>
      //           </div>
      //         </Card>
      //       </div>
      //       <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5 lg-0">
      //         <Card
      //           className="card"
      //           style={{ width: "425px", height: "300px", cursor: "pointer" }}
      //         >
      //           <span style={{ color: "red", backgroundColor: "#ffffff" }}>
      //             <h5 class="card-header">Access and Identity Management</h5>
      //           </span>
      //           <img
      //             src="/assets/img/blog/small_cyber_4.jpg"
      //             class="card-img-top"
      //             alt="..."
      //           />
      //           <div class="card-img-overlay"> */}
      {/* <h5 class="card-title">Access and Identity Management</h5> */}
      {/* <p class="card-text">
      //               This is a wider card with supporting text below as a natural
      //               lead-in to additional content. This content is a little bit
      //               longer.
      //             </p> */}
      {/* <p class="card-text"> */}
      {/* <small class="text-muted">Last updated 3 mins ago</small> */}{" "}
      {/* </p>
      //           </div>
      //         </Card>
      //       </div>
      //       <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5 md-0">
      //         <Card
      //           className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5 md-0"
      //           style={{ height: "300px", cursor: "pointer" }}
      //         >
      //           <span style={{ color: "red", backgroundColor: "#ffffff" }}>
      //             <h5 class="card-header">Endpoint Security</h5>
      //           </span>
      //           <img
      //             src="/assets/img/blog/small_cyber_5.jpg"
      //             class="card-img-top"
      //             alt="..."
      //           />
      //           <div class="card-img-overlay"> */}
      {/* <h5 class="card-title">Endpoint Security</h5> */}
      {/* <p class="card-text">
      //               This is a wider card with supporting text below as a natural
      //               lead-in to additional content. This content is a little bit
      //               longer.
      //             </p> */}
      {/* <p class="card-text"> */}
      {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      {/* </p>
      //           </div>
      //         </Card>
      //       </div>
      //       <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5 lg-0">
      //         <Card
      //           className="card"
      //           style={{ width: "425px", height: "300px", cursor: "pointer" }}
      //         >
      //           <span style={{ color: "red", backgroundColor: "#ffffff" }}>
      //             <h5 class="card-header">Managed Services</h5>
      //           </span>
      //           <img
      //             src="/assets/img/blog/small_cyber_6.jpg"
      //             class="card-img-top"
      //             alt="..."
      //           />
      //           <div class="card-img-overlay"> */}
      {/* <h5 class="card-title">Managed Services</h5> */}
      {/* <p class="card-text">
      //             This is a wider card with supporting text below as a natural
      //             lead-in to additional content. This content is a little bit
      //             longer.
      //           </p> */}
      {/* <p class="card-text"> */}
      {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      {/* </p>
      //           </div>
      //         </Card>
      //       </div>
      //     </div>
      //   </div> */}
      {/* </section>  */}
      {/* <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-4  align-items mt-4 mt-md-0">
              <div className="wrappers justify-content-right">
                <div className="cards-cy justify-content-center"> */}
      {/* <i className="bx bxl-dribbble" /> */}
      {/* <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Cloud</a>
                    </span>
                    <br />
                    <span class="enclosed-2">Security</span>
                  </h1>
                </div> */}
      {/* <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="col-lg-4 col-md-6  align-items mt-4 mt-md-0"> */}
      {/* <div className="icon-boxs">
                <h4>
                  <a href>Application Security </a>
                </h4>
              </div> */}
      {/* <div className="wrappers justify-content-right">
                <div className="cards-cy justify-content-center"> */}
      {/* <i className="bx bxl-dribbble" /> */}
      {/* <h1>
                    <span className="enclosed">
                      <a style={{ fontSize: "13px" }}>Application</a>
                    </span>
                    <br />
                    Security
                  </h1>
                </div> */}
      {/* <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="col-lg-4 col-md-6 align-items mt-4 mt-lg-0">
              <div className="wrappers justify-content-right">
                <div className="cards-cy justify-content-center "> */}
      {/* <i className="bx bxl-dribbble" /> */}
      {/* <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Vulnerability </a>
                    </span>
                    <br />
                    Threat Management
                  </h1>
                </div> */}
      {/* <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>               */}
      {/* </div> */}
      {/* <div className="icon-boxs">
                <h4>
                  <a href>Vulnerability & Threat Management</a>
                </h4>
              </div> */}
      {/* </div> */}
      {/* <div className="col-lg-4 col-md-6  align-items-stretch mt-4 "> */}
      {/* <div className="icon-boxs">
                <h4>
                  <a href>Access & Identity Management</a>
                </h4>
              </div> */}
      {/* <div className="wrappers "> */}
      {/* <div className="cards-cy justify-content-center "> */}
      {/* <i className="bx bxl-dribbble" /> */}
      {/* <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Access & Identity </a>
                    </span>
                    <br />
                    Management
                  </h1>
                </div> */}
      {/* <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>               */}
      {/* </div>
            </div> */}
      {/* <div className="col-lg-4 col-md-6  align-items-stretch mt-4"> */}
      {/* <div className="icon-boxs">
                <h4>
                  <a href>Endpoint Security</a>
                  <br />
                </h4>
              </div> */}
      {/* <div className="wrappers">
                <div className="cards-cy justify-content-center"> */}
      {/* <i className="bx bxl-dribbble" /> */}
      {/* 
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>EndPoint</a>
                    </span>
                    <br></br>
                    Security
                  </h1>
                </div> */}
      {/* <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>               */}
      {/* </div>
            </div> */}
      {/* <div className="col-lg-4 col-md-6  align-items-stretch mt-4"> */}
      {/* <div className="icon-boxs">
                <h4>
                  <a href>Managed Services</a>
                </h4>
              </div> */}
      {/* <div className="wrappers">
                <div className="cards-cy justify-content-center">
                  <h1>
                    <span class="enclosed">
                      <a style={{ fontSize: "13px" }}>Managed</a>{" "}
                    </span>{" "}
                    <br />
                    Services
                  </h1>
                </div>
              </div>
            </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}
      {/* <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
              <h3>Design</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
              <h3>Code</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
              <h3>Launch</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div> */}
      {/* 
Names of Block:
Cloud Security
Application Security 
Vulnerability and Threat Management
Access and Identity Management
Endpoint Security
Managed Services

*/}
    </>
  );
}

export default Cyber_Security;
