import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
  <>
  <section id="breadcrumbs_services" className="breadcrumbs">
    <div className="container">
      <ol>
        <li><Link to="/services">services</Link></li>
        <li>Professional Services</li>
      </ol>
      <h2>Professional Services</h2>
    </div>
  
    <main id="main">
    <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel"  className="carousel slide carousel-fade" data-bs-ride="carousel">
        <ol className="carousel-indicators" id="hero-carousel-indicators" />
        <div className="carousel-inner" role="listbox">
          {/* Slide 1 */}
           <div className="carousel-item-services" style={{background: 'url(assets/img/slide/slide-1.jpg)'}}>
          </div>
        </div>
        
      </div>
    </div>  
    </section>{/* End Breadcrumbs */}
</main>
</section>
</>


    )
}

export default Pricing
