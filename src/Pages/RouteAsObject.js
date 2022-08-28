import React from "react";
import { useRoutes, Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";
import Sub_Services from "./Services";
import Cyber_Security from "./Services-pages/Cyber_Security";
import C_RT from "./Services-pages/C_RT";
import DataAnalytics from "./Services-pages/DataAnalytics";
import Esg from "./Services-pages/Esg";
import ProfessionalServices from "./Services-pages/Professional_Services";
import ServicesMenu from "./ServicesMenu";

const RouteAsObj = () => {
  let element = useRoutes([
    { path: "/", element: <Route1 /> },
    { path: "ProfessionalServices", element: <Route2 /> },
    { path: "ESG", element: <Route6 /> },
    { path: "GRC", element: <Route3 /> },
    { path: "Cyber_Security", element: <Route4 /> },
    { path: "Data_Solutions", element: <Route5 /> },
    {
      path: "route6",
      element: <Route6 />,
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <main id="main">
      <ServicesMenu />
      {element}
    </main>
  );
};

const Route1 = () => <Sub_Services />;
const Route2 = () => <ProfessionalServices />;
const Route3 = () => <C_RT />;
const Route4 = () => <Cyber_Security />;
const Route5 = () => <DataAnalytics />;
const Route6 = () => <Esg />;
const Route7 = () => {
  return (
    <div>
      <h1>Route6</h1>
      <ul>
        <li>
          <Link to="child1">Child1</Link>
        </li>
        <li>
          <Link to="child2">Child2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
const Child1 = () => <h2>Child1</h2>;
const Child2 = () => <h2>Child2</h2>;
const NotFound = () => <h1>NotFound</h1>;

export default RouteAsObj;
