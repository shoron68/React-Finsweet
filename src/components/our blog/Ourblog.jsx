import "./ourblog.css"
import img1 from "../../assets/blog-1.png"
import img2 from "../../assets/blog-2.png"
import img3 from "../../assets/blog-3.png"
import img4 from "../../assets/blog-4.png"
import img5 from "../../assets/blog-5.png"
import img6 from "../../assets/blog-6.png"
import { Col, Container, Row } from "react-bootstrap"

const Ourblog = () => {
  return (
    <>
    <div className="blogg_mainn">
        <Container>
            <Row className="justify-content-center">
                <Col lg ={4} xs={12} sm={12} md={12}>
                    <div className="headerr text-center">
                    <h3>Our Blog</h3>
                    </div>
                </Col>
            </Row>
            <div className="content_section">
            <Row>
            <Col lg={4} xs={6} sm={6} md={6}>
                <div className="inn">
                    <img src={img1} className="w-100" alt="" />
                    <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                </div>
                </Col>
                <Col lg={4} xs={6} sm={6} md={6}>
                <div className="inn">
                    <img src={img2} className="w-100" alt="" />
                    <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                </div>
                </Col>
                <Col lg={4} xs={6} sm={6} md={6}>
                <div className="inn">
                    <img src={img3} className="w-100" alt="" />
                    <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                </div>
                </Col>
                <Col lg={4} xs={6} sm={6} md={6}>
                <div className="inn">
                    <img src={img4} className="w-100" alt="" />
                    <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                </div>
                </Col>
                <Col lg={4} xs={6} sm={6} md={6}>
                <div className="inn">
                    <img src={img5} className="w-100" alt="" />
                    <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                </div>
                </Col>
                <Col lg={4} xs={6} sm={6} md={6}>
                <div className="inn">
                    <img src={img6} className="w-100" alt="" />
                    <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                </div>
                </Col>
            </Row>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Ourblog