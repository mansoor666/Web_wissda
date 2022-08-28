// import { Link } from "react-router-dom";
// import Clients from "./Clients";
// import CountUp from "react-countup";

// function About() {
//   return (
//     <div>
//       <main id="main">
//         {/* ======= Breadcrumbs ======= */}
//         <section id="breadcrumbs" className="breadcrumbs">
//           <div className="container">
//             <ol>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>About Us</li>
//             </ol>
//             <h2>About Us</h2>
//           </div>
//         </section>
//         {/* End Breadcrumbs */}
//         {/* ======= About Section ======= */}
//         <section id="about" className="about">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6">
//                 <img src="/assets/img/about.jpg" className="img-fluid" alt />
//               </div>
//               <div className="col-lg-6 pt-4 pt-lg-0 content">
//                 <h3>About Wissda</h3>
//                 <p className="fst-italic">
//                   We are “Problem Solvers”, we look for possibilities, solutions
//                   and distinguish signal from the noise. We are curious domain
//                   experts, Engineers, Developers, Data Nerds, Talent Partners,
//                   Learners and Dreamers.
//                 </p>
//                 <ul>
//                   <li>
//                     <i className="bi bi-check-circle" /> Transforming business
//                     through automation and Innovation.
//                   </li>
//                   <li>
//                     <i className="bi bi-check-circle" /> Empowering Clients with
//                     Intelligent Technical, Business and Data Solutions.
//                   </li>
//                   <li>
//                     <i className="bi bi-check-circle" /> Managing and Mitigating
//                     risk through Integrated risk management
//                   </li>
//                 </ul>
//                 <p>
//                   We are an execution focused, quality obsessed and result
//                   oriented Consulting Organization. Our mission is to help our
//                   clients solve their most critical business challenges by
//                   providing highest quality solutions through creative thinking,
//                   ingenuity, analytical skills, and pragmatic approach. We live
//                   by our core principles of Transparency, Integrity,
//                   Accountability, Excellence, and Continuous Improvement.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* End About Section */}
//         {/* ======= Counts Section ======= */}
//         <section id="counts" className="counts">
//           <div className="container">
//             <div className="row no-gutters">
//               <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <i className="bi bi-emoji-smile" />
//                   <CountUp
//                     className="purecounter"
//                     start={0}
//                     end={232}
//                     duration={5}
//                   />
//                   <p>
//                     <strong>Happy Clients</strong> consequuntur quae qui deca
//                     rode
//                   </p>
//                   {/* <a href="#">Find out more »</a> */}
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <i className="bi bi-journal-richtext" />
//                   <CountUp
//                     className="purecounter"
//                     start={0}
//                     end={100}
//                     duration={5}
//                   />
//                   <p>
//                     <strong>Projects</strong> adipisci atque cum quia aut
//                     numquam delectus
//                   </p>
//                   {/* <a href="#">Find out more »</a> */}
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <i className="bi bi-headset" />
//                   <CountUp
//                     className="purecounter"
//                     start={0}
//                     end={1463}
//                     duration={5}
//                   />
//                   <p>
//                     <strong>Hours Of Support</strong> aut commodi quaerat.
//                     Aliquam ratione
//                   </p>
//                   {/* <a href="#">Find out more »</a> */}
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <i className="bi bi-people" />
//                   <CountUp
//                     className="purecounter"
//                     start={0}
//                     end={15}
//                     duration={5}
//                   />
//                   <p>
//                     <strong>Hard Workers</strong> rerum asperiores dolor
//                     molestiae doloribu
//                   </p>
//                   {/* <a href="#">Find out more »</a> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* End Counts Section */}
//         {/* ======= Clients Section ======= */}
//         <section id="clients" className="clients">
//           <div className="container">
//             <div className="section-title">
//               <h2>Clients</h2>
//               <p>
//                 Magnam dolores commodi suscipit. Necessitatibus eius consequatur
//                 ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
//                 quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
//                 Quia fugiat sit in iste officiis commodi quidem hic quas.
//               </p>
//             </div>
//             <div className="">
//               <Clients />
//             </div>
//           </div>
//         </section>
//         {/* End Clients Section */}
//         {/* ======= Testimonials Section ======= */}
//         <section id="testimonials" className="testimonials">
//           <div className="container">
//             <div className="section-title">
//               <h2>Testimonials</h2>
//               <p>
//                 Magnam dolores commodi suscipit. Necessitatibus eius consequatur
//                 ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
//                 quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
//                 Quia fugiat sit in iste officiis commodi quidem hic quas.
//               </p>
//             </div>
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="testimonial-item">
//                   <img
//                     src="/assets/img/testimonials/testimonials-1.jpg"
//                     className="testimonial-img"
//                     alt
//                   />
//                   <h3>Saul Goodman</h3>
//                   <h4>Ceo &amp; Founder</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left" />
//                     Proin iaculis purus consequat sem cure digni ssim donec
//                     porttitora entum suscipit rhoncus. Accusantium quam,
//                     ultricies eget id, aliquam eget nibh et. Maecen aliquam,
//                     risus at semper.
//                     <i className="bx bxs-quote-alt-right quote-icon-right" />
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="testimonial-item mt-4 mt-lg-0">
//                   <img
//                     src="/assets/img/testimonials/testimonials-2.jpg"
//                     className="testimonial-img"
//                     alt
//                   />
//                   <h3>Sara Wilsson</h3>
//                   <h4>Designer</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left" />
//                     Export tempor illum tamen malis malis eram quae irure esse
//                     labore quem cillum quid cillum eram malis quorum velit fore
//                     eram velit sunt aliqua noster fugiat irure amet legam anim
//                     culpa.
//                     <i className="bx bxs-quote-alt-right quote-icon-right" />
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="testimonial-item mt-4">
//                   <img
//                     src="/assets/img/testimonials/testimonials-3.jpg"
//                     className="testimonial-img"
//                     alt
//                   />
//                   <h3>Jena Karlis</h3>
//                   <h4>Store Owner</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left" />
//                     Enim nisi quem export duis labore cillum quae magna enim
//                     sint quorum nulla quem veniam duis minim tempor labore quem
//                     eram duis noster aute amet eram fore quis sint minim.
//                     <i className="bx bxs-quote-alt-right quote-icon-right" />
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="testimonial-item mt-4">
//                   <img
//                     src="/assets/img/testimonials/testimonials-4.jpg"
//                     className="testimonial-img"
//                     alt
//                   />
//                   <h3>Matt Brandon</h3>
//                   <h4>Freelancer</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left" />
//                     Fugiat enim eram quae cillum dolore dolor amet nulla culpa
//                     multos export minim fugiat minim velit minim dolor enim duis
//                     veniam ipsum anim magna sunt elit fore quem dolore labore
//                     illum veniam.
//                     <i className="bx bxs-quote-alt-right quote-icon-right" />
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="testimonial-item mt-4">
//                   <img
//                     src="/assets/img/testimonials/testimonials-5.jpg"
//                     className="testimonial-img"
//                     alt
//                   />
//                   <h3>John Larson</h3>
//                   <h4>Entrepreneur</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left" />
//                     Quis quorum aliqua sint quem legam fore sunt eram irure
//                     aliqua veniam tempor noster veniam enim culpa labore duis
//                     sunt culpa nulla illum cillum fugiat legam esse veniam culpa
//                     fore nisi cillum quid.
//                     <i className="bx bxs-quote-alt-right quote-icon-right" />
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="testimonial-item mt-4">
//                   <img
//                     src="/assets/img/testimonials/testimonials-6.jpg"
//                     className="testimonial-img"
//                     alt
//                   />
//                   <h3>Emily Harison</h3>
//                   <h4>Store Owner</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left" />
//                     Eius ipsam praesentium dolor quaerat inventore rerum odio.
//                     Quos laudantium adipisci eius. Accusamus qui iste cupiditate
//                     sed temporibus est aspernatur. Sequi officiis ea et quia
//                     quidem.
//                     <i className="bx bxs-quote-alt-right quote-icon-right" />
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* End Testimonials Section */}
//       </main>
//       {/* End #main */}
//     </div>
//   );
// }

// export default About;
