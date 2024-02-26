import React from 'react'
import "./created.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Createrf = () => {
  return (
    <>
    <div className="created_main">
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="body text-center">
                        <h5>What we created</h5>
                        <h2>Our Work Portfolio</h2>
                        <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                        <div className="icons">
                            <FaFacebook className='i' />
                            <FaTwitter className='i' />
                            <FaInstagram  className='i'/>
                            <FaLinkedin className='i' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Createrf