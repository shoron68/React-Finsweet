import "./project.css"
import {Container,Row,Col} from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6";
import card1 from "../../assets/card.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"

const Project = () => {
  return (
    <>
    <div className="project_main">
        <Container>
            <Row>
                <Col lg={5} xs={9} sm={9} md={9}>
                    <div class="prj_head_left">
                        <h2>View our projects</h2>
                    </div>
                </Col>
                <Col lg={{span:2, offset:5}} xs={3} sm={3} md={3} >
                    <div class="prj_head_right">
                        <a href="#"> View More <FaArrowRightLong /></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8} xs={12} sm={12} md={12}>
                <div class="prj_left">
                    <img src={card1} className="w-100" alt="" />
                    <div class="gradient"></div>
                    <div class="inner_content">
                        <h3>Workhub office Webflow Webflow Design</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a href="#">View project <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                </Col>

                <Col lg={4} xs={12} sm={12} md={12}>
                    <Row>
                            <Col lg={12} xs={6} sm={6} md={6} >
                        <div class="umm">
                                    <div class="prj_right">
                                        <img src={card2} className="w-100" alt="" />
                                        <div class="gradientt"></div>
                                        <div class="inner_contentt">
                                            <h3>Unisaas Website Design</h3>
                                            <a href="#">View protfolio <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                        </Col>
                            <Col lg={12} xs={6} sm={6} md={6} >
                        <div class="umm">
                                    <div class="prj_right">
                                        <img src={card3} className="w-100" alt="" />
                                        <div class="gradientt"></div>
                                        <div class="inner_contentt">
                                            <h3>Unisaas Website Design</h3>
                                            <a href="#">View protfolio <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                        </Col>
                        {/* <Col clg={12} xs={6} sm={6} md={6}>
                        <div class="prj_right">
                                    <img src={card3} alt="" />
                                    <div class="gradientt"></div>
                                    <div class="inner_contentt">
                                        <h3>Unisaas Website Design</h3>
                                        <a href="#">View protfolio <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Project