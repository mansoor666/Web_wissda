import React from "react";
import { NavLink, Link, useParams } from "react-router-dom";

function ServicesMenu() {
  const params = useParams();
  if (params === "") {
    console.log(params, "mansoor");
  }
  console.log(params, "Outside");

  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="container d-flex justify-content-between align-items-center p-md-0">
          <div>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Services</li>
              {/* <li>{params.Route}</li> */}
            </ol>
            <h2>What WE Do</h2>
          </div>
          <span className="d-flex align-items-Right m-1 ">
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <NavLink to="ProfessionalServices">
                    Professional Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="Esg">Esg Services</NavLink>
                </li>
                <li>
                  <NavLink to="GRC">
                    Compliance and Risk Transformation{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="Cyber_Security">Cyber Security</NavLink>
                </li>
                <li>
                  <NavLink to="Data_Solutions">Data and Analytics</NavLink>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ServicesMenu;
