import { Col, Container, Row } from "react-bootstrap"
import "./reg.css"

const Reg = () => {
  return (
    <div className="contact_main">
        <Container>
            <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
               <div className="upper text-center">
               <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
               </div>
                </Col>
            </Row>
            <Row className="justify-content-center">

                <Col lg={10} xs={12} sm={12} md={12}>
                       <div className="form_body">
                       <Row>
                            <Col lg={6} xs={12} sm={12} md={12}>
                                <div className="inner">
                                    <h4>Name</h4>
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                            </Col>
                            <Col lg={6} xs={12} sm={12} md={12}>
                                <div className="inner">
                                    <h4>Email</h4>
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                            </Col>
                            <Col lg={6} xs={12} sm={12} md={12}>
                                <div className="inner">
                                    <h4>Subject</h4>
                                <input type="text" placeholder="Provice context" />
                                </div>
                            </Col>
                            <Col lg={6} xs={12} sm={12} md={12}>
                                <div className="inner">
                                    <h4>Subject</h4>
                                <input type="text" placeholder="Select Subject" />
                                </div>
                            </Col>
                            <Col lg={12} xs={12} sm={12} md={12}>
                                <div className="inner_msgbox">
                                    <h4>Message</h4>
                                <input type="text" placeholder="Write your  question here" />
                                </div>
                            </Col>
                            <div className="btnnn">
                                <button>Send Messege</button>
                            </div>
                        </Row>
                       </div>
                    </Col>

            </Row>
        </Container>
    </div>
  )
}

export default Reg