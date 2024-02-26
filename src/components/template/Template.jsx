import { Col, Container, Row } from "react-bootstrap"
import "./template.css"
import img1 from "../../assets/cover1.png"
import img2 from "../../assets/cover2.png"
import img3 from "../../assets/cover3.png"
import img4 from "../../assets/cover4.png"
import img5 from "../../assets/cover5.png"
import img6 from "../../assets/cover6.png"
import { FaArrowRightLong } from "react-icons/fa6";


const Template = () => {
  return (
    <>
    <div className="main">
        <Container>
            <Row className="justify-content-center">
                <Col lg={8} xs={12} sm={12} md={12} className="text-center">
                   <div className="tabs">
                    <a href="#">All</a>
                    <a href="#">UI Design</a>
                    <a href="#">Webflow Design</a>
                    <a href="#">Figma Design</a>
                   </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="template_main">
                        <img src={img1} className="w-100" alt="" />
                        <h2>Template 1</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <a href="#">View Portfolio <FaArrowRightLong /></a>
                    </div>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="template_main">
                        <img src={img2} className="w-100" alt="" />
                        <h2>Template 2</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <a href="#">View Portfolio <FaArrowRightLong /></a>
                    </div>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="template_main">
                        <img src={img3} className="w-100" alt="" />
                        <h2>Template 3</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <a href="#">View Portfolio <FaArrowRightLong /></a>
                    </div>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="template_main">
                        <img src={img4} className="w-100" alt="" />
                        <h2>Template 4</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <a href="#">View Portfolio <FaArrowRightLong /></a>
                    </div>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="template_main">
                        <img src={img5} className="w-100" alt="" />
                        <h2>Template 5</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <a href="#">View Portfolio <FaArrowRightLong /></a>
                    </div>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="template_main">
                        <img src={img6} className="w-100" alt="" />
                        <h2>Template 6</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <a href="#">View Portfolio <FaArrowRightLong /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Template