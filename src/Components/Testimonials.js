import React from "react";
import { useState } from "react";
// import { Container } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Testimonials.css";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

function Testimonials(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const [mobileNav, setMobileNav] = useState(true);
  // const [mobileclass, setMobileclass] = useState(false);

  // const Handler = () => {
  //   setMobileNav(!mobileNav);
  //   setMobileclass(!mobileclass);

  // };

  const LongText = ({ content, limit }) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);

    if (content.length <= limit) {
      // there is nothing more to show
      return (
        <div>
          <i className="bx bxs-quote-alt-left quote-icon-left" />
          {content}
          <i className="bx bxs-quote-alt-right quote-icon-right" />
        </div>
      );
    }
    if (showAll) {
      // We show the extended text and a link to reduce it
      return (
        <div className="-flex align-items-stretch">
          <i className="bx bxs-quote-alt-left quote-icon-left" />
          {content}
          <i className="bx bxs-quote-alt-right quote-icon-right" />
          <br />
          <button
            className=" btn-get-started justify-content-center"
            onClick={showLess}
          >
            Read less
          </button>
        </div>
      );
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "...";
    return (
      <div className="-flex align-items-stretch">
        <i className="bx bxs-quote-alt-left quote-icon-left" />
        {toShow}
        <i className="bx bxs-quote-alt-right quote-icon-right" />
        <br />
        <button
          className="btn-get-started justify-content-center"
          onClick={showMore}
        >
          Read more
        </button>
      </div>
    );
  };

  return (
    <div>
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Employee speaks</h2>
            <Carousel
              // centerMode={props.deviceType !== "mobile" ? true : false}
              swipeable={true}
              showDots={true}
              slidesToSlide={1}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              pauseOnHover={true}
              arrows={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={2000}
              //   containerClass="testimonial-item"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              // dotListClass="custom-dot-list-style"
              //   itemClass="swiper-wrapper align-items-center"
            >
              <div className="row">
                <div
                  className="col-lg-11 col-md-6 d-flex align-items-stretch mt-md-0"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    minHeight: "300px",
                  }}
                >
                  <div className="testimonial-item">
                    {/* <img
                      src="/assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt
                    /> */}
                    <h3>Vinod M </h3>
                    <h4>Cloud-Engineer </h4>
                    <p
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      <LongText
                        className="bx bxs-quote-alt-left quote-icon-left"
                        content="Wissda is a great place if you are looking for a company
                      that values culture. Great vision, leadership and very
                      transparent. Employees are treated very well. Never a lack
                      of encouragement from senior management and no
                      micromanagement."
                        limit={200}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-11 col-md-6 d-flex align-items-stretch mt-md-0"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    minHeight: "300px",
                  }}
                >
                  <div className="testimonial-item">
                    {/* <img
                      src="/assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt
                    /> */}
                    <h3>Freddy Jose </h3>
                    <h4>Windows Developer</h4>
                    <p
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      <LongText
                        content="Working for Wissda Consulting was a pleasant experience,
                      the management smoothed out multiple issues with the
                      client.I have worked with other consultants from various
                      organizations. Some were very displeased with their
                      consultancy. I would come back to work for Wissda again."
                        limit={190}
                      />
                      {/* <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Working for Wissda Consulting was a pleasant experience,
                      the management smoothed out multiple issues with the
                      client. I would come back to work for Wissda again.
                      <i className="bx bxs-quote-alt-right quote-icon-right" /> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-11 col-md-6 d-flex align-items-stretch mt-md-0"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    minHeight: "300px",
                  }}
                >
                  <div className="testimonial-item">
                    {/* <img
                      src="/assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt
                    /> */}
                    <h3>Rishab Dutta </h3>
                    <h4>IOS Developer </h4>
                    <p
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      <LongText
                        content="I didn't really visit Wissda's office in Bangalore. My
                      interview was arranged via a phone call and all the
                      documents were processed online(something that I really
                      liked and it was pre-covid times). I used to get my salary
                      on time everytime. My HR used to call me often to ask
                      about my well being or any issues I might be facing at
                      work. I have worked with other consultants from various
                      organizations. Some were very displeased with their
                      consultancy. I am glad to say I didn't face any such
                      problems with Wissda."
                        limit={202}
                      />
                      {/* <i className="bx bxs-quote-alt-left quote-icon-left" />
                      I didn't really visit Wissda's office in Bangalore. My
                      interview was arranged via a phone call and all the
                      documents were processed online(something that I really
                      liked and it was pre-covid times). I used to get my salary
                      on time everytime. My HR used to call me often to ask
                      about my well being or any issues I might be facing at
                      work. I have worked with other consultants from various
                      organizations. Some were very displeased with their
                      consultancy. I am glad to say I didn't face any such
                      problems with Wissda.
                      <i className="bx bxs-quote-alt-right quote-icon-right" /> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-11 col-md-6 d-flex align-items-stretch mt-md-0"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    minHeight: "250px",
                  }}
                >
                  <div className="testimonial-item">
                    {/* <img
                      src="/assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt
                    /> */}
                    <h3>Deepak Prasad </h3>
                    <h4>Software Engineer</h4>
                    <p
                      style={{
                        textAlign: "justify",
                        // textJustify: "inter-word",
                      }}
                    >
                      <LongText
                        content="I have worked in Wissda Consulting pvt ltd as Software
                      Engineer. Overall the process of recruitment and
                      onboarding was very smooth. They provide the flexibility
                      to choose the clients to we want to work. Work atmosphere
                      is quite good and supportive management team. Overall
                      recommended for working here."
                        limit={185}
                      />
                      {/* <i className="bx bxs-quote-alt-left quote-icon-left" />
                      I have worked in Wissda Consulting pvt ltd as Software
                      Engineer. Overall the process of recruitment and
                      onboarding was very smooth. They provide the flexibility
                      to choose the clients to we want to work. Work atmosphere
                      is quite good and supportive management team. Overall
                      recommended for working here.
                      <i className="bx bxs-quote-alt-right quote-icon-right" /> */}
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Testimonials;
