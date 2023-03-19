import React from 'react'
import '../styles/home.css'

import{ Container, Row, Col} from 'reactstrap';
import heroImg01 from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroImg03 from '../assets/images/hero-img03.jpg'
import Subtitle from '../shared/Subtitle';


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedNewarrivalList from '../components/Featured-newarrivals/FeaturedNewarrivalList';
import ImagesGallery from '../components/Image-gallery/ImagesGallery';
import Newsletter from '../shared/Newsletter';



/* HERO SECTION*/


const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center ">
              <Subtitle subtitle={'Bring Timeless Charm Home'}/>
            </div>
           
            <h1>The best way to buy <span className="highlight">modern </span>furniture</h1>
            <p>Welcome to Smart Furniture Store, where we're passionate about creating beautiful, 
              functional and affordable furniture for your home. Our expertly curated selection of 
              stylish pieces will transform any space into a welcoming and comfortable haven. 
              Plus, our commitment to sustainability means you can feel good about your purchase. 
              Shop with us today and experience the Smart Furniture Store difference!</p>
          </div>
        </Col>

        <Col lg ='2'>
          <div className="hero__img-box">
            <img src={heroImg01} alt=""/>
          </div>
        </Col>

        <Col lg ='2'>
          <div className="hero__img-box mt-4">
            <img src={heroImg02} alt="" controls/>
          </div>
        </Col>

        <Col lg ='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg03} alt=""/>
          </div>
        </Col>


        <SearchBar/>
      </Row>
    </Container>
  </section>


  <section>
    <Container>
      <Row>
        <Col lg='3'> 
        <h5 className="services__subtitle">
          What we serve
        </h5>
        <h2 className="services__title">
          We offer our best services
        </h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

{/* NEW ARRIVALS */}

<section>
  <Container>
      <Row>
        <Col lg = '12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
            <h2 className="featured_newarrival-title"> New Arrivals </h2>
        </Col>
        <FeaturedNewarrivalList/>
      </Row>
  </Container>
</section>

  {/* GALLERY*/}

  <section>
  <Container>
      <Row>
        <Col lg = '12' >
          <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery__title"> Visit our gallery </h2>
        </Col>
        <Col lg='12'>
          <ImagesGallery/>
        </Col>
       
      </Row>
  </Container>
</section>

<Newsletter/>
  </>
}

export default Home