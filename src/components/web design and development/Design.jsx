import { Col, Container, Row } from "react-bootstrap"
import img from "../../assets/cover1.png"
import "./design.css"

const Design = () => {
  return (
    <>
    <div className="design_main">
        <Container>
            <Row>
                <Col lg={{span:8, offset:1}} xs={12} sm={12} md={12}>
                  <div className="body">
                  <h5>Web design and development</h5>
                    <h2>Finsweet Design case studies</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                  </div>
                </Col>
                <Col lg={{span:10,offset:1}}>
                    <div className="imgg">
                    <img src={img} className="w-100" alt="" />
                    </div>
                </Col>
                
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Design