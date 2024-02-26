import { Col, Container, Row } from "react-bootstrap"
import "./need.css"
import img from "../../assets/needbnr.png"


const Need = () => {
  return (
    <div className="need_main">
        <Container>
            <Row>
                <Col lg={5} xs={12} sm={12} md={12}>
                    <div className="left">
                    <h2>All the features you need</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="btnnn">
                    <a href="#">View Pricing</a>
                    </div>
                    </div>
                </Col>
                <Col lg={{span:6,offset:1}} xs={12} sm={12} md={12}>
                    <div className="right">
                    <img src={img} className="w-100" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Need