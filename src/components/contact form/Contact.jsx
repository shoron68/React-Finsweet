import React from 'react'
import "./contact.css"
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="contact_main">
        <Container>
            <Row>
                <Col lg={6} className='p-0'>
                <div className="startup_left">
                  <div className="str_text">
                    <h3>Building stellar websites for early startups</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                  </div>
                </div>
                </Col>
                <Col lg={6} className='p-0'>
                <div className="startup_right">
                    <div className="signup">
                        <h5>Send inquiry</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        
                        <form>
                            <div className="mb-3">
                              <input type="text" className="control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
                              
                            </div>
                            <div className="mb-3">
                                <input type="email" className="control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Paste your Figma design URL"/>
                            </div>
                          </form>
                          <button type="submit" className='btnnnnn'>Send an Inquiry</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact