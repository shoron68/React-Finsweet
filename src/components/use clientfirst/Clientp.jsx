import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./clientp.css"
import img from "../../assets/clientsp1.png"

const Clientp = () => {
  return (
    <div className="client_main">
        <Container>
            <div className="partone">
            <Row>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <h5>Use Client-first</h5>
                    <h3>Top agencies and freelancers around the world use 
                     Client-first 
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <img src={img} className='w-100' alt="" />
                </Col>
            </Row>
            </div>


            <div className="partwo">
            <Row>
                <Col lg={6} xs={12} sm={12} md={12}>
                <img src={img} className='w-100' alt="" /> 
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                <h5>Free Revision Rounds</h5>
                    <h3>Get free Revisions and one week of free maintenance 
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </Col>
            </Row>
            </div>



            <div className="partthree">
            <Row>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <h5>24/7 Support</h5>
                    <h3>Working with us, you will be getting 24/7 priority support 
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <img src={img} className='w-100' alt="" />
                </Col>
            </Row>
            </div>


            <div className="parfour">
            <Row>
                <Col lg={6} xs={12} sm={12} md={12}>
                <img src={img} className='w-100' alt="" /> 
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                <h5>Quick Delivery</h5>
                    <h3>Guranteed 1 week delivery for standard five pager website
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </Col>
            </Row>
            </div>

        </Container>
    </div>
  )
}

export default Clientp