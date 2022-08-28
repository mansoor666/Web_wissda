import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer id="footer">
      {/* <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ marginTop: "40px" }}>
              <h4>Our Newsletter</h4> */}
      {/* <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p> */}
      {/* </div> */}
      {/* <div className="col-lg-6"> */}
      {/* <form action method="post"> */}
      {/* <form action method="">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>About Us</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <NavLink to="/">Home</NavLink>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <NavLink to="/about">About us</NavLink>
                </li> */}
                {/* <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <NavLink to="/Services">Service</NavLink>
                </li> */}
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <NavLink to="/Careers">Careers</NavLink>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <NavLink to="/blog">Blog</NavLink>
                </li> */}
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="Services/ProfessionalServices">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="Services/Esg">
                    Environment , Social and Governance
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="Services/GRC">
                    Compliance and Risk Transformation
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="Services/Cyber_Security">Cyber Security</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="Services/Data_Solutions">Data and Analytics</Link>
                </li>
                {/* <li><i className="bx bx-chevron-right" /> <Link to="">Graphic Design</Link></li> */}
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                #101 Hudson Street, Jersey City,
                <br />
                NJ-07302, United States.
                {/* United States <br /> */}
                {/* Phone: +1 6786449967 <br /> */}
                {/* <strong>Email:</strong> info@Wissda.com
                <br /> */}
              </p>
              <p>
                #37/2 Chicago Avenue, Bengaluru,
                {/* <br />
                India
                <br /> */}
                <br />
                Karnataka, 560052, India.
                {/* <strong>Phone:</strong> +91 9900129375 */}
                {/* Phone: +91 9900129375 */}
                {/* <br />
                <strong>Email:</strong> info@Wissda.com
                <br /> */}
              </p>

              <div className="social-links mt-3">
                <Link to="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </Link>
                <Link to="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </Link>
                <Link to="#" className="google-plus">
                  <i className="bx bxl-instagram" />
                </Link>
                <a
                  href="https://www.linkedin.com/company/wissda/"
                  target="blank"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 footer-info">
              <h3>Follow Us</h3> */}
            {/* <p
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                Wissda supports some of the Fortune 100 companies in various
                areas. We focus on US and AMEA Market with delivery offices at
                US & India.
              </p> */}
            {/* <div className="social-links mt-3">
                <Link to="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </Link>
                <Link to="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </Link>
                <Link to="#" className="google-plus">
                  <i className="bx bxl-instagram" />
                </Link>
                <Link to="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Wissda</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/ */}
          Designed by <a href="https://Wissda.com/">Wissda.com</a>
        </div>
      </div>
    </footer>
  );
}
