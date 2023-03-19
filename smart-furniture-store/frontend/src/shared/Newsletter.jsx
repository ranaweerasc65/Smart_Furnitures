import React from 'react'


import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'


const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2> Subscribe now to get new information.</h2>
                    <div className="newsletter__input">
                    <input type="email" placeholder="Enter your Email"/>
                    <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>
                    By subscribing, you will receive regular updates and new information about the store's furniture products, which can help you make informed purchasing decisions. Additionally, you may receive exclusive discounts or offers as a subscriber, giving you the opportunity to save money on your next furniture purchase.
                    </p>
                    

                </div>
            </Col>
            <Col lg="6"></Col>
            
        </Row>
    </Container>
  </section>
}

export default Newsletter