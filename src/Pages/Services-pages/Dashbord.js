// import React from "react";
// import Professional_Services from './Professional_Services'
// import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
// import Services from "../Services";

// const Dashboard = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="">Profile</Link>
//         </li>
//         <li>
//           <Link to="orders">Orders</Link>
//         </li>
//         <li>
//           <Link to="Professional_Services">Professional_Services</Link>
//         </li>
//         <li>
//           <Link to="quotes">Quotes</Link>
//         </li>
//       </ul>
//       <div className="dashboard">
//         <Routes>
//           {/* <Route path="/" element={<Services />}></Route> */}
//           <Route path="orders" element={<Orders />}></Route>
//           {/* <Route path="Professional_Services" element={<Professional_Services />}></Route> */}
//           <Route path="order_details/:orderId" element={<OrderDetails />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export const Profile = () => {
//   return <h2>Profile</h2>;
// };
// export const Orders = () => {
//   const orderIds = ["10001", "10002", "10003"];
//   return (
//     <>
//       <h2>Orders</h2>
//       <ul className="orders">
//         {orderIds.map((orderId) => {
//           return (
//             <li key={orderId}>
//               <Link to={`/dashboard/order_details/${orderId}`}>
//                 View Order {orderId}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };
// export const Quotes = () => {
//   return <h2>Quotes</h2>;
// };
// export const OrderDetails = () => {
//   const params = useParams();
//   const navigate = useNavigate();

//   const onBackClick = (e) => {
//     e.preventDefault();
//     // navigate(-1);
//     navigate("/dashboard/orders");
//   };

//   return (
//     <>
//       <h2>Details of order {params.orderId}</h2>
//       <a href="#" onClick={onBackClick}>
//         Back to Orders
//       </a>
//     </>
//   );
// };

// export default Dashboard;
