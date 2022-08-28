import React from "react";
// import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from "./Services-pages/sub-services/Patners/risk-logo.png";
import client2 from "./Services-pages/sub-services/Patners/archer.png";

export default function Clients() {
  //   const settings = {
  //     dots: true,
  //     useCSS:false,
  //     infinite: true,
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     pauseOnHover: true,
  //     slide:"swiper-wrapper align-items-center",
  //     // className:"clients-slider swiper" ,
  //     centerPadding:"20px",
  //     arrows:true,
  //     // dotsClass:'swiper-pagination',
  //     className : { width:"116px", marginRight: "120px", display: "inline-block"},

  //   };

  // return (

  // <Slider {...settings} >

  //   <div class="swiper-slide"  >
  //   <img src="/assets/img/clients/client-1.png" className="img-fluid" />
  //   </div>
  //   <div class="swiper-slide" >
  //   <img src="/assets/img/clients/client-2.png" className="img-fluid"/>
  //   </div>
  //   <div class="swiper-slide">
  //   <img src="/assets/img/clients/client-3.png" className="img-fluid"/>
  //   </div>
  //   <div class="swiper-slide">
  //   <img src="/assets/img/clients/client-4.png" className="img-fluid"/>
  //   </div>
  //   <div class="swiper-slide">
  //   <img src="/assets/img/clients/client-5.png"className="img-fluid" />
  //   </div>
  //   <div class="swiper-slide">
  //   <img src="/assets/img/clients/client-6.png" className="img-fluid" />
  //   </div>
  //   <div class="swiper-slide">
  //   <img src="/assets/img/clients/client-7.png" className="img-fluid"/>
  //   </div>
  //   <div class="swiper-slide">
  //   <img src="/assets/img/clients/client-8.png" className="img-fluid"/>
  //   </div>
  // </Slider>

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // console.log(responsive, "mansoor");
  return (
    <Carousel
      swipeable={true}
      showDots={false}
      slidesToSlide={1}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      pauseOnHover={true}
      arrows={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="swiper-wrapper align-items-center"
    >
      <div className="swiper-slide content-justify-center">
        <img src={client1} className="img-fluid-clients" />
      </div>
      <div className="swiper-slide">
        <img src={client2} className="img-fluid-clients" />
      </div>
      {/* <div class="swiper-slide">
        <img src="/assets/img/clients/client-3.png" className="img-fluid" />
      </div>
      <div class="swiper-slide">
        <img src="/assets/img/clients/client-4.png" className="img-fluid" />
      </div>
      <div class="swiper-slide">
        <img src="/assets/img/clients/client-5.png" className="img-fluid" />
      </div>
      <div class="swiper-slide">
        <img src="/assets/img/clients/client-6.png" className="img-fluid" />
      </div>
      <div class="swiper-slide">
        <img src="/assets/img/clients/client-7.png" className="img-fluid" />
      </div>
      <div class="swiper-slide">
        <img src="/assets/img/clients/client-8.png" className="img-fluid" />
      </div> */}
    </Carousel>
  );
}
